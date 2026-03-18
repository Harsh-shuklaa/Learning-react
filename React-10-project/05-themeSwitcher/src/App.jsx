import React, { useEffect, useState } from "react";
import  { ThemeProvider } from "./Context/theme";
import Theme from "./components/Theme";
import Card from "./components/Card";
  


const App = () => {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = ()=>{
    return setThemeMode("dark")
  }
  const lightTheme=()=>{
    return setThemeMode("light")
  }

  useEffect(()=>{
    const root= document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(themeMode);
  },[themeMode])

  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center ">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Theme />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
