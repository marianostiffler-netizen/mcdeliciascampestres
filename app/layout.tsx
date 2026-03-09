import type { Metadata } from 'next'
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "MC Delicias Campestres | Catálogo Mayorista & Minorista",
  description:
    "Productos de panificación artesanal hechos con amor. Alfajores, frolas, tartas, hojaldres y más. Precios especiales por mayor para tu negocio.",
  keywords:
    "panificación artesanal, alfajores, pasta frola, tartas, hojaldres, panadería, catering, mayorista",
  openGraph: {
    title: "MC Delicias Campestres",
    description: "Panificación artesanal hecha con amor ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="grain-overlay"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <SplashScreen />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
