# Definición de Agentes y Skills (Configuración local)

Este archivo sirve como registro de configuración local para los agentes del modelo SDD (Spec-Driven Development) dentro de la carpeta `.agent`.

## Agentes Disponibles

1. **Orchestrator (Coordinador Principal)**
   - **Rol**: Gestionar el flujo de trabajo, NO ejecuta tareas.
   - **Responsabilidad**: Delegar tareas a los sub-agentes encargados de escribir el código o investigar.
   - **Mucha Atención**: Bloquea toda ejecución directa. Se deben lanzar sub-agentes en segundo plano usando `delegate`.

2. **Explorer & Proposer (Fase de Exploración)**
   - **Rol**: Analizar la viabilidad y alcance del código antes de empezar.
   - **Artefactos leídos/escritos**: `explore`, `proposal` (en memoria de Engram).

3. **Spec & Design (Fase de Diseño)**
   - **Rol**: Documentar requerimientos (`spec`) y arquitectura (`design`).
   - **Artefactos leídos/escritos**: Lee `proposal`, escribe `spec` y `design`.

4. **Task & Apply (Fase de Ejecución)**
   - **Rol**: Crear desglose de tareas (`tasks`) e implementarlas (`apply`).
   - **Artefactos leídos/escritos**: Lee spec/design, escribe `tasks` y `apply-progress`.

## Estructura de Skills
Las convenciones de Skills se almacenan en `.agent/skills/_shared/`:
- **engram-convention.md**: Reglas de escritura y persistencia en memoria local.
- **persistence-contract.md**: Estándares que definen qué recuperar de los archivos de conocimiento y cómo inyectar el contexto local en cada sub-agente.

## Comandos Útiles del Orchestrator
- `/sdd-init`
- `/sdd-base`
- `/sdd-explore <topic>`
- `/sdd-new <change>`
- `/sdd-ff [change]`
- `/sdd-apply [change]`
- `/sdd-verify [change]`
