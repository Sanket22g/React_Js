# 🎨 03 Tailwind Props — Component Reusability & Props Mastering

> **Project Goal**: Learn how to style React components using Tailwind CSS and master data passing with Props (both static and dynamic list rendering with `map`).

---

## 📌 1. What We Did in This Project
- Configured Tailwind CSS utility classes within a Vite React app.
- Created a reusable [src/components/Card.jsx](file:///f:/React_Js/03tailwindprops/src/components/Card.jsx) component for profile cards.
- Explored:
  1. **Static Rendering**: Passing individual props manually to multiple card instances.
  2. **Dynamic Rendering**: Iterating through an array of objects using JavaScript's `.map()` to render cards dynamically.
- Implemented default prop fallbacks and prop destructuring.

---

## 💡 2. Core Concepts Learned

### A. What are Props in React?
Props (short for **Properties**) are read-only inputs passed from a parent component to a child component to customize its data and appearance:
```jsx
// In App.jsx (Parent passing props)
<Card 
  username="Abhi" 
  btnText="View Profile" 
  img="https://randomuser.me/api/portraits/men/32.jpg"
  obj={{ id: 1, city: "Delhi" }}
/>
```

### B. Destructuring Props & Default Fallbacks
In child components, destructure props directly in the function arguments and assign default values:
```jsx
// In Card.jsx (Child receiving props)
function Card({ username = "Guest User", btnText = "Visit Me", img, obj }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg p-4 bg-gray-900 text-white">
      <img src={img || "https://via.placeholder.com/150"} alt={username} />
      <h2>{username}</h2>
      <p>{obj?.city || "Unknown Location"}</p>
      <button className="bg-blue-600 px-4 py-2 rounded">{btnText}</button>
    </div>
  );
}
```

### C. Dynamic List Rendering with `.map()` & The `key` Prop
Instead of duplicating JSX, render lists dynamically:
```jsx
{arr.map((person) => (
  <Card
    key={person.id}
    username={person.username}
    btnText={person.btnText}
    img={person.img}
    obj={{ id: person.id, city: person.city }}
  />
))}
```

---

## 🧠 3. Quick Revision Cheatsheet

| Question | Deep Dive Answer |
| :--- | :--- |
| **Why is the `key` prop essential in lists?** | Keys give elements a stable identity across renders. React Fiber uses keys to quickly determine if an item was added, removed, or reordered without re-rendering the entire list. |
| **Why should you avoid using `index` as a `key`?** | If items are added, removed, or sorted, array indexes shift. This causes React to misidentify which DOM nodes match which items, leading to UI state bugs (e.g., wrong input field focus/values). |
| **Are props mutable?** | No. Props are strictly **read-only** (unidirectional data flow). A child component must never modify its received props directly. |

---

## 🛠️ 4. How to Run This Project

```bash
cd 03tailwindprops
npm install
npm run dev
```
