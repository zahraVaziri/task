import React, { useEffect } from "react";
import "./Navgation.css";
import { BsMoon } from "react-icons/bs";
import { UseDark, UseDarkActions } from "../../component/Context/DarkProvider";

const Navgation = () => {
  //  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const theme = UseDark();
  const setTheme = UseDarkActions();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <header className="mainNavigation">
      <nav className="container">
        <h3>Where in the world?</h3>
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          <BsMoon /> Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Navgation;
