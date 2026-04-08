# Engram Convention

## Cuando usar Engram (Memoria Persistente)
Los sub-agentes tienen la regla de interactuar con engram de manera individual en cada sesión.
El orquestador nunca leerá/escribirá de memoria directamente para detalles particulares de la implementación, sino que proveerá el ID/Query en el prompt del sub-agente.

1. `mem_search`: Búsqueda de contexto importante (decisiones de arquitectura, bugs conocidos).
2. `mem_save`: DEBEN usarlo al realizar descubrimientos técnicos, decisiones arquitectónicas o bugs.

### Estructura de guardado
**What**: [Breve descripción]
**Why**: [Por qué se tomó esta decisión o se detectó el comportamiento]
**Where**: [Qué archivos/componentes / módulos]
**Learned**: [Aprendizajes clave, precauciones a tomar]
