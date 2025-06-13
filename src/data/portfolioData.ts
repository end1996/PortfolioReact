import {projectImages} from "../assets/images/projects";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  repo?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Web Form Plugin",
    category: "Wordpress",
    description: "Sitio web desarrollado en wordpress con un plugin de formulario personalizado.",
    image: projectImages.webForm,
    repo: "end1996/webFormPlugin"
  },
  {
    id: 2,
    title: "Agencia de Viajes",
    category: "Java",
    description: "Aplicación de agencia de viajes desarrollada en Java con interfaz gráfica.",
    image: projectImages.agencia,
    repo: "end1996/agencia_viajes"
  },
  {
    id: 3,
    title: "Gestion de Tareas",
    category: "PHP",
    description: "Aplicación de gestión de tareas desarrollada en PHP con base de datos MySQL.",
    image: projectImages.tareas,
    repo: "end1996/GestionTareas"
  },
  {
    id: 4,
    title: "TokTik App",
    category: "Flutter",
    description: "Aplicación movil con funcionalidad similar a Tik-Tok",
    image: projectImages.toktik,
    repo: "end1996/Tok_Tik_App"
  },
  {
    id: 5,
    title: "ArteIdeas Backend",
    category: "Wordpress",
    description: "Plugin personalizado para WordPress y WooCommerce que gestiona productos con marcos, dimensiones personalizadas y precios según variaciones. Incluye creación automática de tablas, almacenamiento de datos y endpoints REST.",
    image: projectImages.arteIdeasBackend,
    repo: "end1996/ArteIdeasBackend"
  },
  {
    id: 6,
    title: "Porftolio Personal",
    category: "React",
    description: "Portafolio personal desarrollado en React con animaciones y secciones interactivas. Usa React Bootstrap para el diseño y TypeScript para la tipificación.",
    image: projectImages.portfolio,
    repo: "end1996/PortfolioReact"
  }
];
