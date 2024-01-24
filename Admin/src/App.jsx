import { ColorModeContext,useMode } from "./theme"
import { CssBaseline,ThemeProvider } from "@mui/material"

function App() {
  const[theme,colorMode]=useMode();
  return (
    // colormode in response to context to provide to it
    <ColorModeContext.Provider value={colorMode}>
      {/* themeprovider mui's theme setting to give mui access */}
      <ThemeProvider theme={theme}>
        {/* cssbaseline reset any default css */}
        <CssBaseline/>
      <div className="app">
        <main className="content">Hello</main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
