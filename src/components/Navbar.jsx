import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavContainer>
        <Logo>
          <h1>SnapLook</h1>
        </Logo>
        <Links>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </ul>
        </Links>
      </NavContainer>
      {/* <Avatar src="https://picsum.photos/70" />
      <Heading>
        <h1>hello</h1>
        <div className="box">
          <div className="line"></div>
        </div>
      </Heading> */}
    </div>
  );
};

export default Navbar;

const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

const Heading = styled.div`
  font-size: 50px;
  color: crimson;
  margin: 20px auto;
  width: fit-content;
  :hover {
    color: aqua;
  }

  .box {
    height: 100px;
    width: 100%;
    background-color: lightgreen;
    :hover {
      background-color: purple;
    }
    .line {
      height: 10%;
      width: 100%;
      background-color: limegreen;
    }
  }
`;

const NavContainer = styled.div`
  height: 14vh;
  width: 100vw;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: #222222;
`;

const Logo = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Links = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  color: white;

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`;
