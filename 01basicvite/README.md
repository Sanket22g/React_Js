# ⚡ 01 Basic Vite — Modern React Bundling & JSX Deep Dive

> **Project Goal**: Understanding Vite as the modern alternative to Create React App, along with deep inspection of `React.createElement` and evaluated expressions in JSX.

---

## 📌 1. What We Did in This Project
- Initialized a light, lightning-fast React application using Vite (`npm create vite@latest`).
- Explored how Vite serves code natively over ESM (ECMAScript Modules) without bundling everything upfront.
- Examined how `React.createElement` creates element objects manually in [src/main.jsx](file:///f:/React_Js/01basicvite/src/main.jsx).
- Built a modular component [src/yt.jsx](file:///f:/React_Js/01basicvite/src/yt.jsx).

---

## 💡 2. Core Concepts Learned

### A. Vite vs Create React App (CRA)
| Feature | Create React App (CRA) | Vite |
| :--- | :--- | :--- |
| **Bundler Under the Hood** | Webpack | Rollup (Production) + esbuild (Dev) |
| **Dev Server Start Speed** | Slow (bundles the entire app first) | Instant (Native ES Modules on demand) |
| **Hot Module Replacement (HMR)** | Rebuilds chunk on save (slower in large apps) | Near instant HMR regardless of app size |
| **File Extension Policy** | Allows JSX in `.js` and `.jsx` | **Strict**: Files with JSX must end in `.jsx` |
| **Script Command** | `npm start` | `npm run dev` |

### B. Behind the Scenes: `React.createElement`
When you write:
```jsx
<a href="https://google.com" target="_blank">Google link</a>
```
React compiles it into:
```javascript
const Areactelement = React.createElement(
  'a',                                           // 1. Tag name / component
  { href: 'https://google.com', target: '_blank' }, // 2. Props & Attributes
  'Google link'                                  // 3. Children / inner content
)
```
You can pass this object directly to `createRoot(...).render(Areactelement)`.

### C. Evaluated Expressions in JSX `{}`
In JSX, curly braces `{}` denote an **Evaluated Expression**, meaning only JavaScript expressions that evaluate to a value can go inside:
- ✅ **Allowed (Expressions)**: `{username}`, `{2 + 2}`, `{isLoggedIn ? 'Logout' : 'Login'}`, `{arr.map(...)}`
- ❌ **Not Allowed (Statements)**: `{if (user) { ... }}`, `{for (let i = 0; ...)}`  
  *Why?* Because JSX translates directly into function arguments for `React.createElement(...)`, and you cannot pass an `if` statement as a function argument in JavaScript.

---

## 🧠 3. Quick Revision Cheatsheet

- **Why must component files be `.jsx` in Vite?**  
  Vite uses `esbuild` for fast transforms and intentionally does not scan `.js` files for JSX syntax to optimize performance.
- **Why is `index.html` located in root in Vite instead of `public/`?**  
  Vite treats `index.html` as the source code and entry point of your application, pointing directly to `<script type="module" src="/src/main.jsx"></script>`.

---

## 🛠️ 4. How to Run This Project

```bash
# Navigate to this project folder
cd 01basicvite

# Install dependencies (if not already installed)
npm install

# Start the Vite development server
npm run dev

# Build for production
npm run build
```
