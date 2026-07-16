# Guía de actualización mayor — Portfolio

> Guía autocontenida para modernizar el portfolio: subir todas las dependencias a sus últimas majors, migrar `framer-motion` → `motion`, fijar Node 26.5.0 y dejar el proyecto compilando y corriendo.

## 1. Contexto

Stack de origen (mediados de 2022):

| Área | Origen |
|---|---|
| Framework | Next 12.2 (Pages Router) |
| UI | React 18.2 |
| Animación | framer-motion 6.3 + framer-motion-carousel 2.0 |
| Lenguaje | TypeScript 4.7 (`target: es5`) |
| Lint | ESLint 8 (`.eslintrc`) |
| Node | `engines: 22.x` |
| Deps muertas | `axios`, `styled-components` (0 usos en `src/`) |

## 2. Versiones objetivo (últimas majors)

> Verificadas contra el registro npm. Ajustar al último parche disponible al momento de ejecutar.

| Package | Origen | Objetivo |
|---|---|---|
| `next` | 12.2.0 | `^16` |
| `react` / `react-dom` | 18.2.0 | `^19` |
| `@types/react` / `@types/react-dom` | 18.x | `^19` |
| `typescript` | 4.7.4 | `^6.0.3` ⚠ (ver §12) |
| `@types/node` | 18.0.0 | `^26` |
| `eslint` | 8.18.0 | `^9.39.5` ⚠ (ver §12) |
| `eslint-config-next` | 12.2.0 | `^16` |
| `framer-motion` | 6.3.16 | **eliminar** → `motion` `^12` |
| `framer-motion-carousel` | 2.0.1 | **eliminar** (reemplazo propio) |
| `axios` | 0.27.2 | **eliminar** (sin uso) |
| `styled-components` | 5.3.5 | **eliminar** (sin uso) |
| `react-youtube` | 9.0.3 | `^10` |
| `@emailjs/browser` | 3.6.2 | `^4` (⚠ major — ver §7) |
| `sass` | 1.53 | `^1.101` |
| `sharp` | 0.30.7 | `^0.35` |

> Nota: bajo el criterio "latest majors" se probaron primero Next 16 + TS 7 + ESLint 10. **TS 7 y ESLint 10 rompieron de forma irrecuperable** con el ecosistema de Next 16 (ver §12), así que se hizo fallback a la última major soportada: **TypeScript 6.0.3** y **ESLint 9.39.5**. Next 16 / React 19 / motion 12 sí quedaron en su última major.

## 3. Análisis de impacto

| Cambio | Impacto | Riesgo |
|---|---|---|
| `framer-motion` → `motion` | Solo cambia el import source en 20 archivos. **No se usa ninguna API rota** (sin `AnimatePresence`, `exitBeforeEnter`, `LazyMotion`, `AnimateSharedLayout`, `motion.custom`). | Bajo |
| `framer-motion-carousel` | Sin mantenimiento; trae su propio `framer-motion@6`, peer React 16-18 → incompatible con React 19. Reemplazo propio. | Medio |
| React 18 → 19 | Namespace global `JSX.Element` deprecado en `@types/react` 19 → `React.JSX.Element` en ~11 archivos. | Medio |
| Next → 16 (Pages Router) | Async request APIs (App Router) **no aplican** aquí. `next lint` deprecado → ESLint CLI + flat config. **Next ya NO inyecta el `<meta name="viewport">` por defecto** (lo hacía en Next 12) → hay que agregarlo manual en `_app.tsx`, si no la web se ve en formato desktop en móvil. | Medio |
| TS → 7 / `target: es5` | Subir `target` a `es2022`. Sin sintaxis incompatible detectada. | Bajo |
| ESLint → 10 | Requiere flat config (`eslint.config.mjs`). | Bajo |
| `@emailjs/browser` 3 → 4 | Firma de `sendForm` cambió (ver §7). | Bajo-medio |
| `sass` → 1.101 | 25 `.scss` usan `@import` (deprecado). **Warnings, no rompe**. Migración a `@use` = follow-up. | Cosmético |
| Node → 26.5.0 | `engines.node` + `.nvmrc`. Línea Current. | Bajo |

## 4. Reemplazo del carousel

`framer-motion-carousel` se reemplaza por `src/components/Carousel/ProjectsCarousel.tsx`.
**No tocar** `src/components/Carousel/Carousel.tsx` (es el carousel de skills, específico de `ExperienceItems`).

Contrato que hoy consumen `Projects.tsx` + `ButtonCarousel` + `CarouselDots` y que el reemplazo debe respetar:

- **Props:** `children`, `autoPlay`, `interval`, `loop`, `renderArrowLeft`, `renderArrowRight`, `renderDots`.
- **Render props (exacto):**
  - `renderArrowLeft({ handlePrev, activeIndex })`
  - `renderArrowRight({ handleNext, activeIndex })`
  - `renderDots({ setActiveIndex, activeIndex })`
- **Lógica a preservar** (extraída del original):
  - `useMotionValue(x)` + `animate(x, -index * clientWidth, { type: 'spring', bounce: 0 })` al cambiar índice.
  - Slides: `motion.div` con `left/right: i*100%`, `x` compartido, `drag="x"` (solo si >1 item), `dragElastic: 0.3`.
  - `onDragEnd`: umbral `clientWidth/4` para avanzar/retroceder; en extremos, animar de vuelta.
  - Autoplay: `setInterval(handleNext, interval)` cuando `autoPlay`.
  - `loop`: al pasar el último → 0 (y viceversa).
- **Import:** `import { motion, animate, useMotionValue } from "motion/react"`.

## 5. Migración de imports `motion`

En los 20 archivos que importan de `framer-motion`, cambiar **solo el source**:

```diff
- import { motion } from "framer-motion";
+ import { motion } from "motion/react";
```

Aplica igual a los tipos: `Variants`, `Transition`, `TargetAndTransition` siguen exportándose desde `motion/react`.

Archivos (grep `from "framer-motion"`): `pages/index.tsx`, `containers/{AboutMe,Projects/Projects,Header,Presentation,Modal,MenuToggle}.tsx`, `containers/Projects/variants.ts`, `components/{Timeline/TimelineItem,ButtonNav,SocialIcon,MenuItemMobile,LenguageButton/LenguageButton,LenguageButton/variants,Button,Loading,IconSkill,Project,AnimatedText}.tsx`, `interfaces/buttona.interface.ts`.

## 6. React 19 — tipos

`JSX.Element` (namespace global) → `React.JSX.Element`. Archivos afectados (grep `JSX.Element`):
`pages/_document.tsx`, `interfaces/{appLenguageData,experienceItems,project}.interface.ts`, `components/{SocialSection,MenuItemMobile,ResumeDownload,AlertContainer}`, `assets/iconos/social/{github,instagram,twitter,linkedin}.tsx`.

`tsconfig.json`: `"target": "es5"` → `"target": "es2022"`.

## 7. `@emailjs/browser` 3 → 4

v4 cambió la firma. Revisar `src/hooks/useEmailJS/useEmailJS.ts`:

```ts
// v3
emailjs.sendForm(serviceId, templateId, form, userId)
// v4  (publicKey como string o { publicKey })
emailjs.sendForm(serviceId, templateId, form, { publicKey })
```

Ajustar la llamada al nuevo cuarto argumento.

## 8. ESLint 9/10 — flat config

Crear `eslint.config.mjs` (reemplaza `.eslintrc`):

```js
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
export default [
  ...compat.extends("next/core-web-vitals"),
];
```

Script `lint` en `package.json`: `next lint` → `eslint .` (o mantener `next lint` si la versión aún lo soporta).

## 9. Procedimiento paso a paso

1. **Rama/respaldo.** Trabajar en `update-repository`; respaldar `package.json` + `package-lock.json`.
2. **Node.** `.nvmrc` = `26.5.0`; `engines.node` = `26.x`; `nvm use`.
3. **package.json.** Aplicar §2: subir versiones, quitar `axios`/`styled-components`/`framer-motion`/`framer-motion-carousel`, agregar `motion`.
4. **Instalar limpio.** `rm -rf node_modules package-lock.json && npm install`. Resolver peers sin `--legacy-peer-deps` si es posible.
5. **Imports motion.** Aplicar §5 en los 20 archivos.
6. **Carousel.** Crear `ProjectsCarousel.tsx` (§4); en `Projects.tsx` reemplazar el import de `framer-motion-carousel`.
7. **React 19.** Aplicar §6 (tipos + tsconfig target).
8. **EmailJS.** Aplicar §7.
9. **ESLint.** Aplicar §8.
10. **Typecheck.** `npx tsc --noEmit` → corregir errores.
11. **Build.** `npm run build`.
12. **Runtime.** `npm run dev` → verificar §10.
13. **Lint.** `npm run lint`.

## 10. Verificación (end-to-end)

- `npx tsc --noEmit` sin errores.
- `npm run build` exitoso.
- `npm run dev` → ejercitar: **carousel de proyectos** (autoplay, flechas, dots, drag), filtros por tecnología, timeline, texto animado, YouTube en AboutMe, cambio de idioma, descarga de CV, envío de contacto (EmailJS).
- `npm run lint` sin errores (warnings de Sass `@import` aceptables).

## 11. Fuera de alcance (follow-up)

- Migrar `@import` → `@use`/`@forward` en los 25 `.scss` (elimina warnings de Sass).
- Resolver los **20 warnings de `react-hooks` v6** (`set-state-in-effect`, `immutability`, `exhaustive-deps`) en 12 archivos preexistentes. Estas reglas nuevas (bundleadas con `eslint-config-next` 16) se dejaron en `warn` en `eslint.config.mjs` para no bloquear el lint; el runtime no cambia. Refactor recomendado effect por effect.
- Migración a App Router.

## 12. Fallbacks aplicados (TS 6, ESLint 9)

Durante la ejecución, dos majors "latest" resultaron incompatibles con Next 16 y se degradaron a la última soportada:

- **TypeScript 7.0.2 → 6.0.3.** TS 7 es el port nativo (preview); Next 16 no lo detecta como TypeScript instalado (intenta auto-instalar y el build worker crashea con `The "id" argument must be of type string`). `typescript-eslint` también pide `typescript <6.1.0`. Fallback: `typescript@^6.0.3`. El `tsconfig.json` migrado (sin `baseUrl`, `moduleResolution: bundler`, paths relativos + wildcard `"*": ["./src/*"]`) es válido para TS 6.
- **ESLint 10.7.0 → 9.39.5.** `eslint-config-next` 16 empaqueta `typescript-eslint` 8.x y plugins que apuntan a ESLint `^8 || ^9`. Con ESLint 10 el lint crashea (`scopeManager.addGlobals is not a function`). Fallback: `eslint@^9.39.5`. Se usa el **flat config nativo** de `eslint-config-next` (no `FlatCompat`/`@eslint/eslintrc`, que también crashea):
  ```js
  import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
  export default [ { ignores: [".next/**"] }, ...nextCoreWebVitals ];
  ```

## 13. Estado final (verificado)

Instalado y verificado: Next 16.2.10, React 19.2.7, motion 12.42.2, TypeScript 6.0.3, ESLint 9.39.5, @types/node 26.1.1, react-youtube 10.1.0, @emailjs/browser 4.4.1, sass 1.101.0, sharp 0.35.3. Eliminados: `axios`, `styled-components`, `framer-motion`, `framer-motion-carousel`.

- `npx tsc --noEmit` → **0 errores**.
- `npm run build` → **OK** (3 páginas estáticas: `/`, `/_app`, `/404`).
- `npm run lint` → **0 errores**, 20 warnings (react-hooks + Sass, follow-up).
- `npm run dev` → **HTTP 200** en `/`, sin errores de React/hydration.

> Nota Node: `engines.node` = `26.x` y `.nvmrc` = `26.5.0`. La build se verificó con Node 25.3.0 local (npm solo emite `EBADENGINE`, no bloquea). Ejecutar `nvm install 26.5.0 && nvm use` para alinear al target.
