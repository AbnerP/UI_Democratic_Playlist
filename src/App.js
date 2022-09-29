import {ThemeProvider } from "@mui/material/styles";
import LandingScreen from "./Screens/LandingScreen";
import QueueScreen from "./Screens/QueueScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {theme} from "./theme-config.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<LandingScreen />} />
            <Route path="/queue" element={<QueueScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
