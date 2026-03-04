import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  console.log(theme);

  //  function themeChange(){
  //        setTheme("dark");
  //   }

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Dashboard</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <button >{theme}</button>
    </div>
  );
};

export default Nav2;
