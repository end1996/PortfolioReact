import { projectImages } from "../assets/images/projects";

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
    title: "Web Form Plugin - ArteIdeas",
    category: "Wordpress",
    description: "El Web Form Plugin es una solución completa para integrar un formulario personalizado de impresión de imágenes en WordPress con WooCommerce. Permite a los usuarios subir imágenes, seleccionar tamaños, marcos y personalizar sus impresiones antes de añadirlas al carrito de compras. Incluye opciones de pago y gestión de pedidos, facilitando una experiencia de compra fluida. El plugin es ideal para fotógrafos, artistas y tiendas de impresión que desean ofrecer productos personalizados a sus clientes.",
    image: projectImages.webForm,
    repo: "end1996/webFormPluginArteIdeas"
  },
  {
    id: 2,
    title: "Agencia de Viajes",
    category: "Java",
    description: "Aplicación de agencia de viajes desarrollada en Java con interfaz gráfica. Permite a los usuarios buscar, reservar y gestionar viajes de manera intuitiva. Incluye funcionalidades como búsqueda de destinos, reservas de vuelos y gestión de itinerarios.",
    image: projectImages.agencia,
    repo: "end1996/agencia_viajes"
  },
  {
    id: 3,
    title: "Gestion de Tareas",
    category: "PHP",
    description: "Aplicación de gestión de tareas desarrollada en PHP con base de datos MySQL. Permite a los usuarios crear, editar y eliminar tareas. Incluye funcionalidades de organización de tareas por categorías y prioridades, como backlog, en progreso y completadas.",
    image: projectImages.tareas,
    repo: "end1996/GestionTareas"
  },
  {
    id: 4,
    title: "Peliculas en Cines",
    category: "Flutter",
    description: "Aplicación móvil desarrollada en Flutter que muestra las películas en cines, con detalles como sinopsis, duración y calificación. Permite a los usuarios explorar la cartelera actual y obtener información sobre las películas más populares. Incluye una interfaz atractiva y fácil de usar, optimizada para dispositivos móviles. Consume una API para obtener datos actualizados sobre las películas en cines.",
    image: projectImages.peliculas,
    repo: "end1996/peliculas_en_cines"
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
    description: "Portafolio personal desarrollado en React con animaciones y secciones interactivas. Usa React Bootstrap para el diseño y TypeScript para la tipificación. Incluye secciones de presentación, habilidades, proyectos y contacto. Responsive y optimizado",
    image: projectImages.portfolio,
    repo: "end1996/PortfolioReact"
  }
];
