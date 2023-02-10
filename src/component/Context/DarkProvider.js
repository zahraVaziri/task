import { useContext, createContext, useState } from "react";

const DarkContext = createContext();
const DarkContextDispatcher = createContext();


const DarkProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <DarkContext.Provider value={theme}>
      <DarkContextDispatcher.Provider value={setTheme}>
        {children}
      </DarkContextDispatcher.Provider>
    </DarkContext.Provider>
  );
};

export default DarkProvider;

export const UseDark = () => useContext(DarkContext);
export const UseDarkActions = () => useContext(DarkContextDispatcher);
