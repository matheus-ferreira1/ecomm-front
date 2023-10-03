import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    return () => {
      clearTimeout(timer);
    };
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

      {loading ? <Loading /> : <Home />}
    </div>
  );
}

export default App;
