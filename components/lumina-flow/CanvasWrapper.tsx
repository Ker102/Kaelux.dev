'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { WaveScene } from './Wave';
import { UIOverlay } from './UIOverlay';

export const CanvasWrapper: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Base background is black for the Wave scene. The IntroScene will overlay a white world on top initially. */}
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 10, 40]} />

          <ambientLight intensity={0.8} />

          {/* 3D Wave Background */}
          <WaveScene />

          {/* HTML Overlay Content */}
          <UIOverlay />

        </Suspense>
      </Canvas>
    </div>
  );
};
