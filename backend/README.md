# Tool Lab API — NestJS

## Arranque

Requisitos: Docker Desktop con contenedores Linux, Docker Compose v2 y Node.js 22.13+ (rama 22), 24.11+ (rama 24) o 20.19+ (rama 20).

Desde esta carpeta:

```sh
npm ci
docker compose up -d --wait
npm run start:dev
```

Abrir http://127.0.0.1:3050/api/health. Debe mostrar `{"status":"ok"}`. No hace falta crear un archivo `.env` en el backend.

La base utiliza el puerto `5452` y un volumen exclusivo de este parcial. No utilizar una base real: `synchronize` está activado únicamente para esta base local. No detener ni borrar contenedores ajenos si existe un conflicto de puertos.

Al iniciar una base nueva se crean dos herramientas y dos solicitudes. Los datos se conservan al reiniciar. Si NestJS se reinicia, iniciar sesión nuevamente: el secreto JWT de este entorno se genera al arrancar. Los tokens duran tres horas.

Para detener solo la base de este ejercicio sin borrar sus datos:

```sh
docker compose stop
```

## Qué completar

| Archivo dentro de `src/loan-requests/` | Trabajo pendiente |
| --- | --- |
| `dto/list-loan-requests.dto.ts` | Validaciones del filtro opcional por `toolId`. La conversión a número está preparada. |
| `loan-requests.controller.ts` | Recibir la consulta, aplicar el pipe suministrado y pasar el filtro. |
| `loan-requests.service.ts` | Filtrar con TypeORM y aplicar la regla de duración antes de guardar. |

Antes de resolver los TODO, el GET ignora el filtro y la regla de duración no se aplica. No interpretar esto como un error de configuración. El DTO de creación, el detalle, el JWT, los repositorios y las entidades ya están implementados.

## Consulta desde Postman

1. Enviar `POST http://127.0.0.1:3050/api/auth/login` con JSON: `{"email":"student@example.com","password":"ToolLoan2026"}`.
2. Copiar `access_token` y usarlo como **Bearer Token** en las rutas privadas. No guardarlo en el código.
3. `GET /api/tools` permite conocer los ID reales y sus límites de días.
4. `GET /api/loan-requests` devuelve los datos iniciales y sus herramientas.

El cuerpo del POST recibe `purpose` (texto no vacío, máximo 120 caracteres), `days` y `toolId` (enteros positivos). Los números no deben enviarse como texto. La respuesta de creación contiene el `id` de la solicitud en el objeto principal. El nombre de la herramienta aparece en `tool.name`.

`npm run build` compila el proyecto. No se solicita crear pruebas automatizadas.

