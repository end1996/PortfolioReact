---
name: React Development Guidelines
description: Prácticas fundamentales para escribir componentes React como un verdadero Senior.
---

# Reglas para Componentes React

El código debe ser predecible, testeable y hermoso. Seguimos el estándar Moderno.

## 1. Container / Presentational Pattern
- Consiste en separar "cómo se ven las cosas" de "cómo funcionan".
- **Presentational Component**: Es puro, recibe props, no tiene estado complejo (salvo UI local como un `isOpen` de un modal), y no tiene side-effects.
- **Container Component**: Se encarga de llamar a los hooks de estado o servicios, y simplemente renderiza al presentational inyectándole la info.

## 2. Tipado Estricto (TypeScript)
- TODO debe tener su `interface` o `type`. 
- No permitimos `any`. Nunca. Si usás `any`, perdiste el control del sistema.
- Los props de los componentes deben terminar con el sufijo `Props` (ej: `ProjectCardProps`).

## 3. Estado (State Management)
- **Local**: `useState` o `useReducer` para la UI.
- **Global / Compartido**: Evitar Context API para estados de alta frecuencia de cambio. Preferir `Zustand` por su simpleza o librerías optimizadas si es necesario.
- Las señales (Signals) están de moda, pero en React mantenete en el estándar a menos que se justifique.

## 4. Estilos y CSS
- Estética y animaciones son CRÍTICAS. Un portfolio tiene que hacer decir "wow" al usuario en su primera visita.
- Mantener los estilos modularizados.
- Si usamos CSS vainilla, crear variables estandarizadas. Si usamos un sistema como Tailwind (sólo si fue explícitamente requerido), seguir convenciones de utilidad sin sobrecargar el HTML.

## 5. SEO & Accesibilidad (a11y)
- Usa HTML semántico: `<article>`, `<section>`, `<nav>`, `<main>`.
- Todos los elementos interactivos o semánticos relevantes deben tener tags correspondientes.
