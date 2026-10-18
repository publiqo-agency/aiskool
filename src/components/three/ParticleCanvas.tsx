"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollTrigger } from "@/lib/gsap";

export type Shape = "sphere" | "tunnel" | "terrain" | "torus" | "cloud";

export type ParticleCanvasProps = {
  shape: Shape;
  color?: string;
  count?: number;
  size?: number;
  opacity?: number;
  /** Elemento cuyo progreso de scroll (0→1) controla el morph / la cámara */
  scrollTrigger?: RefObject<HTMLElement | null>;
  scrollStart?: string;
  scrollEnd?: string;
  className?: string;
  active?: boolean;
  /** Si se pasa, cada partícula toma un color de la paleta en vez de `color` */
  palette?: readonly string[];
};

/* ───────────── Generadores de formas (posición inicial y objetivo) ───────────── */

function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function build(shape: Shape, count: number) {
  const pos = new Float32Array(count * 3);
  const target = new Float32Array(count * 3);
  const rnd = new Float32Array(count);

  if (shape === "sphere") {
    // Esfera de Fibonacci con leve ruido («red neuronal») → retícula ordenada
    const side = Math.ceil(Math.sqrt(count));
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      const n = 1 + (rand(i) - 0.5) * 0.06;
      pos.set([Math.cos(th) * r * 1.7 * n, y * 1.7 * n, Math.sin(th) * r * 1.7 * n], i * 3);
      const gx = (i % side) / (side - 1) - 0.5;
      const gy = Math.floor(i / side) / (side - 1) - 0.5;
      target.set([gx * 7.5, gy * 7.5 * 0.62, 0], i * 3);
      rnd[i] = rand(i + 7);
    }
  } else if (shape === "tunnel") {
    const rings = 70;
    const per = Math.floor(count / rings);
    for (let i = 0; i < count; i++) {
      const ring = Math.floor(i / per);
      const a = ((i % per) / per) * Math.PI * 2;
      const rad = 2.2 + Math.sin(ring * 0.35) * 0.15;
      pos.set([Math.cos(a) * rad, Math.sin(a) * rad, -ring * 0.32], i * 3);
      target.set([Math.cos(a) * rad * 1.6, Math.sin(a) * rad * 1.6, -ring * 0.32], i * 3);
      rnd[i] = rand(i);
    }
  } else if (shape === "terrain") {
    const side = Math.ceil(Math.sqrt(count));
    for (let i = 0; i < count; i++) {
      const x = ((i % side) / (side - 1) - 0.5) * 9;
      const z = (Math.floor(i / side) / (side - 1) - 0.5) * 6;
      pos.set([x, 0, z], i * 3);
      target.set([x, 0, z], i * 3);
      rnd[i] = rand(i);
    }
  } else if (shape === "torus") {
    const R = 1.6;
    const r = 0.62;
    for (let i = 0; i < count; i++) {
      const u = rand(i) * Math.PI * 2;
      const v = rand(i + 3.1) * Math.PI * 2;
      const p = [(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)];
      pos.set(p, i * 3);
      target.set([p[0] * 1.25, p[1] * 1.25, p[2] * 1.25], i * 3);
      rnd[i] = rand(i + 9);
    }
  } else {
    // nube
    for (let i = 0; i < count; i++) {
      const r = Math.cbrt(rand(i)) * 2.4;
      const th = rand(i + 1.3) * Math.PI * 2;
      const ph = Math.acos(2 * rand(i + 2.7) - 1);
      const p = [r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th) * 0.8, r * Math.cos(ph)];
      pos.set(p, i * 3);
      target.set([p[0] * 0.55, p[1] * 0.55, p[2] * 0.55], i * 3);
      rnd[i] = rand(i + 5);
    }
  }
  return { pos, target, rnd };
}

/* ───────────── Shaders ───────────── */

const vertex = (shape: Shape) => /* glsl */ `
  attribute vec3 aTarget;
  attribute float aRand;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uMorph;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uAspect;
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    vColor = aColor;
    float m = smoothstep(0.0, 1.0, clamp(uMorph * 1.2 - aRand * 0.2, 0.0, 1.0));
    vec3 p = mix(position, aTarget, m);

    ${
      shape === "terrain"
        ? `p.y += sin(p.x * 0.9 + uTime * 0.6) * 0.35 + cos(p.z * 1.3 + uTime * 0.45) * 0.28 + sin((p.x + p.z) * 2.1 + uTime) * 0.06;`
        : ""
    }
    ${shape === "tunnel" ? `p.z = mod(p.z + uTime * 0.9, 22.4) - 20.0;` : ""}
    ${shape === "cloud" ? `p += 0.05 * vec3(sin(uTime * 0.6 + aRand * 20.0), cos(uTime * 0.5 + aRand * 13.0), 0.0);` : ""}

    vec4 mv = modelViewMatrix * vec4(p, 1.0);

    // Repulsión del ratón en espacio de pantalla: los puntos se apartan del cursor y vuelven al irse
    vec4 clip = projectionMatrix * mv;
    vec2 d = clip.xy / clip.w - uMouse;
    d.x *= uAspect;
    float dist = length(d) + 1e-4;
    float f = pow(1.0 - clamp(dist / 0.34, 0.0, 1.0), 2.0) * uHover;
    vec2 push = (d / dist) * f * (0.16 + aRand * 0.1);
    push.x /= uAspect;
    mv.xy += push * (-mv.z) / vec2(projectionMatrix[0][0], projectionMatrix[1][1]);

    gl_Position = projectionMatrix * mv;
    float depth = -mv.z;
    gl_PointSize = uSize * uPixelRatio * (0.65 + aRand * 0.7) * (6.0 / depth) * (1.0 + f * 0.6);
    vAlpha = clamp(1.2 - depth / 14.0 + f * 0.4, 0.08, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uUsePalette;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.32, d) * vAlpha * uOpacity;
    gl_FragColor = vec4(mix(uColor, vColor, uUsePalette), a);
  }
`;

/* ───────────── Escena ───────────── */

function Points({
  shape,
  color = "#e8e8e4",
  count = 2600,
  size = 3,
  opacity = 1,
  palette,
  progress,
}: ParticleCanvasProps & { progress: RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const { gl, camera, scene, size: viewport } = useThree();
  // Ratón en coordenadas normalizadas del canvas. El canvas no recibe eventos (pointer-events: none
  // para no tapar textos y botones), así que se escucha en window.
  const client = useRef<{ x: number; y: number } | null>(null);
  const pointer = useRef(new THREE.Vector2());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => (client.current = { x: e.clientX, y: e.clientY });
    const onLeave = () => (client.current = null);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  const { pos, target, rnd } = useMemo(() => build(shape, count), [shape, count]);
  const paletteKey = palette?.join(",") ?? "";
  const colors = useMemo(() => {
    const out = new Float32Array(count * 3);
    const list = paletteKey ? paletteKey.split(",").map((c) => new THREE.Color(c)) : [];
    if (!list.length) return out;
    for (let i = 0; i < count; i++) {
      const c = list[Math.floor(rand(i + 11.7) * list.length)];
      out.set([c.r, c.g, c.b], i * 3);
    }
    return out;
  }, [paletteKey, count]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertex(shape),
        fragmentShader: fragment,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uMorph: { value: 0 },
          uSize: { value: size },
          uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
          uColor: { value: new THREE.Color(color) },
          uOpacity: { value: opacity },
          uUsePalette: { value: paletteKey ? 1 : 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uHover: { value: 0 },
          uAspect: { value: 1 },
        },
      }),
    [shape, size, color, opacity, paletteKey, gl],
  );

  useEffect(() => () => material.dispose(), [material]);

  useEffect(() => {
    if (shape === "tunnel") camera.position.set(0, 0, 3);
    else if (shape === "terrain") {
      camera.position.set(0, 2.6, 5.2);
      camera.lookAt(0, 0, 0);
    } else camera.position.set(0, 0, 6);
  }, [shape, camera]);

  // Compila el shader y pinta un primer fotograma al montar, aunque el canvas siga pausado fuera de
  // pantalla: así no hay hueco en blanco ni tirón de compilación al llegar con el scroll
  useEffect(() => {
    if (group.current && (shape === "torus" || shape === "cloud")) group.current.rotation.x = 0.5;
    gl.compile(scene, camera);
    gl.render(scene, camera);
  }, [gl, scene, camera, material, shape]);

  useFrame((_, delta) => {
    // Se accede al material por el ref del objeto (mutable) y no por el valor memoizado
    const mat = points.current?.material as THREE.ShaderMaterial | undefined;
    if (!mat) return;
    const u = mat.uniforms;
    u.uTime.value += delta;
    const p = progress.current ?? 0;
    u.uMorph.value += (p - u.uMorph.value) * Math.min(1, delta * 4);

    // El cursor se sigue con algo de retraso y la fuerza entra y sale suave: los puntos fluyen y vuelven
    // Se recalcula cada fotograma con el rect actual: el canvas se desplaza al hacer scroll
    const c = client.current;
    const r = c ? gl.domElement.getBoundingClientRect() : null;
    const mx = c && r ? ((c.x - r.left) / r.width) * 2 - 1 : 0;
    const my = c && r ? -(((c.y - r.top) / r.height) * 2 - 1) : 0;
    const m = { x: mx, y: my, inside: !!c && Math.abs(mx) < 1.15 && Math.abs(my) < 1.15 };
    const k = Math.min(1, delta * 7);
    if (m.inside) {
      if (u.uHover.value < 0.01) u.uMouse.value.set(m.x, m.y);
      u.uMouse.value.x += (m.x - u.uMouse.value.x) * k;
      u.uMouse.value.y += (m.y - u.uMouse.value.y) * k;
    }
    u.uHover.value += ((m.inside ? 1 : 0) - u.uHover.value) * Math.min(1, delta * 3);
    u.uAspect.value = viewport.width / Math.max(1, viewport.height);
    if (m.inside) pointer.current.set(Math.max(-1, Math.min(1, m.x)), Math.max(-1, Math.min(1, m.y)));
    else pointer.current.multiplyScalar(0.96);

    const g = group.current;
    if (!g) return;
    const tx = pointer.current.y * 0.18;
    const ty = pointer.current.x * 0.28;
    if (shape === "sphere") {
      g.rotation.y += delta * 0.08 * (1 - u.uMorph.value);
      g.rotation.x += (tx * (1 - u.uMorph.value) - g.rotation.x) * 0.05;
      g.position.y = u.uMorph.value * 0.6;
    } else if (shape === "torus" || shape === "cloud") {
      g.rotation.y += delta * 0.12;
      g.rotation.x += (tx + 0.5 - g.rotation.x) * 0.04;
    } else if (shape === "terrain") {
      g.rotation.y += (ty * 0.4 - g.rotation.y) * 0.04;
    } else if (shape === "tunnel") {
      g.rotation.z += delta * 0.05;
      g.rotation.x += (tx * 0.3 - g.rotation.x) * 0.04;
      g.rotation.y += (ty * 0.3 - g.rotation.y) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <points ref={points} material={material} key={paletteKey}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pos, 3]} />
          <bufferAttribute attach="attributes-aTarget" args={[target, 3]} />
          <bufferAttribute attach="attributes-aRand" args={[rnd, 1]} />
          <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        </bufferGeometry>
      </points>
    </group>
  );
}

export default function ParticleCanvas(props: ParticleCanvasProps) {
  const progress = useRef(0);
  const { scrollTrigger, scrollStart = "top top", scrollEnd = "bottom top", active = true } = props;

  useEffect(() => {
    const el = scrollTrigger?.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: scrollStart,
      end: scrollEnd,
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress;
      },
    });
    return () => st.kill();
  }, [scrollTrigger, scrollStart, scrollEnd]);

  return (
    <Canvas
      className={props.className}
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      camera={{ fov: 45, near: 0.1, far: 60, position: [0, 0, 6] }}
      aria-hidden
    >
      <Points {...props} progress={progress} />
    </Canvas>
  );
}
