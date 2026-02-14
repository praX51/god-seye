'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function EyeModel() {
  const outer = useRef<Mesh | null>(null)
  const inner = useRef<Mesh | null>(null)
  const ring = useRef<Mesh | null>(null)

  useFrame((state, delta) => {
    if (outer.current) outer.current.rotation.y += delta * 0.12
    if (inner.current) inner.current.rotation.y -= delta * 0.18
    if (ring.current) ring.current.rotation.z += delta * 0.6
    const t = state.clock.getElapsedTime()
    if (inner.current) inner.current.scale.setScalar(1 + Math.sin(t * 2) * 0.03)
    if (ring.current) ring.current.scale.setScalar(1 + Math.sin(t * 1.8) * 0.06)
  })

  return (
    <group>
      <mesh ref={outer}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial metalness={0.8} roughness={0.1} color={'#071018'} emissive={'#001115'} emissiveIntensity={0.1} />
      </mesh>

      <mesh ref={inner} position={[0, 0, 0.5]}>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshStandardMaterial color={'#001f0f'} emissive={'#00ff6a'} emissiveIntensity={0.9} metalness={0.6} roughness={0.05} />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.03, 8, 200]} />
        <meshStandardMaterial color={'#00ff6a'} emissive={'#00ff6a'} emissiveIntensity={0.7} toneMapped={false} transparent opacity={0.85} />
      </mesh>
    </group>
  )
}

export default function Hero3D(){
  return (
    <div className="glass glow" style={{width: '560px', height: '420px', borderRadius: 20, overflow:'hidden', position:'relative', pointerEvents: 'none'}}>
      {/* visual-only wrapper: disables pointer events so page receives wheel/scroll */}
      <div style={{position:'absolute', inset:0, pointerEvents: 'none'}}>
        {/* Canvas is visual-only so pointer events are disabled to allow page scroll when cursor is over the hero */}
        <Canvas style={{pointerEvents: 'none'}} camera={{ position: [0, 0, 6], fov: 35 }}>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.6} position={[5, 5, 5]} />
          <React.Suspense fallback={null}>
            <EyeModel />
          </React.Suspense>
        </Canvas>
      </div>
      <div className="scan-line" style={{borderRadius:20, pointerEvents: 'none'}} />
      {/* Keep the caption interactive if needed */}
      <div style={{position:'absolute',left:18,bottom:18,color:'#9eeccb',fontWeight:700,fontSize:12, pointerEvents: 'auto'}}>AI Eye — Autonomous Pulse</div>
    </div>
  )
}
