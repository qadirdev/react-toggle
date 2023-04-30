import { createGlobalStyle } from 'styled-components'
import { useState } from 'react';
import Toggler from './components/Toggler';
import ThemeContext from './components/ThemeContext'

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.darkMode ? '#334' : '#eef'};
    color: ${props => props.darkMode ? '#eee' : '#222'};
  }
  `;
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <GlobalStyles darkMode={darkMode} />
        <h3>Dark mode:</h3>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
