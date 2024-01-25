import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Scenes/Global/Header";
import Sidebar from "./Scenes/Global/Sidebar";
import Dashboard from "./Scenes/Dashboard";
import Team from "./Scenes/Team/Team";
import Invoices from "./Scenes/Invoice/invoice";
import Contacts from "./Scenes/Contacts/Contact";
import Bar from "./Scenes/bar/bar";
import Form from "./Scenes/Form/Form";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import FAQ from "./Scenes/Faq/faq"
import Geography from "./Scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Scenes/Calender/Calender";
function App() {
  const[theme,colorMode]=useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    // colormode in response to context to provide to it,passing colormode to all,
    <ColorModeContext.Provider value={colorMode}>
      {/* themeprovider mui's theme setting to give mui access */}
      <ThemeProvider theme={theme}>
        {/* cssbaseline reset any default css */}
        <CssBaseline/>
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Header/>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
        </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
