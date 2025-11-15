import { projectImages } from "../assets/images/projects";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  repo?: string;
  alt?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Web Form Plugin - ArteIdeas",
    category: "Wordpress",
    description: "El Web Form Plugin es una solución completa para integrar un formulario personalizado de impresión de imágenes en WordPress con WooCommerce. Permite a los usuarios subir imágenes, seleccionar tamaños, marcos y personalizar sus impresiones antes de añadirlas al carrito de compras. Incluye opciones de pago y gestión de pedidos, facilitando una experiencia de compra fluida. El plugin es ideal para fotógrafos, artistas y tiendas de impresión que desean ofrecer productos personalizados a sus clientes.",
    image: projectImages.webForm,
    repo: "end1996/webFormPluginArteIdeas",
    alt: "proyecto arteIdeas",
  },
  {
    id: 2,
    title: "Agencia de Viajes",
    category: "Java",
    description: "Aplicación de agencia de viajes desarrollada en Java con interfaz gráfica. Permite a los usuarios buscar, reservar y gestionar viajes de manera intuitiva. Incluye funcionalidades como búsqueda de destinos, reservas de vuelos y gestión de itinerarios.",
    image: projectImages.agencia,
    repo: "end1996/agencia_viajes",
    alt: "proyecto agencia de viajes",
  },
  {
    id: 3,
    title: "Gestion de Tareas",
    category: "PHP",
    description: "Aplicación de gestión de tareas desarrollada en PHP con base de datos MySQL. Permite a los usuarios crear, editar y eliminar tareas. Incluye funcionalidades de organización de tareas por categorías y prioridades, como backlog, en progreso y completadas.",
    image: projectImages.tareas,
    repo: "end1996/GestionTareas",
    alt: "proyecto gestión de tareas",
  },
  {
    id: 4,
    title: "Peliculas en Cines",
    category: "Flutter",
    description: "Aplicación móvil desarrollada en Flutter que muestra las películas en cines, con detalles como sinopsis, duración y calificación. Permite a los usuarios explorar la cartelera actual y obtener información sobre las películas más populares. Incluye una interfaz atractiva y fácil de usar, optimizada para dispositivos móviles. Consume una API para obtener datos actualizados sobre las películas en cines.",
    image: projectImages.peliculas,
    repo: "end1996/peliculas_en_cines",
    alt: "proyecto peliculas en cines",
  },
  {
    id: 5,
    title: "Porftolio Personal",
    category: "React",
    description: "Portafolio personal desarrollado en React con animaciones y secciones interactivas. Usa React Bootstrap para el diseño y TypeScript para la tipificación. Incluye secciones de presentación, habilidades, proyectos y contacto. Responsive y optimizado",
    image: projectImages.portfolio,
    repo: "end1996/PortfolioReact",
    alt: "proyecto porfolio react",
  },
  {
    id: 6,
    title: "Catalogo de Productos web",
    category: "Wordpress",
    description: "Sitio web desarrollado en WordPress para gestionar y mostrar un catálogo de productos. Incluye búsqueda, filtros por categoría y rango de precios, además de una interfaz totalmente responsiva y fácil de usar.Proyecto realizado para la empresa Interkambio.",
    image: projectImages.catalogo,
    repo: "",
    alt: "proyecto catálogo de productos",
  },
  {
    id: 7,
    title: "Generador de catálogo de libros",
    category: "React",
    description: "Aplicación web desarrollada en React que permite generar catálogos de libros en formato PDF con información detallada como título, autor, precio y imagen. Incluye funcionalidades como búsqueda, filtros por categoría y rango de precios, además de una interfaz totalmente responsiva y fácil de usar.Proyecto realizado para la empresa Interkambio.",
    image: projectImages.catalogoLibros,
    repo: "endInterkambio/ModuloCatalogo",
    alt: "proyecto generador de catálogo de libros",
  },
  {
    id: 8,
    title: "Sistema de Inventario",
    category: "React",
    description: "Sistema interno desarrollado para la gestión de inventario, construido con React y Spring Boot. Incluye autenticación JWT, CRUD de productos, reportes en PDF, dashboard con accesos directos y API REST. Proyecto empresarial con información interna protegida, por lo que solo se muestra la interfaz gráfica de forma difuminada",
    image: projectImages.sistemaInventario,
    repo: "end1996/SistemaInventario",
    alt: "proyecto sistema de inventario",
  },
  {
    id: 9,
    title: "Landing Page",
    category: "Wordpress",
    description: "Landing page desarrollada en Wordpress con una interfaz atractiva y fácil de usar. Incluye una sección de presentación, una sección de servicios y una sección de contacto. Responsive y optimizada. Proyecto realizado para la empresa Interkambio.",
    image: projectImages.landingPage,
    repo: "",
    alt: "proyecto landing page",
  }
];
