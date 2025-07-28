import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const AdService = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: fit-content;
  position: absolute;
  left: 10px;
  top: 150px;
  min-height: 200px;
  border: 1px solid black;
`;
function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route id="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <AdService></AdService>
    </MainContainer>
  );
}

export default App;
