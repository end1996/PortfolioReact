import type { Project } from "@/domain/models/Project";
import { projectImages } from "@/assets/images/projects";

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "API REST de Sistema de Inventario",
    category: "Java",
    description:
      "Backend transaccional para un sistema de inventario corporativo, desarrollado con Spring Boot 3 bajo Arquitectura Limpia/Hexagonal. Expone una API REST completamente documentada mediante Swagger/OpenAPI 3. Incluye autenticación segura mediante tokens JWT (Bearer), control estricto de DTOs para evitar corrupción de datos, y validaciones robustas.",
    image: projectImages.apiRest,
    alt: "Documentación Swagger API REST Spring Boot",
    manualLanguages: {
      Java: 100,
    },
  },
  {
    id: 2,
    title: "Dashboard de Gestión Empresarial",
    category: "React",
    description:
      "Frontend administrativo interno (B2B) construido con React y TypeScript. Consume de forma asíncrona la API REST robusta en Java para la visualización y manipulación de enormes lotes de productos. Implementa un tablero interactivo, reportes generados dinámicamente en PDF y Hooks customizados interactuando con JWTs salvaguardados. (Imágenes difuminadas bajo contrato de confidencialidad).",
    image: projectImages.dashboardReact,
    alt: "Dashboard web Sistema de inventario React",
    manualLanguages: {
      TypeScript: 100,
    }
  },
  {
    id: 3,
    title: "IABookRecommender — Motor NLP de Recomendaciones",
    category: "Python",
    description:
      "Proceso batch de Inteligencia Artificial con dos módulos independientes. El motor de recomendaciones vectoriza descripciones de libros con TF-IDF y calcula afinidad semántica mediante KNN (distancia coseno), generando rankings ponderados por contenido (45%), categoría canónica (45%) y autoría (10%). El pipeline de enriquecimiento normaliza el catálogo en 3 fases: detección de idioma offline con lingua (~89% de cobertura) + fallback a Qwen local, generación de descripciones via Google Books API o LM Studio, y normalización de autores. Costo cloud: cero.",
    image: projectImages.bookIaRecommender,
    repo: "end1996/IABookRecommender",
    alt: "Motor NLP Python TF-IDF KNN recomendaciones libros",
  },
  {
    id: 4,
    title: "WooCommerce SKU Sync Core",
    category: "Wordpress",
    description:
      "Plugin corporativo para ecosistemas WordPress/WooCommerce desarrollado explícitamente para interceptar y sincronizar flujos de actualización de gran volumen. Resuelve la brecha de integridad entre un sistema relacional local de inventarios y el e-commerce mapeando y forzando el Stock y Precios directamente vía referencias SKU mediante hooks nativos estructurados en PHP.",
    image: projectImages.wcSkuSyncCore,
    repo: "endInterkambio/Update-product-by-sku",
    alt: "Backend de sincronizacion wp sku",
  },
  {
    id: 5,
    title: "Web Form Architect Plugin",
    category: "Wordpress",
    description:
      "Solución que inyecta una interfaz dinámica dentro del rígido ecosistema monolítico de WooCommerce. Permite a prospectos configurar sus impresiones personalizadas on-the-fly (dimensiones, marcos, sustratos). Un ejemplo puro de puente arquitectónico entre PHP tradicional y la fluidez del estado moderno de frontend.",
    image: projectImages.webForm,
    repo: "end1996/webFormPluginArteIdeas",
    alt: "Plugin interactivo Ecommerce",
  },
  {
    id: 6,
    title: "Motor Generador de Catálogos Automáticos",
    category: "React",
    description:
      "SPA en React altamente especializada que intercepta y estandariza registros crudos de inventario para exportar maquetas finales de revistas/catálogos en PDF listos para distribución comercial. Reduce la carga del maquetador utilizando selectores inteligentes en cascada, grid builders dinámicos y compresión instantánea en el navegador.",
    image: projectImages.generadorCatalogo,
    alt: "Aplicativo web generador de pdf libros",
    manualLanguages: {
      TypeScript: 100,
    }
  },
  {
    id: 7,
    title: "Portfolio FSD Hexagonal",
    category: "React",
    description:
      "Código fuente de esta misma carta de presentación. Refactorizado recientemente para romper con la planicie de la Web Básica adoptando una robusta Arquitectura Hexagonal y DSD (Feature-Sliced-Design). Las capas de Infraestructura (Llamadas Axios a Github), Dominio (Types) y Renderizado UI residen sin tocarse gracias a path-aliases en Vite (@/).",
    image: projectImages.portfolio,
    repo: "end1996/PortfolioReact",
    alt: "Render visual de este mismo portfolio en src",
  },
];
