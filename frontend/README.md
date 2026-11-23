# Tool Lab Web — Next.js

Con NestJS iniciado, ejecutar desde esta carpeta:

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:3051/login. Cuenta ficticia: `student@example.com` / `ToolLoan2026`.

Después del login aparece la página base de solicitudes. En **New request** se muestran las dos herramientas. Antes de resolver los TODO, el formulario todavía no guarda y el comprobante solo muestra una plantilla.

No se necesita `.env.local` con los puertos suministrados. Solo si cambia la dirección del backend, usar `.env.example` como referencia, crear `.env.local` y reiniciar Next.js. Nunca colocar el JWT en ese archivo.

## Qué completar

| Archivo | Trabajo pendiente |
| --- | --- |
| `src/app/loan-requests/page.tsx` | Leer la URL, consultar solicitudes, construir el filtro y mostrar los enlaces a los comprobantes. Las opciones de herramientas ya están cargadas en `tools`. |
| `src/app/loan-requests/new/page.tsx` | Completar la Server Action. El formulario y la carga de herramientas están preparados. |
| `src/app/loan-requests/[id]/page.tsx` | Consultar el detalle desde el ID de la ruta y mostrar sus datos. |

## Qué está resuelto

El login, el logout, la cookie, `apiFetch`, la protección de las páginas, los estilos y los tipos ya están implementados. No hay TODO de autenticación ni se solicita agregar roles.

Usar `apiFetch` en las consultas y en la creación. Devuelve una **respuesta HTTP**, no directamente el JSON. Conserva las cabeceras que recibe, agrega Bearer, redirige al login si falta el token o la API responde 401 y retorna la respuesta en los demás casos.

El layout de `loan-requests/` mantiene privadas las plantillas iniciales. No reemplaza la necesidad de usar el helper en las peticiones de cada página y de la Server Action.

Los imports relativos ya están preparados. No se exige usar un alias `@`.

`npm run build` comprueba la compilación. No se solicita cambiar el diseño ni crear estados adicionales de carga, error o éxito.

