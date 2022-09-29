import LandingScreen from './Screens/LandingScreen';
import QueueScreen from './Screens/QueueScreen';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={ <Navigate to="/home"/>} />
            <Route path="/home" element={<LandingScreen />} />
            <Route path="/queue" element={<QueueScreen />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
