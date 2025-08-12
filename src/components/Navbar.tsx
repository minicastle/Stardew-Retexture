import styled from "@emotion/styled";
import Icon from "../../public/chicken.png";
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ff9c9c;
  /* background: linear-gradient(
    180deg,
    rgba(17, 5, 50, 1) 0%,
    rgba(3, 81, 156, 1) 50%,
    rgba(115, 243, 227, 1) 100%
  ); */
`;
const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
  color: white;
`;
const NavListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
`;

function Navbar() {
  return (
    <MainContainer>
      <NavIcon>
        <img width={40} src={Icon} />
      </NavIcon>
      <NavList>
        <NavListItem>Home</NavListItem>
        <NavListItem>Search</NavListItem>
        <NavListItem>Register</NavListItem>
      </NavList>
    </MainContainer>
  );
}

export default Navbar;
