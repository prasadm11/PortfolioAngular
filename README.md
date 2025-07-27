# 🧑‍💻 PortfolioAngular

This is a personal portfolio website built with **Angular 17** to showcase my work, skills, and professional background. It includes animated UI components, responsive layouts, and dynamic content management — deployed live using **Netlify**.

🔗 **Live Site:** [https://pm11portfolio.netlify.app](https://pm11portfolio.netlify.app)

---

## 🚀 Features

- Built using Angular 17 with modular architecture
- Fully responsive UI
- Rich component-based design (About, Projects, Experience, FAQ, etc.)
- Hosted on Netlify with CI/CD integration via GitHub
- Smooth scroll, gradient themes, and animated elements
- SSR support (optional setup for Angular Universal + Netlify)

---

## 📆 Getting Started

### 🔧 Development Server

To start a local development server:

```bash
ng serve
```

Navigate to: `http://localhost:4200/`\
The app will auto-reload on changes.

---

## 🛠️ Project Structure

- `src/app`: Angular components and modules
- `assets/`: Images and static files
- `angular.json`: Angular CLI project config
- `netlify.toml`: Netlify deployment config (if using SSR)

---

## 🧱 Code Scaffolding

To generate a new component using Angular CLI:

```bash
ng generate component component-name
```

For more scaffolding options:

```bash
ng generate --help
```

---

## 🏗️ Building the Project

To compile the project:

```bash
ng build
```

This outputs the build artifacts to the `dist/` folder.

---

## 🧪 Running Unit Tests

To execute unit tests using Karma:

```bash
ng test
```

---

## 🧪 Running E2E Tests

For end-to-end tests (you’ll need to set up a framework like Cypress or Protractor):

```bash
ng e2e
```

---

## 🌐 Deployment on Netlify

- Git-based deployment enabled with automatic builds
- If using Angular SSR, ensure `server.ts` is Netlify-compatible
- Example: Use `@angular/ssr` and `@netlify/angular-runtime`

```toml
# netlify.toml (basic)
[functions]
  included_files = ["dist/**"]
```

---

## 📚 Resources

- [Angular CLI Docs](https://angular.dev/tools/cli)
- [Angular SSR with Netlify](https://docs.netlify.com)
- [Netlify Deployment Docs](https://docs.netlify.com/configure-builds/get-started)

---

## 👤 Author

**Prasad Mahajan**\
📧 [pmmahajan2002@gmail.com](mailto\:pmmahajan2002@gmail.com)\
🔗 [GitHub](https://github.com/prasadm11)\
🔗 [LinkedIn](https://www.linkedin.com/in/prasadm11)

---

> Built with ❤️ using Angular

