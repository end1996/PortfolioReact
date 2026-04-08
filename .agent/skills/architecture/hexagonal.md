---
name: Hexagonal Architecture / Feature-Sliced Guidelines
description: Reglas estructurales para que el código no se convierta en un plato de espagueti.
---

# Hexagonal y Feature-Sliced Design

Para asegurar que nuestro portfolio y aplicaciones escalan sin dolor, respetamos una separación estricta de responsabilidades. La UI NO habla directamente con las APIs, ni la lógica de negocio vive en los componentes de React.

## Reglas de Directorio (Estructura de Carpetas)

El directorio `src` debe estructurarse en capas:

1. **`core/` o `domain/`**: 
   - Entidades, Tipos puros, Lógica de negocio (no atada a React).
   - Ejemplo: Interfaz `Project`, `User`, funciones de filtrado puras.
   
2. **`infrastructure/` o `services/`**:
   - Todo lo que sale al exterior: APIs, Fetch, integración con Firebase o LocalStorage.
   - Debe implementar interfaces definidas en `core/`.

3. **`application/` o `hooks/`**:
   - Casos de uso de la aplicación.
   - Aquí viven los Custom Hooks complejos o los orquestadores de estado (Zustand, Context) que ligan la infraestructura con el dominio.

4. **`ui/` o `presentation/`**:
   - Estrictamente componentes visuales.
   - Organizado internamente por "Features" o UI Elements (Atoms, Molecules, Organisms).
   - Nada de `fetch()` acá adentro. CERO.

## Principio de Inyección de Dependencias
Los componentes UI deben recibir los datos listos. La lógica asíncrona la inyecta el Custom Hook (ejemplo: `useProjects`). 

> ¡Si veo un `fetch` adentro de un `useEffect` de un componente de UI visual, cancelo la build mentalmente!
