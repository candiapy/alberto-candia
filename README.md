# Portafolio - Alberto Martín Candia Galeano

Portafolio personal desarrollado con Next.js 14, React 18, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (con tema personalizado)
- **ESLint** + **Prettier**

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🎨 Características

- **Diseño editorial** asimétrico y moderno
- **Tema de colores** personalizado (Material Design 3 inspired)
- **Tipografías**: Inter, Newsreader, JetBrains Mono
- **Totalmente responsivo** (mobile-first)
- **Accesibilidad** semántica (ARIA, landmarks)
- **SEO optimizado** (metadata, Open Graph, Twitter Cards)
- **Formulario de contacto** funcional
- **Animaciones** y transiciones suaves

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales + Tailwind
│   ├── layout.tsx       # Layout raíz + fuentes + metadata
│   └── page.tsx         # Página principal (composición de secciones)
├── components/
│   └── sections/        # Componentes de cada sección
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Technologies.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── lib/
│   └── data.ts          # Datos centralizados (proyectos, techs, experiencia, etc.)
└── types/
    └── index.ts         # Tipos TypeScript
```

## 🔧 Personalización

### Colores y tema
Edita `tailwind.config.ts` para modificar la paleta de colores, espaciado, tipografías, etc.

### Contenido
Todos los textos y datos están en `src/lib/data.ts`:
- Información personal
- Stack tecnológico
- Experiencia y formación
- Proyectos
- Datos de contacto

### Fuentes
Las fuentes se cargan en `src/app/layout.tsx` usando `next/font/google`:
- **Inter** (UI/Body)
- **Newsreader** (Headlines)
- **JetBrains Mono** (Code/Labels)

## 📄 Licencia

MIT License - Libre para uso personal y comercial.