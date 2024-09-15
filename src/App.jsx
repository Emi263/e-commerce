import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import { createContext, useState } from "react";

export const ProductContext = createContext();
export const ThemeContext = createContext();

function App() {
  // const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const isDarkMode = getCurrentTheme();
  const defaultTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
  const [theme, setTheme] = useState(defaultTheme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ProductContext.Provider value={null}>
          <RouterProvider router={router} />
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
