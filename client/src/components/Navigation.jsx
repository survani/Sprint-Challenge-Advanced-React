import React from "react";

import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <React.Fragment>
      <div className="dark-mode__toggle">
        <button
          data-testid="dark-mode-button"
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          {" "}
          Dark Mode
        </button>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
