import { registerRoot, Composition } from 'remotion';
import { z } from 'zod';
import React from 'react';

const videoSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

const LowPolyShort: React.FC<z.infer<typeof videoSchema>> = ({ title, subtitle }) => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#0a0a0c',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'system-ui, sans-serif',
      color: '#ffffff',
      padding: '40px',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #1e1e2f 0%, #111118 100%)',
        border: '2px solid #00ffcc',
        borderRadius: '24px',
        padding: '50px 30px',
        boxShadow: '0 20px 50px rgba(0, 255, 204, 0.2)',
        width: '100%',
        maxWidth: '900px'
      }}>
        <span style={{
          color: '#00ffcc',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          display: 'block'
        }}>
          🔥 Oportunidad Verificada
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
      component={LowPolyShort}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        title: "Trabaja desde casa empacando cajas y sobres",
        subtitle: "Aplica hoy mismo y recibe pagos semanales en dólares. ¡Cupos limitados!",
      }}
      schema={videoSchema}
    />
  );
};

registerRoot(Root);
