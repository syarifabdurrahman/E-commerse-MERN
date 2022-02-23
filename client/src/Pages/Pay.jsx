import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 120;
  border-radius: 5;
  padding: 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const KEY =
  "pk_test_51KRsluAzTrFZtdFMuocBFc4siy0hdX3bLzJdcQTVgXhqE7ancU2JPLZxEsw4Xp9ofMFNlC1zpSRD7eeAZxzZjhG100NU57ukGa";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 7000,
        });
        console.log(res.data);
        history("/success");
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken, history]);

  return (
    <Container>
      {stripeToken ? (
        <span>Processing ...... please wait </span>
      ) : (
        <StripeCheckout
          name="Moeza"
          billingAddress
          shippingAddress
          description="your total IDR 80 USD"
          amount={8000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>PAY NOW</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
