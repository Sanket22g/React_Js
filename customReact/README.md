# 🛠️ Custom React — Building React from Scratch

> **Project Goal**: Demystify React's internals by building a custom mini-reconciliation and rendering engine using pure JavaScript and DOM APIs.

---

## 📌 1. What We Did in This Project
Before using React or JSX, we wrote a tiny vanilla JavaScript application that mimics how React compiles elements and renders them into the browser DOM:
- Defined an in-memory element object (how JSX compiles under the hood).
- Implemented a custom `customRender` function that translates our object into real browser DOM nodes.
- Mounted the newly constructed DOM element to the `#root` container.

---

## 💡 2. Core Concepts Learned

### A. What is a "React Element"?
In React, JSX is **not HTML**. When you write `<a href="https://google.com">Google</a>`, Babel / bundlers transform it into a JavaScript object:
```javascript
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google link'
}
```
* **`type`**: The HTML tag name (e.g., `'a'`, `'div'`, `'h1'`) or a React Component function.
* **`props`**: An object containing HTML attributes, event listeners, or custom properties passed down.
* **`children`**: Text content, inner HTML, or nested React element objects.

### B. The Custom Render Function
How React takes this virtual tree and generates real browser DOM:
```javascript
function customRender(reactElement, container) {
    // 1. Create the real DOM element based on type
    const domElement = document.createElement(reactElement.type);
    
    // 2. Set the inner text / children
    domElement.innerHTML = reactElement.children;

    // 3. Dynamically inject all properties and attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // 4. Mount into the host container (e.g., #root)
    container.appendChild(domElement);
}
```

---

## ⚙️ 3. How It Works (Execution Flow)

```mermaid
graph LR
    A["JSX Code <br/> &lt;a href='...'&gt;Google&lt;/a&gt;"] -->|Transpiler / Babel| B["React Element Object <br/> { type: 'a', props, children }"]
    B -->|customRender()| C["Browser DOM API <br/> createElement & setAttribute"]
    C -->|appendChild| D["Real Browser DOM <br/> &lt;div id='root'&gt;"]
```

1. **Step 1:** The element definition is declared as a plain JavaScript tree node.
2. **Step 2:** `document.querySelector('#root')` locates the root element in `index.html`.
3. **Step 3:** `customRender` runs, dynamically loops over props, builds the real node, and appends it to `#root`.

---

## 🧠 4. Quick Revision & Interview Cheatsheet

| Question | Quick Answer |
| :--- | :--- |
| **What does JSX compile to?** | Calls to `React.createElement(type, props, ...children)` returning plain JavaScript objects. |
| **Why can't browsers read JSX directly?** | JSX is not valid JavaScript syntax; it requires a transpiler (Babel/SWC) to convert into standard JS. |
| **Why does React need a Virtual DOM?** | Real DOM manipulations trigger expensive browser layout recalculation and repaints (reflow). Virtual DOM allows diffing in-memory first. |

---

## 🚀 5. How to Run
Since this is pure HTML and vanilla JavaScript:
- Simply open [index.html](file:///f:/React_Js/customReact/index.html) in your browser or run with VS Code Live Server.
