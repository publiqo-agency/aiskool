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
  uniform float uTime;
  uniform float uMorph;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vAlpha;

  void main() {
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
    gl_Position = projectionMatrix * mv;
    float depth = -mv.z;
    gl_PointSize = uSize * uPixelRatio * (0.65 + aRand * 0.7) * (6.0 / depth);
    vAlpha = clamp(1.2 - depth / 14.0, 0.08, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.32, d) * vAlpha * uOpacity;
    gl_FragColor = vec4(uColor, a);
  }
`;

/* ───────────── Escena ───────────── */

function Points({ shape, color = "#e8e8e4", count = 2600, size = 3, opacity = 1, progress }: ParticleCanvasProps & { progress: RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const { gl, camera, pointer } = useThree();
  const { pos, target, rnd } = useMemo(() => build(shape, count), [shape, count]);

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
        },
      }),
    [shape, size, color, opacity, gl],
  );

  useEffect(() => () => material.dispose(), [material]);

  useEffect(() => {
    if (shape === "tunnel") camera.position.set(0, 0, 3);
    else if (shape === "terrain") {
      camera.position.set(0, 2.6, 5.2);
      camera.lookAt(0, 0, 0);
    } else camera.position.set(0, 0, 6);
  }, [shape, camera]);

  useFrame((_, delta) => {
    // Se accede al material por el ref del objeto (mutable) y no por el valor memoizado
    const mat = points.current?.material as THREE.ShaderMaterial | undefined;
    if (!mat) return;
    const u = mat.uniforms;
    u.uTime.value += delta;
    const p = progress.current ?? 0;
    u.uMorph.value += (p - u.uMorph.value) * Math.min(1, delta * 4);

    const g = group.current;
    if (!g) return;
    const tx = pointer.y * 0.18;
    const ty = pointer.x * 0.28;
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
      <points ref={points} material={material}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pos, 3]} />
          <bufferAttribute attach="attributes-aTarget" args={[target, 3]} />
          <bufferAttribute attach="attributes-aRand" args={[rnd, 1]} />
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
