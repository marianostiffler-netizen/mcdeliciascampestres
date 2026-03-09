"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundPattern = () => {
  const { scrollY } = useScroll();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto parallax muy suave para el patrón
  const patternY = useTransform(scrollY, [0, 1000], [0, -50]);

  // Iconos SVG minimalistas de panadería
  const icons = [
    // Medialuna
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M12 2C8 2 4 6 4 10s4 8 8 8 8-4 8-8-4-8-8-8z"/>
      <path d="M12 2v16"/>
    </svg>`,
    
    // Pan
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <rect x="4" y="8" width="16" height="12" rx="2"/>
      <path d="M4 12h16"/>
      <path d="M8 8v12"/>
      <path d="M16 8v12"/>
    </svg>`,
    
    // Rodillo de amasar
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="12" cy="12" r="8"/>
      <path d="M4 12h16"/>
      <path d="M12 4v16"/>
    </svg>`,
    
    // Espiga de trigo
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M12 2v20"/>
      <path d="M8 6l4-4 4 4"/>
      <path d="M8 12l4-4 4 4"/>
      <path d="M8 18l4-4 4 4"/>
    </svg>`,
    
    // Croissant
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M2 12s0-8 10-8 10 8 10 8-10 8-10-8-10-8z"/>
      <path d="M2 12s4 0 10-4 10 4"/>
    </svg>`,
    
    // Galleta
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="9" cy="10" r="1"/>
      <circle cx="15" cy="10" r="1"/>
      <circle cx="12" cy="14" r="1"/>
    </svg>`,
    
    // Bolsa de harina
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M6 8h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8z"/>
      <path d="M8 8V6a4 4 0 018 0v2"/>
      <path d="M10 4h4"/>
    </svg>`,
    
    // Horno
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <rect x="4" y="10" width="16" height="10" rx="2"/>
      <path d="M8 10V6a4 4 0 018 0v4"/>
      <circle cx="8" cy="16" r="1"/>
      <circle cx="16" cy="16" r="1"/>
    </svg>`,
  ];

  // Generar posiciones aleatorias para los iconos
  const generatePattern = () => {
    const pattern = [];
    for (let i = 0; i < 20; i++) {
      pattern.push({
        id: i,
        icon: icons[i % icons.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
        opacity: 0.03 + Math.random() * 0.02, // 3% a 5% de opacidad
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Patrón de fondo con parallax */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0"
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
            }}
          >
            <div
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                color: "#5D4037", // Tono más claro que el fondo
              }}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
          </div>
        ))}
      </motion.div>

      {/* Área limpia detrás del logo y texto principal */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-warm-900/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-900/20" />
      
      {/* Reducción de elementos en el centro */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-warm-900/10" />
      </div>
    </div>
  );
};

export default BackgroundPattern;
