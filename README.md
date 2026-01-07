# QA Automation - TypeScript/Playwright

![Playwright](https://img.shields.io/badge/Playwright-1.56.1-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js&logoColor=white)
![Browser](https://img.shields.io/badge/Browser-Chromium-2EAD33?style=flat-square&logo=google-chrome&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-10%20passing-success?style=flat-square)

Suite de pruebas automatizadas. Implementa 2 casos de prueba con Page Object Model, realizando un ingreso a una aplicación

---

## Inicio rápido

Requisitos: Node.js 16+ y npm 7+

Instalación:

1. Clonar repositorio: `git clone <url>`
2. Instalar navegadores: `npx playwright install`
3. Ejecutar tests: `npm test`

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm test` | Ejecuta todos los tests (headless, paralelo) 
---

## CI/CD


El proyecto incluye integración continua mediante GitHub Actions. Los tests se ejecutan automáticamente:
- Dos veces al día (9 AM y 6 PM UTC)
- Con cada cambio en la rama principal
- En revisiones de código (pull requests)
- A demanda desde la interfaz de GitHub

Los reportes de ejecución quedan disponibles como artefactos durante 7 días.

---

## Estructura

```
PLAYWGITH-TS-AUTOMATION
├── pages/
│   └── BasePage.ts       # Page Object Model
|   └── LoginPage.ts      # Page Object Model
└── test/
    ├── login.spec.ts     # suite de pruebas
    └── test-setup.ts               # Helper TypeScript
```

Stack técnico: Playwright, TypeScript, POM

---

<div align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" width="80"/>
  <br/>
  <sub>QA Automation • Playwright • Enero 2026</sub>
</div>
