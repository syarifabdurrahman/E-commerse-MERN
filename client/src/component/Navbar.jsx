import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png");
  background-color: #876445;
  color: #eec373;
  font-weight: bold;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

//Left
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Languange = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #eec373;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "0 10px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

//Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ display: "none" })}
`;
const LogoSm = styled.h1`
  display: none;
  ${mobile({ display: "block", fontSize: "24px", fontWeight: "bold" })}
`;

//Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = currentUser
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useSelector((state) => state.cart.quantity)
    : 0;
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(dispatch, currentUser);
    window.location.reload(false);
  };

  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Languange>EN</Languange>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              sx={{ color: "#eec373", fontSize: "16px", marginLeft: "1px" }}
            />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>MoezaStore.</Logo>
          <LogoSm>MOEZA.</LogoSm>
        </Center>

        {currentUser ? (
          <Right>
            <MenuItem
              onClick={handleSignOut}
              style={{ textDecoration: "none", color: "#EEC373" }}
            >
              SIGN OUT
            </MenuItem>

            <Link to={"/cart"}>
              <MenuItem>
                <Badge badgeContent={quantity} color="warning">
                  <ShoppingCart sx={{ color: "#EEC373" }} />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        ) : (
          <Right>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#EEC373" }}
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>

            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "#EEC373" }}
            >
              <MenuItem>SIGN IN</MenuItem>
            </Link>

            <Link to={"/cart"}>
              <MenuItem>
                <Badge badgeContent={quantity} color="warning">
                  <ShoppingCart sx={{ color: "#EEC373" }} />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
