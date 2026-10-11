# Evaluación Argumentativa

Interfaz de visualización para análisis argumentativos de discursos hablados. El usuario envía audio por Telegram → n8n transcribe y procesa → esta web presenta los resultados.

## Instalación

```bash
npm install
```

## Configuración

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL del webhook GET de n8n que devuelve el array de discursos |
| `VITE_USE_MOCK` | `true` → datos mock locales · `false` → endpoint real |

### Modo mock (desarrollo sin webhook)

Con `VITE_USE_MOCK=true`, la app carga `src/data/mock.json` con tres discursos de ejemplo. No se hace ninguna petición de red. El archivo `.env` ya viene configurado en este modo.

### Modo real

Cambia `.env` a:

```
VITE_API_URL=https://tu-instancia-n8n.com/webhook/discursos
VITE_USE_MOCK=false
```

El endpoint debe responder con un array JSON siguiendo la estructura documentada en `src/data/mock.json`.

## Desarrollo

```bash
npm run dev
# → http://localhost:5173
```

## Build

```bash
npm run build
npm run preview   # previsualiza el build
```

## Rutas

| Ruta | Vista |
|---|---|
| `/` | Biblioteca — lista de discursos |
| `/discurso/:slug` | Detalle completo de un discurso |
| `/comparar` | Tabla comparativa de todos los discursos |

## Dependencias y compilación

Se requiere Node.js 22.12 o posterior. Instala las versiones verificadas con `npm ci` y compila con `npm run build`.
La configuración de Tailwind 4 está en `src/styles/global.css` y se integra mediante `@tailwindcss/vite`.
Navegadores compatibles: Safari 16.4+, Chrome 111+ y Firefox 128+.
Ejecuta `npm audit` al actualizar el archivo `package-lock.json`.
