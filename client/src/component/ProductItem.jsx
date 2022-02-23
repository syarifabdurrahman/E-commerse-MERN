import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ca965c;
  background-image: url("https://www.transparenttextures.com/patterns/grunge-wall.png");
  color: #f4dfba;
  position: relative;
  cursor: pointer;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 80%;
  z-index: 2;
  border-radius: 2%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #876445;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #70533a;
    transform: scale(1.1);
  }
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartCheckoutOutlined />
        </Icon>

        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "#f4dfba" }}
          >
            <SearchOutlined />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
