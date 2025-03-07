# 📌 E-Commerce Dropdown Component

This project is a **reusable dropdown component** built with **React.js, TypeScript, and SCSS**. It allows users to select a product category and includes various interactive features such as:

✅ **Modern and responsive design**  
✅ **Closes the dropdown when clicking outside**  
✅ **Smooth arrow rotation animation when opening/closing**  
✅ **Modular and maintainable structure**  

---

## 🚀 Installation & Setup  

First, clone the repository:  

```
git clone https://github.com/your-repo/ecommerce-dropdown.git
cd ecommerce-dropdown
```

Then, install dependencies:  

```
npm install
```

Finally, start the development server:  

```
npm run dev
```

Now, visit **`http://localhost:3000`** in your browser to see the component in action.  

---

## 📂 Project Structure  

```
/src
  /components
    /Dropdown
      Dropdown.tsx       # Main dropdown component
      Dropdown.module.scss  # SCSS module for styling
  /constants
    options.ts           # Dropdown options list
  App.tsx                # Main application file
  index.tsx              # Entry point of the project
```

---

## 🎨 Features & Functionality  

### 1️⃣ Selectable Product Categories  
- Users can choose from available categories like **Science 🚀, Sports ⚽, Art 🎭, Health 🏥, and more**.  

### 2️⃣ Animated Arrow Rotation  
- When the dropdown is clicked, **the arrow rotates upwards**, and when closed, **it rotates back down**.  

### 3️⃣ Close Dropdown on Outside Click  
- If the user clicks **outside the dropdown**, it will **automatically close**.  

### 4️⃣ Responsive & Modern UI  
- Styled using **SCSS modules**, ensuring a **clean and scalable design** across all devices.  

---

## 🛠️ How to Use  

Import and use the `Dropdown` component in your project:  

```
import Dropdown from "./components/Dropdown/Dropdown";
import { options } from "./constants/options";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Category</h2>
      <Dropdown options={options} placeholder="Choose a category" />
    </div>
  );
};

export default App;
```

---

## 📜 License  
This project is licensed under the **MIT License**.  

🚀 **Happy Coding!** 🎨
