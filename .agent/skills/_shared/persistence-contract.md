# Persistence Contract

## Reglas de Recuperación de Estado (Sub-agentes)

1. El sub-agente tiene prohibido buscar el registro de habilidades ("skill registry") per-se de forma autónoma. El orquestador *SIEMPRE* delega el trabajo pasándole la ruta exacta del skill resuelto que necesita, bajo el parámetro `SKILL: Load {ruta} before starting`.
2. El orquestador es quien debe leer o asignar la ruta apropiada al contexto leyendo el `engram` o revisando la base instalada, inyectándolo bajo el mandato estricto.

## Restricciones Adicionales para Trabajo Local
Los sub-agentes no reescriben artefactos si se les pide continuar y el modo de persistencia es Engram, a menos que actualicen con `mem_update` o generen un nuevo paso usando un Topic Key formal:
- `sdd/{change-name}/explore`
- `sdd/{change-name}/proposal`
- `sdd/{change-name}/spec`
...etc.
