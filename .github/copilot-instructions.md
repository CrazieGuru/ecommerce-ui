# 🤖 Copilot Instructions for TechHub E-Commerce UI

## 🏗️ Architecture & Structure
- **React 19 + Vite + Tailwind CSS**. Entry: `src/main.jsx`, main app: `src/App.jsx`.
- **Routing:** All routes defined in `src/app/routes.jsx` using React Router v7. Most pages are protected by `ProtectedRoute` (`src/auth/ProtectedRoute.jsx`).
- **State Management:**
  - **Auth:** `src/auth/AuthContext.jsx` (handles login, token refresh, auto-logout, user state)
  - **Cart:** `src/context/CartContext.jsx` (cart state, localStorage sync, CRUD ops)
- **API Layer:**
  - `src/api/axios.js` sets up axios with token from localStorage and base URL from `VITE_API_BASE_URL`.
  - `src/api/auth.api.js` for auth endpoints (login, register, refresh, getMe).
- **UI Components:**
  - Shared/reusable: `src/components/` (Navbar, Footer, Modals, etc.)
  - Layouts: `src/layouts/` (AppLayout, AuthLayout, GuestLayout)
  - Pages: `src/pages/` (Dashboard, Products, Cart, Checkout, Profile, etc.)

## 🧩 Key Patterns & Conventions
- **Auth tokens** are stored in `localStorage` as `access_token` and `refresh_token`.
- **Cart** is persisted in `localStorage` as `cart` (JSON array).
- **API calls** use axios instance (`src/api/axios.js`) with auto-attached bearer token.
- **Component structure:** Prefer functional components, hooks, and context for state.
- **Styling:** Use Tailwind utility classes. Theme: teal/cyan. Responsive breakpoints: `<640px`, `640-1024px`, `>1024px`.
- **Protected routes:** Use `ProtectedRoute` for any page requiring login.
- **Modals:** Login/Register modals in `src/components/`.
- **Error handling:** 404 page at `src/pages/NotFound.jsx`.

## 🛠️ Developer Workflows
- **Start dev server:** `npm run dev` (default port: 5174)
- **Build for prod:** `npm run build`
- **Lint:** `npm run lint`
- **Preview build:** `npm run preview`
- **No test suite** is present; manual testing via UI.

## 🔗 Integration & Data Flow
- **API endpoints** are documented in `API_GUIDE.md` and `PROJECT_STRUCTURE.md`.
- **Auth flow:**
  1. Login/register via `auth.api.js` → tokens saved to localStorage
  2. `AuthContext` auto-refreshes token every 14 min (see `setupTokenRefresh`)
  3. All API requests attach token via axios interceptor
- **Cart flow:**
  1. Add/update/remove via `CartContext`
  2. Cart state syncs to localStorage
  3. Cart badge in Navbar via `getTotalItems()`

## 📚 Reference Files
- **Project structure:** `PROJECT_STRUCTURE.md`
- **Feature list:** `COMPLETE_FEATURES_GUIDE.md`
- **API details:** `API_GUIDE.md`
- **Quick start:** `README.md`, `QUICK_START.md`

## ⚡ Examples
- **Add a protected page:**
  1. Create in `src/pages/`
  2. Add route in `src/app/routes.jsx` wrapped in `<ProtectedRoute>`
- **Add API call:**
  1. Add function to `src/api/`
  2. Use axios instance for auth
- **Add to cart:** Use `addToCart(product)` from `CartContext`

## 🚫 Avoid
- Do not use class components
- Do not store sensitive data outside localStorage
- Do not bypass context for auth/cart state

---
_Last updated: February 1, 2026_