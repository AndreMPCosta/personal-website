<div align="center">
  <img src="icons/android-chrome-192x192.png" alt='logo'>
  <h1>andrecosta.eu</h1>
  <img src='public/website-preview.png' alt='website-preview'>
</div>

---

This website was developed using:

- **Vue.js** for the frontend framework
- **TypeScript** for static type checking and improved development experience
- **Quasar** for the UI components and design
- **Vitest** for unit testing with 108 comprehensive tests

You can fork this repository, I just ask you to link back to [andrecosta.eu](https://andrecosta.eu)

Pallete customization can be made on `/css/quasar.variables.sass`

---

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Run the unit tests

```bash
npm run test
# or run tests in watch mode
npm run test:unit
# or run tests with UI
npm run test:unit:ui
# or run tests once (for CI)
npm run test:unit:ci
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

---

## CI/CD

This project includes automated quality checks via GitHub Actions. On every pull request to `main`, the following checks run:

- ✅ **Prettier** - Code formatting validation
- ✅ **ESLint** - Code quality and linting
- ✅ **Vitest** - All 108 unit tests

The workflow uses Node.js 24.x and runs `quasar prepare` to generate necessary configuration files for the CI environment.
