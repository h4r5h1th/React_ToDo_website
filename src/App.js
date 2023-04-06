import './App.css';
import Header from './components/Header'
import { createContext, useState } from 'react';
import Content from './components/Content';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")
  const toggletheme =  () =>{
    setTheme((curr) => (curr==="light" ? "dark": "light"))
  }
 
  return (
    <ThemeContext.Provider value={{theme, toggletheme}}>
    <div className="App" id={theme}>
      <Header />
      <Content /> 
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
