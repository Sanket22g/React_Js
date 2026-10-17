# 📚 Full React.js Learning & Revision Hub

Welcome to the comprehensive React.js codebase repository. Below is a quick-navigation roadmap to the individual revision notes created for each project, detailing the architecture, core React concepts, execution flow, and interview cheatsheets.

## 🗺️ Project Revision Guides

| # | Project Directory | Core Focus & Concepts | Quick Link |
| :- | :--- | :--- | :--- |
| 00 | `customReact` | Under the hood: Building React from scratch, Virtual DOM objects, custom renderer | [View customReact Notes](file:///f:/React_Js/customReact/README.md) |
| 01 | `01basicreact` | Create React App (CRA), JSX structure, `createRoot`, why `npm start` | [View 01basicreact Notes](file:///f:/React_Js/01basicreact/README.md) |
| 02 | `01basicvite` | Vite Bundler vs CRA, Native ES Modules, `React.createElement`, evaluated expressions `{}` | [View 01basicvite Notes](file:///f:/React_Js/01basicvite/README.md) |
| 03 | `02viteapp` | Reactivity with `useState`, why JS variables fail, state batching & functional updates | [View 02viteapp Notes](file:///f:/React_Js/02viteapp/README.md) |
| 04 | `03tailwindprops` | Tailwind CSS integration, Props passing & destructuring, list `.map()`, `key` importance | [View 03tailwindprops Notes](file:///f:/React_Js/03tailwindprops/README.md) |
| 05 | `04Bgreact` | Dynamic inline styles with state, lifting state up to Navbar, dynamic component dictionary | [View 04Bgreact Notes](file:///f:/React_Js/04Bgreact/README.md) |
| 06 | `05PassGen` | The Hooks Masterclass: `useState`, `useCallback`, `useEffect`, `useRef` for DOM copying | [View 05PassGen Notes](file:///f:/React_Js/05PassGen/README.md) |
| 07 | `06Apiuse` | Custom Hooks (`useCurrency`), REST API fetching, controlled `InputBox`, currency swap | [View 06Apiuse Notes](file:///f:/React_Js/06Apiuse/README.md) |
| 08 | `07ReactRouter` | SPA Routing, `createBrowserRouter`, `Outlet` layouts, `useParams`, route `loader` prefetching | [View 07ReactRouter Notes](file:///f:/React_Js/07ReactRouter/README.md) |
| 09 | `08Context` | Context API: Solving Prop Drilling, `createContext`, `UserContextProvider`, `useContext` | [View 08Context Notes](file:///f:/React_Js/08Context/README.md) |
| 10 | `09Darkmode` | Production Theme Context pattern, custom `useTheme()` hook, Tailwind dark mode classes | [View 09Darkmode Notes](file:///f:/React_Js/09Darkmode/README.md) |

---

# 🚀 Amazon Frontend Engineer (FEE) & React Interview Preparation Guide

This guide contains the most frequently asked React core architecture and performance questions asked at **Amazon**, **Meta**, and other top tech companies. Each question includes a **Simple Explanation (Layman's terms)**, a **Formal Interview Answer**, and **Code Examples**.

---

## 📑 Table of Contents
1. [What is the Virtual DOM and Reconciliation?](#1-what-is-the-virtual-dom-and-reconciliation)
2. [How does React achieve O(n) Diffing Complexity instead of O(n³)?](#2-how-does-react-achieve-on-diffing-complexity-instead-of-on)
3. [What is React Fiber and what problem did it solve?](#3-what-is-react-fiber-and-what-problem-did-it-solve)
4. [Why is the `key` prop essential, and why is `index` dangerous?](#4-why-is-the-key-prop-essential-and-why-is-index-dangerous)
5. [What is State and why can't we use normal JavaScript variables?](#5-what-is-state-and-why-cant-we-use-normal-javascript-variables)
6. [What is State Batching in React (React 18 & 19)?](#6-what-is-state-batching-in-react-react-18--19)
7. [What happens with multiple `setCount` calls in a row?](#7-what-happens-with-multiple-setcount-calls-in-a-row)
8. [Why do JSX expressions require a single parent element?](#8-why-do-jsx-expressions-require-a-single-parent-element)
9. [Render Phase vs Commit Phase in React](#9-render-phase-vs-commit-phase-in-react)
10. [Controlled vs Uncontrolled Components](#10-controlled-vs-uncontrolled-components)
11. [How do you prevent unnecessary re-renders (useMemo, useCallback, React.memo)?](#11-how-do-you-prevent-unnecessary-re-renders-usememo-usecallback-reactmemo)

---

### 1. What is the Virtual DOM and Reconciliation?

#### 💡 Simple Explanation
Manipulating the real browser DOM directly is slow because the browser has to recalculate styles, layout, and repaint the screen (reflow). React creates a lightweight JavaScript copy of the UI called the **Virtual DOM**. When state changes, React compares the new Virtual DOM with the old one, figures out *only* what changed, and updates just those tiny parts in the real DOM. This comparison process is called **Reconciliation**.

#### 🎯 Interview Answer
> *"The Virtual DOM is an in-memory JavaScript representation of the real DOM. Reconciliation is the algorithm React uses to diff two Virtual DOM trees. When a component’s state or props change, React generates a new Virtual DOM tree, runs its diffing algorithm to compute the minimal set of DOM mutations, and batches those changes to the real DOM during the commit phase to maximize performance."*

---

### 2. How does React achieve O(n) Diffing Complexity instead of O(n³)?

#### 💡 Simple Explanation
Comparing two generic tree structures in computer science takes $O(n^3)$ operations (for 1,000 nodes, that's 1 billion operations). React uses two smart assumptions (heuristics) to bring it down to $O(n)$ linear time (1,000 operations):
1. Two elements with different tag names/types will produce completely different trees.
2. Elements in a list with unique `key` attributes are stable across renders.

#### 🎯 Interview Answer
> *"React avoids the standard $O(n^3)$ tree diffing complexity by employing two heuristic assumptions: First, if two elements have different types (e.g., changing a `<div>` to a `<section>`), React tears down the old tree and mounts the new one without diffing children. Second, for child lists, React relies on developer-provided `key` props to match nodes across renders in linear $O(n)$ time."*

---

### 3. What is React Fiber and what problem did it solve?

#### 💡 Simple Explanation
Before React 16 (the "Stack Reconciler"), once React started rendering a large UI tree, it could **not pause**. If rendering took too long, the browser froze, causing dropped frames and laggy input typing. **React Fiber** is a complete rewrite of the reconciliation engine that breaks work into tiny units (fibers), allowing React to **pause, abort, or prioritize** work (like keeping typing smooth while loading data in the background).

#### 🎯 Interview Answer
> *"React Fiber is the modern reconciliation architecture introduced in React 16. It replaced the synchronous, recursive Stack Reconciler with an asynchronous, linked-list-based virtual stack frame. Fiber enables incremental rendering, allowing React to split rendering work into chunks, pause work to yield execution back to the browser for high-priority tasks (e.g., user animations or keystrokes), and resume later."*

| Feature | Old Stack Reconciler | Modern React Fiber |
| :--- | :--- | :--- |
| **Execution** | Synchronous & Blocking | Asynchronous & Interruptible |
| **Scheduling** | Cannot pause mid-tree | Can pause, resume, or cancel work |
| **Prioritization** | All updates equal priority | High priority (user input) vs Low priority (background fetch) |

---

### 4. Why is the `key` prop essential, and why is `index` dangerous?

#### 💡 Simple Explanation
React uses `key` to identify which items in a list have been added, moved, or deleted. 
If you use array `index` as a key and delete the first item, all remaining items' indexes shift by 1. React thinks the first item stayed and the last item was deleted, causing **corrupted input state, animation bugs, and wasted re-renders**.

#### 🎯 Interview Answer
> *"The `key` prop gives React a persistent identity for each item across renders during list reconciliation. Using array index as a key is an anti-pattern when items can be filtered, sorted, added, or deleted because changing the order changes the index associated with each item. This causes React to incorrectly reuse existing DOM nodes and component state, leading to subtle UI defects."*

```jsx
// ❌ Dangerous: Index as key
{items.map((item, index) => <TodoItem key={index} {...item} />)}

// ✅ Correct: Stable unique ID
{items.map((item) => <TodoItem key={item.id} {...item} />)}
```

---

### 5. What is State and why can't we use normal JavaScript variables?

#### 💡 Simple Explanation
State is a component's persistent memory. If you use a regular variable (`let count = 0`), changing it does not notify React. React won't re-run the component function, and the screen won't update. `useState` gives you a variable AND a trigger function (`setCount`) that tells React: *"Data changed, please re-render the UI."*

#### 🎯 Interview Answer
> *"State is private, component-scoped data that triggers a re-render whenever it is updated. Plain JavaScript variables do not persist across render cycles, and modifying them does not notify React's runtime. React's `useState` hook registers the state with the component's Fiber node and schedules a re-render when the setter function is invoked."*

---

### 6. What is State Batching in React (React 18 & 19)?

#### 💡 Simple Explanation
Batching is when React groups multiple `setState` calls into a **single re-render** to prevent the browser from doing unnecessary work. In React 18+, **Automatic Batching** applies everywhere: inside event handlers, `setTimeout`, Promises, and fetch callbacks.

#### 🎯 Interview Answer
> *"Batching is an optimization where React consolidates multiple state updates into a single re-render pass to prevent performance degradation. React 18 introduced Automatic Batching, which batches state updates regardless of origin—including asynchronous operations such as promises, `setTimeout`, and native event handlers."*

---

### 7. What happens with multiple `setCount` calls in a row?

#### 💡 Code Snippet
```jsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

#### 🎯 Interview Answer & Output
* **Question:** If `count` starts at `0`, what is `count` after one click?
* **Answer:** `1` (NOT `3`).
* **Why:** In that render pass, `count` is a snapshot with the value `0`. React receives three identical updates: `setCount(0 + 1)`, batches them, and renders with `1`.
* **Fix:** Use the functional updater form to access the immediate pending state:

```jsx
const handleClick = () => {
  setCount((prev) => prev + 1); // 0 -> 1
  setCount((prev) => prev + 1); // 1 -> 2
  setCount((prev) => prev + 1); // 2 -> 3 (Final value: 3)
};
```

---

### 8. Why do JSX expressions require a single parent element?

#### 💡 Simple Explanation
JSX is converted into JavaScript function calls: `React.createElement(...)`. In JavaScript, a function cannot return two separate values at the same time (`return a, b;` is invalid). Everything returned must be wrapped in a single container or a React Fragment (`<>...</>`).

#### 🎯 Interview Answer
> *"Under the hood, JSX transpiles to `React.createElement()` calls (or the `jsx()` runtime). Since JavaScript functions can only return a single expression/value, adjacent JSX elements must be wrapped by a single root element or a `<React.Fragment>` / `<>` to avoid returning multiple disjoint AST nodes."*

---

### 9. Render Phase vs Commit Phase in React

#### 🎯 Interview Answer
React's work is split into two distinct lifecycle phases:

1. **Render Phase (Pure & Asynchronous):**
   - React invokes the component functions and computes differences between the new and old Virtual DOM (Reconciliation).
   - This phase can be paused, aborted, or restarted by React Fiber without side effects.
2. **Commit Phase (Synchronous):**
   - React applies the calculated mutations directly to the real DOM.
   - Executes lifecycle hooks (`useEffect`, `useLayoutEffect`).
   - This phase is always synchronous to ensure the screen does not display half-rendered states.

---

### 10. Controlled vs Uncontrolled Components

| Feature | Controlled Component | Uncontrolled Component |
| :--- | :--- | :--- |
| **Source of Truth** | React State (`useState`) | Real DOM (`useRef`) |
| **Value Handler** | `value={state}` + `onChange` | `ref={inputRef}` |
| **Validation** | Real-time validation on keystroke | Value read on submit |
| **Performance** | Re-renders on every keystroke | No re-render on typing |

---

### 11. How do you prevent unnecessary re-renders (useMemo, useCallback, React.memo)?

#### 🎯 Interview Answer
> *"In React, performance optimization is about preventing wasted renders and costly recalculations:*
> - *`React.memo` is a Higher-Order Component that skips re-rendering a child component if its props haven't changed (shallow comparison).*
> - *`useMemo` caches the **result of an expensive calculation** between renders.*
> - *`useCallback` caches a **function definition** between renders so passing it as a prop doesn't break `React.memo` on the child.*

```jsx
// Caches expensive calculation
const expensiveResult = useMemo(() => computeHeavyData(data), [data]);

// Caches function reference
const handleClick = useCallback(() => {
  console.log("Clicked:", id);
}, [id]);
```

---

### 🌟 Pro Amazon Interview Tip: The "Customer Obsession & Dive Deep" Angle
When answering frontend questions at Amazon:
1. Always link algorithms to **Customer Impact** (e.g., *"Fiber prevents UI stutter and keeps time-to-interactive low for customers on low-end mobile devices"*).
2. Emphasize **Metrics** (e.g., Core Web Vitals: LCP, INP, CLS).
3. Demonstrate a clear understanding of trade-offs (e.g., overusing `useMemo`/`useCallback` adds memory overhead).