# Vue Admin Dashboard Demo

A single-page admin dashboard demo built with Vue, Vuex, and Vue Router — showcasing authenticated routing, a filterable/sortable/paginated data table, and client-side form validation on top of a BootstrapVue UI.

## What's inside

- **Authenticated routing** — a Vue Router navigation guard checks Vuex auth state on every route change and redirects unauthenticated users to the login screen, preserving the originally requested path for post-login redirect.
- **Login / logout flow** — a Vuex module simulates a credential check and persists the session (token + user) to `localStorage`; the login form is validated client-side with Vuelidate.
- **Forgot-password screen** — a front-end form/UI stub for password recovery (no backend call wired up).
- **Provider management view** — a data table (BootstrapVue `b-table`) over in-memory sample data with search filtering, column sorting, pagination, a row details drawer, and an info modal.
- **HTTP request interceptor** — attaches a bearer token from the Vuex store to outgoing `vue-resource` requests.
- **Two layout shells** — a "main" layout (header, content, footer) for authenticated pages and a "single" layout for auth pages.
- **Notifications** — login/logout feedback via alertifyjs toasts.
- Additional routed views (Product, Settings) exist as placeholders for future feature work.

## Tech stack

- Vue.js (Options API)
- Vue Router
- Vuex
- BootstrapVue (Bootstrap UI components)
- Vuelidate (form validation)
- vue-resource (HTTP client)
- alertifyjs (notifications)
- Font Awesome (icons)
- Sass/SCSS (styling)
- Vue CLI (`vue-cli-service`) for dev server, build, and linting
- ESLint

## Quickstart

Dependencies are managed with [Bun](https://bun.sh) (see `bun.lock`).

```bash
bun install
bun run serve   # dev server with hot-reload
bun run build   # production build
bun run lint     # lint and auto-fix
```

Demo login credentials (local testing only): username `admin`, password `password`.

## Project structure

```
src/
├── components/
│   ├── layout/    # Main (authenticated) and Single (auth) page shells
│   ├── shared/    # Header, Footer
│   └── pages/
│       ├── auth/       # Login, forgot-password
│       ├── provider/   # Provider management data table
│       ├── product/    # Placeholder view
│       └── settings/   # Placeholder view
├── config/    # App name and API base URL resolution
├── filters/   # Global Vue filters
├── routes/    # Router, auth guard, HTTP interceptor
└── store/     # Vuex store and auth module
```

## Routes

| Path | View | Protected |
| --- | --- | --- |
| `/` | Provider management | Yes |
| `/product` | Product placeholder | Yes |
| `/settings` | Settings placeholder | Yes |
| `/auth/login` | Login | No |
| `/auth/recovery` | Forgot password | No |
