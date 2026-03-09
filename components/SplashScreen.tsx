"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // 2.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-warm-800 via-warm-700 to-warm-900"
        >
          {/* Elementos flotantes alrededor del logo */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Medialuna superior izquierda */}
            <motion.div
              className="absolute top-20 left-20 text-4xl"
              animate={{
                rotate: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              🥐
            </motion.div>

            {/* Cookie superior derecha */}
            <motion.div
              className="absolute top-32 right-24 text-3xl"
              animate={{
                rotate: [0, -360],
                y: [0, -15, 0],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
            >
              🍪
            </motion.div>

            {/* Croissant inferior izquierda */}
            <motion.div
              className="absolute bottom-24 left-32 text-5xl"
              animate={{
                rotate: [0, 360],
                y: [0, -25, 0],
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
            >
              🥐
            </motion.div>

            {/* Cookie inferior derecha */}
            <motion.div
              className="absolute bottom-32 right-20 text-4xl"
              animate={{
                rotate: [0, -360],
                y: [0, -18, 0],
              }}
              transition={{
                rotate: { duration: 9, repeat: Infinity, ease: "linear" },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              }}
            >
              🍪
            </motion.div>

            {/* Pan central */}
            <motion.div
              className="absolute top-1/2 left-1/2 text-6xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              }}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              🍞
            </motion.div>

            {/* Galleta flotante extra */}
            <motion.div
              className="absolute top-1/3 left-1/4 text-3xl"
              animate={{
                rotate: [0, -360],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 7, repeat: Infinity, ease: "linear" },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
            >
              🍪
            </motion.div>
          </div>

          {/* Logo central con animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              delay: 0.3
            }}
            className="relative z-10 text-center"
          >
            <motion.img
              src="/images/logo-transparente.png"
              alt="MC Delicias Campestres"
              className="w-[300px] h-auto mx-auto"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
            />
            
            {/* Texto de carga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6"
            >
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-white/80 text-sm mt-3 font-medium"
              >
                Preparando delicias artesanales...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
