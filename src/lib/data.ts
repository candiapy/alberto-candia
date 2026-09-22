import type {
  NavLink,
  TechItem,
  ExperienceItem,
  ProjectItem,
  ContactInfo,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const coreStack = [
  { name: "React 18", color: "text-primary", bg: "bg-primary-container/20" },
  {
    name: "TypeScript",
    color: "text-tertiary",
    bg: "bg-tertiary-container/20",
  },
  {
    name: "Tailwind CSS",
    color: "text-secondary",
    bg: "bg-secondary-container/20",
  },
];

export const techItems: TechItem[] = [
  {
    label: "React 18 / 19",
    icon: "R",
    color: "bg-primary-container text-on-primary",
    category: "Core Library",
    categoryColor: "bg-primary/10 text-primary",
    description:
      "Desarrollo modular basado en componentes funcionales, hooks personalizados (useState, useEffect, useMemo), gestión de estado predecible y optimización del ciclo de renderizado.",
    highlights: ["Enfoque actual: React 19 Server Components"],
  },
  {
    label: "TypeScript",
    icon: "TS",
    color: "bg-tertiary-container text-on-tertiary",
    category: "Strict Typing",
    categoryColor: "bg-tertiary/10 text-tertiary",
    description:
      "Tipado estricto para componentes robustos y autodocumentados. Definición precisa de interfaces, types, discriminación de uniones y tipado de propiedades para props, eventos y respuestas de APIs REST.",
    highlights: ["Cero uso de 'any' implícito; contratos seguros"],
  },
  {
    label: "Tailwind CSS",
    icon: "TW",
    category: "Estilos & UI",
    description:
      "Composición ágil de interfaces responsivas con diseño sistemático, variables CSS y dark mode semántico.",
  },
  {
    label: "JavaScript (ES6+)",
    icon: "JS",
    category: "Fundamentos",
    description:
      "Manejo de promesas, async/await, métodos funcionales de array, desestructuración y eventos del DOM.",
  },
  {
    label: "HTML5 Semántico",
    icon: "H5",
    category: "Accesibilidad",
    description:
      "Estructuras lógicas, landmarks accesibles para lectores de pantalla y cumplimiento de directrices básicas WCAG.",
  },
  {
    label: "Vite · NPM",
    icon: "VN",
    category: "Tooling",
    description:
      "Configuración de entornos de desarrollo rápidos, resolución de módulos ESM y gestión limpia de dependencias.",
  },
  {
    label: "Git & GitHub",
    icon: "GT",
    category: "Control de Versión",
    description:
      "Flujos de trabajo con ramas (feature branching), commits descriptivos convencionales y despliegues continuos.",
  },
  {
    label: "REST APIs · Fetch",
    icon: "RA",
    category: "Integración",
    description:
      "Consumo asíncrono de servicios externos, manejo integral de estados de carga, caché básica y gestión de errores.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    type: "work",
    title: "Desarrollo Frontend Autónomo · Práctica",
    role: "Proyectos Frontend y Aplicaciones Web",
    period: "2023 — Presente",
    description:
      "Planificación, maquetación e implementación de aplicaciones interactivas en React con TypeScript. Creación de interfaces conectadas a APIs REST públicas, formulación de arquitecturas por componentes reutilizables y aplicación de buenas prácticas de maquetado responsive con Tailwind CSS. Administración del código mediante GitHub y deploys automáticos en Vercel.",
    tags: [
      "Component Architecture",
      "API Fetching",
      "Custom Hooks",
      "Responsive Design",
    ],
  },
  {
    type: "education",
    title: "Educación Superior Universitaria",
    role: "Licenciatura en Análisis de Sistemas",
    period: "En Curso · Paraguay",
    description:
      "Formación académica integral en ciencias de la computación. Asimilación de materias clave: estructuras de datos, algoritmia y lógica de programación, principios básicos de ingeniería de software, metodologías de análisis de requerimientos, modelado relacional y administración básica de bases de datos.",
    tags: [
      "Estructuras de Datos",
      "Lógica Algorítmica",
      "Bases de Datos",
      "Ingeniería de Software",
    ],
  },
  {
    type: "self-taught",
    title: "Especialización Autodidacta",
    role: "Aprendizaje Continuo en Ecosistema Web",
    period: "Constante",
    description:
      "Profundización sistemática en documentación oficial (React Dev, TypeScript Handbook, MDN Web Docs), análisis de patrones de diseño de software y práctica deliberada en repositorios personales abiertos a la comunidad.",
    tags: [],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    status: "live",
    title: "Frontend UI Dash · Task Matrix",
    description:
      "Tablero interactivo de organización de tareas con filtrado dinámico, persistencia en almacenamiento local y drag & drop responsivo.",
    tech: ["React 18", "TypeScript", "Tailwind"],
    codeUrl: "https://github.com/candiapy",
    demoUrl: "https://github.com/candiapy",
  },
  {
    id: 2,
    status: "live",
    title: "Catalog Explorer · API Gateway",
    description:
      "Consumo asíncrono de catálogo REST con paginación fluida, estados de Skeleton loaders y barra de búsqueda con debounce controlado.",
    tech: ["React", "TypeScript", "REST API"],
    codeUrl: "https://github.com/candiapy",
    demoUrl: "https://github.com/candiapy",
  },
  {
    id: 3,
    status: "open-code",
    title: "Weather & Metrics Dashboard",
    description:
      "Plataforma minimalista de visualización climática con detección de geolocalización nativa, conversión de unidades y gráficos en SVG ligero.",
    tech: ["TypeScript", "Tailwind CSS", "OpenMeteo"],
    codeUrl: "https://github.com/candiapy",
    demoUrl: "https://github.com/candiapy",
  },
  {
    id: 4,
    status: "live",
    title: "FakeStore",
    description:
      "Tienda online desarrollada con Next.js, React y TypeScript, con catálogo de productos, búsqueda, filtros por categoría, carrito de compras persistente y una interfaz responsive.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "TanStack Query", "Axios", "React Context", "REST API"],
    codeUrl: "https://fake-store-five-umber.vercel.app/",
    demoUrl: "https://fake-store-five-umber.vercel.app/",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "Correo Electrónico",
    value: "candiaalberto36@gail.com",
    href: "mailto:candiaalberto36@gail.com",
    icon: "mail",
    color: "text-primary",
  },
  {
    type: "phone",
    label: "Teléfono / WhatsApp",
    value: "+595 971 645 923",
    href: "https://wa.me/595971645923",
    icon: "phone",
    color: "text-secondary",
  },
  {
    type: "linkedin",
    label: "Red Profesional",
    value: "linkedin.com/in/albertocandia",
    href: "https://linkedin.com/in/albertocandia",
    icon: "group",
    color: "text-tertiary",
  },
  {
    type: "github",
    label: "Repositorios Abiertos",
    value: "github.com/candiapy",
    href: "https://github.com/candiapy",
    icon: "code",
    color: "text-secondary",
  },
];

export const personalInfo = {
  name: "Alberto Martín Candia Galeano",
  title: "Frontend Developer Trainee",
  location: "Capiatá, Paraguay",
  coordinates: "-25.3548° S, -57.4439° W",
  timezone: "GMT-4",
  email: "candiaalberto36@gail.com",
  phone: "+595 971 645 923",
  github: "https://github.com/candiapy",
  linkedin: "https://linkedin.com/in/albertocandia",
};
