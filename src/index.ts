import { registerRoot, Composition, useCurrentFrame, useVideoConfig } from 'remotion';
import { z } from 'zod';
import React from 'react';

const videoSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

// Componente con animación geométrica 3D low-poly simulada por CSS/Canvas y tipografía pro
const LowPolyScene: React.FC<z.infer<typeof videoSchema>> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Rotación y movimiento dinámico basado en los fotogramas
  const rotation = frame * 1.5;
  const pulse = Math.sin(frame / (fps * 0.5)) * 10;

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#030305',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
      padding: '50px',
      boxSizing: 'border-box'
    }}>
      {/* Fondo con retícula y efectos de iluminación low-poly */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 50% 30%, #1a1a3a 0%, #030305 70%)',
        zIndex: 1
      }} />

      {/* Elemento gráfico 3D Low-Poly abstracto simulado con CSS transformaciones */}
      <div style={{
        zIndex: 2,
        width: '220px',
        height: '220px',
        marginBottom: '50px',
        background: 'linear-gradient(135deg, #00ffcc 0%, #7928ca 100%)',
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        transform: `perspective(800px) rotateY(${rotation}deg) rotateX(20deg) translateY(${pulse}px)`,
        boxShadow: '0 0 50px rgba(0, 255, 204, 0.4)'
      }} />

      {/* Tarjeta de contenido frontal */}
      <div style={{
        zIndex: 2,
        background: 'rgba(15, 15, 25, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(0, 255, 204, 0.3)',
        borderRadius: '32px',
        padding: '60px 40px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
        width: '100%',
        maxWidth: '920px',
        textAlign: 'center'
      }}>
        <span style={{
          color: '#00ffcc',
          textTransform: 'uppercase',
          letterSpacing: '6px',
          fontSize: '24px',
          fontWeight: '900',
          marginBottom: '20px',
          display: 'block'
        }}>
          ⚡ Alta Demanda
        </span>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '900',
          lineHeight: '1.2',
          margin: '0 0 30px 0',
          color: '#ffffff'
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: '36px',
          color: '#a0a0c0',
          margin: '0',
          lineHeight: '1.4'
        }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <Composition
      id="Ejemplo"
      component={LowPolyScene}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        title: "Empleos remotos para hispanhablantes sin experiencia",
        subtitle: "Gana en dólares desde tu celular. ¡Cupos abiertos esta semana!",
      }}
      schema={videoSchema}
    />
  );
};

registerRoot(Root);
