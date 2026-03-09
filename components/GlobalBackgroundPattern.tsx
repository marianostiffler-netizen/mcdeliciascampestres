"use client";

import { useEffect, useState } from "react";

const GlobalBackgroundPattern = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Siluetas reales de panificación más detalladas
  const bakeryElements = [
    // Galleta con chips
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="13" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
      <path d="M8 8l8 8"/>
    </svg>`,
    
    // Pan francés
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M6 10h12v8H6z"/>
      <path d="M8 10v8"/>
      <path d="M16 10v8"/>
      <path d="M6 12h12"/>
      <path d="M7 14h10"/>
      <path d="M6 16h12"/>
      <path d="M4 10h2v8H4z"/>
      <path d="M18 10h2v8h-2z"/>
    </svg>`,
    
    // Factura tipo medialuna
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M12 2C8 2 4 6 4 10s4 8 8 8 8-4 8-8-4-8-8-8z"/>
      <path d="M12 2v16"/>
      <path d="M8 8l8 0"/>
      <path d="M9 10l6 0"/>
      <path d="M10 12l4 0"/>
    </svg>`,
    
    // Espiga de trigo más detallada
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M12 2v20"/>
      <path d="M8 6l4-4 4 4"/>
      <path d="M8 12l4-4 4 4"/>
      <path d="M8 18l4-4 4 4"/>
      <circle cx="8" cy="6" r="1" fill="currentColor"/>
      <circle cx="16" cy="6" r="1" fill="currentColor"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <circle cx="16" cy="12" r="1" fill="currentColor"/>
      <circle cx="8" cy="18" r="1" fill="currentColor"/>
      <circle cx="16" cy="18" r="1" fill="currentColor"/>
    </svg>`,
    
    // Baguette
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M2 12s0-4 10-4 10 4 10 4-10 4-10-4-10-4z"/>
      <path d="M6 12h12"/>
      <path d="M8 10h8"/>
      <path d="M8 14h8"/>
      <path d="M10 8h4"/>
      <path d="M10 16h4"/>
    </svg>`,
    
    // Rosca de pan
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 4v16"/>
      <path d="M4 12h16"/>
      <path d="M12 4c-2 0-4 2-4 4"/>
      <path d="M12 4c2 0 4 2 4 4"/>
      <path d="M12 20c-2 0-4-2-4-4"/>
      <path d="M12 20c2 0 4-2 4-4"/>
    </svg>`,
    
    // Alfajor simple
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <rect x="6" y="8" width="12" height="8" rx="1"/>
      <path d="M6 12h12"/>
      <path d="M8 8v8"/>
      <path d="M16 8v8"/>
      <circle cx="12" cy="10" r="1" fill="currentColor"/>
    </svg>`,
    
    // Pan redondo
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="12" cy="12" r="8"/>
      <path d="M8 12h8"/>
      <path d="M12 8v8"/>
      <path d="M10 10l4 4"/>
      <path d="M14 10l-4 4"/>
      <circle cx="9" cy="9" r="1" fill="currentColor"/>
      <circle cx="15" cy="9" r="1" fill="currentColor"/>
      <circle cx="9" cy="15" r="1" fill="currentColor"/>
      <circle cx="15" cy="15" r="1" fill="currentColor"/>
    </svg>`,
    
    // Hojaldre
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M4 8h16v12H4z"/>
      <path d="M4 10h16"/>
      <path d="M4 12h16"/>
      <path d="M4 14h16"/>
      <path d="M4 16h16"/>
      <path d="M8 8v12"/>
      <path d="M12 8v12"/>
      <path d="M16 8v12"/>
      <path d="M6 8l1 12"/>
      <path d="M10 8l1 12"/>
      <path d="M14 8l1 12"/>
      <path d="M18 8l1 12"/>
    </svg>`,
    
    // Tarta pequeña
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M6 12h12v8H6z"/>
      <path d="M4 12h16"/>
      <path d="M8 12v8"/>
      <path d="M16 12v8"/>
      <path d="M6 8l6-4 6 4"/>
      <circle cx="9" cy="10" r="1" fill="currentColor"/>
      <circle cx="15" cy="10" r="1" fill="currentColor"/>
      <circle cx="12" cy="9" r="1" fill="currentColor"/>
    </svg>`,
  ];

  // Generar patrón con más densidad y efectos de profundidad
  const generatePattern = () => {
    const pattern = [];
    for (let i = 0; i < 80; i++) { // Más elementos
      const hasBlur = Math.random() > 0.6; // 40% con blur para profundidad
      pattern.push({
        id: i,
        element: bakeryElements[i % bakeryElements.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 12 + Math.random() * 28, // Tamaños entre 12px y 40px
        rotation: Math.random() * 360,
        opacity: 0.05 + Math.random() * 0.03, // 5% a 8% de opacidad
        blur: hasBlur ? Math.random() * 2 : 0, // Blur hasta 2px
      });
    }
    return pattern;
  };

  const [pattern, setPattern] = useState(generatePattern);

  // Regenerar patrón en el cliente para evitar SSR issues
  useEffect(() => {
    if (isClient) {
      setPattern(generatePattern());
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    >
      {pattern.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            opacity: item.opacity,
            filter: item.blur > 0 ? `blur(${item.blur}px)` : 'none',
            color: '#5D4A45', // Café con leche muy oscuro
          }}
        >
          <div
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
            }}
            dangerouslySetInnerHTML={{ __html: item.element }}
          />
        </div>
      ))}
    </div>
  );
};

export default GlobalBackgroundPattern;
