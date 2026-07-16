import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...nextCoreWebVitals,
  {
    // Las reglas nuevas de react-hooks v6 (bundleadas con eslint-config-next 16)
    // marcan patrones preexistentes del código (setState dentro de effects, etc.).
    // Se dejan como warning para no bloquear el lint; ver follow-up en docs/UPGRADE-GUIDE.md.
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
    },
  },
];

export default eslintConfig;
