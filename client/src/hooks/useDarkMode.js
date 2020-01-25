import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  useEffect(() => {
    //if this is true or false dark mode will be added/removed.
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value, setValue]);

  return [value, setValue];
};

export default useDarkMode;