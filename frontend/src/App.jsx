import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <Box minH={"100vh"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<CreatePage />} /> */}
        </Routes>
      </Box>
    </>
  )
}

export default App
