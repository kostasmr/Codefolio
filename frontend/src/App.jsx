import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

function App() {

  return (
    <>
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    </>
  )
}

export default App
