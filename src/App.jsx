import { useState } from "react";
import "./App.css";
import Movie from "./Component/Movie";
import { ThemeProvider } from "./context/Theme";

function App() {
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const [theme, setTheme] = useState(lightTheme);

  const toggle = () => {
    //console.log(darkTheme.backgroundColor);
    if (theme.backgroundColor === lightTheme.backgroundColor) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <ThemeProvider value={{ theme, setTheme }}>
        <button onClick={toggle}>Change Theme</button>
        <Movie />
      </ThemeProvider>
    </div>
  );
}

export default App;
