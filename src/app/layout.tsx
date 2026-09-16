import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alberto Martín Candia Galeano | Frontend Developer Trainee",
  description:
    "Desarrollador Frontend Trainee especializado en React y TypeScript. Estudiante de Licenciatura en Análisis de Sistemas. Construyo interfaces web modernas, interactivas y responsivas.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Junior Developer",
    "Trainee",
  ],
  authors: [{ name: "Alberto Martín Candia Galeano" }],
  creator: "Alberto Martín Candia Galeano",
  publisher: "Alberto Martín Candia Galeano",
  robots: "index, follow",
  openGraph: {
    title: "Alberto Martín Candia Galeano | Frontend Developer Trainee",
    description:
      "Desarrollador Frontend Trainee especializado en React y TypeScript.",
    type: "website",
    locale: "es_ES",
    siteName: "Portafolio Alberto Candia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto Martín Candia Galeano | Frontend Developer Trainee",
    description:
      "Desarrollador Frontend Trainee especializado en React y TypeScript.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}