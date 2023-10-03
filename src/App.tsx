import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </div>
  );
}

export default App;
