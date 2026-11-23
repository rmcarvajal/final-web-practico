# Parcial final práctico — Tool Lab

Dos proyectos base para completar el flujo de solicitudes de préstamo de herramientas. No crear otros proyectos ni volver a implementar la autenticación.

## Iniciar

1. Abrir Docker Desktop con contenedores Linux.
2. Abrir una terminal en `backend/` y seguir su [README](backend/README.md).
3. Abrir otra terminal en `frontend/` y seguir su [README](frontend/README.md).

| Servicio | Dirección local |
| --- | --- |
| PostgreSQL de este parcial | 127.0.0.1:5452 |
| API NestJS | http://127.0.0.1:3050/api |
| Frontend Next.js | http://127.0.0.1:3051 |

**Cuenta ficticia de evaluación:** `student@example.com` / `ToolLoan2026`.

Usar los identificadores reales que devuelve la API. Los datos iniciales incluyen dos herramientas, con límites de tres y siete días, y una solicitud para cada herramienta.

## Alcance

Los `TODO` indican únicamente el trabajo pendiente. La base compila antes de resolverlos, pero el listado del frontend no consulta solicitudes, el comprobante es una plantilla y el formulario todavía no guarda. En el backend el filtro y la regla de duración no están implementados.

El login, el cierre de sesión y el helper privado están completos. No modificar `src/lib/api.ts` para volver a implementar la sesión. No se solicitan pruebas automatizadas, roles, edición, eliminación ni despliegue.

El enunciado y la rúbrica serán suministrados junto con este ZIP en Notion. No confundir este proyecto con el preparcial de solicitudes de impresión.

