# Monorepo para foro unne

Este repositorio contiene una aplicación que utiliza **NestJS** en el backend y **React** en el frontend, gestionados a través de un monorepo con Turborepo.

## Estructura del proyecto

apps/client: Código del frontend (React).

apps/server: Código del backend (NestJS).

package.json: Archivo de configuración de dependencias y scripts.

turbo.json: Configuración de Turborepo para gestionar el monorepo.

## Requisitos

- Node.js (versión recomendada: LTS)
- npm

## Instalación

Desde la raíz del repositorio, ejecuta:

```shell
bash
npm install
```

## Comandos disponibles

Para iniciar entorno de desarrollo:

- npm run dev

Para compilar proyecto y generar **dist** que va en produccion

- npm run build

Para iniciar aplicacion en produccion que ejecuta node apps/server/dist/main.js

- npm start

## NOTA

Ejecutar siempre los comandos desde la raiz del repositorio

## FLUJO DE COMPORTAMIENTO DE RAMAS

1.

- Desarrollo en feature/(nombre_feature)
- Creas un PR (Pull request) a develop
- Mergea cuando se revisa

2.

- Crear PR a main desde develop
- Merge tras revisiones y validaciones
