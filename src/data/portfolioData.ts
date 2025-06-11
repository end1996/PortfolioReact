import {projectImages} from "../assets/images/projects/index";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Web Form Plugin",
    category: "Wordpress",
    description: "Sitio web desarrollado en wordpress con un plugin de formulario personalizado.",
    image: projectImages.webForm,
  },
  {
    id: 2,
    title: "Agencia de Viajes",
    category: "Java",
    description: "Aplicación de agencia de viajes desarrollada en Java con interfaz gráfica.",
    image: projectImages.agencia,
  },
  {
    id: 3,
    title: "Gestion de Tareas",
    category: "PHP",
    description: "Aplicación de gestión de tareas desarrollada en PHP con base de datos MySQL.",
    image: projectImages.tareas,
  },
  {
    id: 4,
    title: "TokTik App",
    category: "Flutter",
    description: "Aplicación movil con funcionalidad similar a Tik-Tok",
    image: projectImages.toktik,
  },
  {
    id: 5,
    title: "Peliculas App",
    category: "Flutter",
    description: "Aplicación movil para buscar y ver información de películas actuales, desarrollada en Flutter con una interfaz amigable.",
    image: projectImages.peliculas,
  },
  {
    id: 6,
    title: "Porftolio Personal",
    category: "React",
    description: "Portafolio personal desarrollado en React con animaciones y secciones interactivas. Usa React Bootstrap para el diseño y TypeScript para la tipificación.",
    image: projectImages.portfolio,
  }
];
