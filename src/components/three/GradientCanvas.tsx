"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export type GradientCanvasProps = { className?: string; active?: boolean; still?: boolean };

/* Ruido simplex 3D (Ashima Arts / Stefan Gustavson, MIT) */
const noise = /* glsl */ `
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
`;

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

/**
 * Manchas de color deformadas con ruido (coral, magenta, violeta, azul)
 * + tramado de puntos que se marca hacia los bordes + grano.
 */
const fragment = /* glsl */ `
  uniform float uTime;
  uniform vec2 uRes;
  uniform float uDpr;
  varying vec2 vUv;
  ${noise}

  void main() {
    vec2 p = vUv;
    p.x *= uRes.x / uRes.y;
    float t = uTime * 0.05;

    vec2 q = vec2(snoise(vec3(p * 0.9, t)), snoise(vec3(p * 0.9 + 4.7, t)));
    vec2 r = p + q * 0.45;

    vec3 base    = vec3(0.10, 0.04, 0.20);
    vec3 blue    = vec3(0.18, 0.36, 1.00);
    vec3 violet  = vec3(0.42, 0.29, 1.00);
    vec3 magenta = vec3(0.91, 0.25, 0.50);
    vec3 coral   = vec3(1.00, 0.35, 0.21);

    vec3 col = mix(base, blue, smoothstep(-0.4, 0.8, snoise(vec3(r * 0.8 + 1.3, t * 1.2))));
    col = mix(col, violet, smoothstep(-0.3, 0.7, snoise(vec3(r * 1.1 + 7.1, t))));
    col = mix(col, magenta, smoothstep(-0.25, 0.55, snoise(vec3(r * 0.9 + 3.3, t * 0.9))));
    col = mix(col, coral, smoothstep(-0.1, 0.6, snoise(vec3(r * 0.7 + 9.4, t * 1.1))));

    // Tramado de puntos: invisible en el centro, marcado hacia los bordes
    float cell = 7.0 * uDpr;
    vec2 g = fract(gl_FragCoord.xy / cell) - 0.5;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    float rad = 0.22 + lum * 0.3;
    float dotMask = smoothstep(rad, rad - 0.12, length(g));
    vec2 c = vUv - 0.5;
    float edge = smoothstep(0.28, 0.62, length(c * vec2(1.25, 1.0)));
    col *= mix(1.0, mix(0.7, 1.18, dotMask), edge * 0.85);

    // Viñeta inferior hacia el violeta oscuro de la tarjeta que sube
    col = mix(col, base, smoothstep(0.35, 0.0, vUv.y) * 0.55);

    float n = fract(sin(dot(gl_FragCoord.xy + fract(uTime) * 61.0, vec2(12.9898, 78.233))) * 43758.5453);
    col += (n - 0.5) * 0.05;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Plane({ still }: { still?: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const { size, gl } = useThree();

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        depthWrite: false,
        depthTest: false,
        uniforms: {
          uTime: { value: 12 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uDpr: { value: 1 },
        },
      }),
    [],
  );
  useEffect(() => () => material.dispose(), [material]);

  useFrame((_, delta) => {
    const mat = mesh.current?.material as THREE.ShaderMaterial | undefined;
    if (!mat) return;
    mat.uniforms.uRes.value.set(size.width, size.height);
    mat.uniforms.uDpr.value = gl.getPixelRatio();
    if (!still) mat.uniforms.uTime.value += delta;
  });

  return (
    <mesh ref={mesh} material={material} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export default function GradientCanvas({ className, active = true, still = false }: GradientCanvasProps) {
  return (
    <Canvas
      className={className}
      dpr={[1, 1.5]}
      frameloop={still ? "demand" : active ? "always" : "never"}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      aria-hidden
    >
      <Plane still={still} />
    </Canvas>
  );
}
