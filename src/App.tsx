import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 60px;
  margin-bottom: 300px;
`;
const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
const AdService = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: fit-content;
  min-height: 200px;
  min-width: 200px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 20px;
`;
function App() {
  return (
    <MainContainer>
      <ServiceContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route id="home" path="/" element={<Home />} />
            <Route id="search" path="/search" element={<Search />} />
            <Route id="register" path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <AdService />
      </ServiceContainer>
    </MainContainer>
  );
}

export default App;
