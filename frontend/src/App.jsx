import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.200","black")} as="main" flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* <Route path="/" element={<CreatePage />} /> */}
        </Routes>
      </Box>
    </>
  )
}

export default App
