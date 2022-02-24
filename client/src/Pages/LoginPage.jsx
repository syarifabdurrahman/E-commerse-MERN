import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png");
  background-color: #ca965c;
  color: #f4dfba;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: #f4dfba;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid #f4dfba;
  margin-bottom: 10px;

  &:hover {
    background-color: #a37954;
  }
  &:disabled {
    color: #f4dfba;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong</Error>}
          <Link
            to={"/register"}
            style={{
              color: " #f4dfba",
              margin: " 5px 0",
              fontSize: "12px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            FORGOT THE PASSWORD?
          </Link>
          <Link
            to={"/register"}
            style={{
              color: " #f4dfba",
              margin: " 5px 0",
              fontSize: "12px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
