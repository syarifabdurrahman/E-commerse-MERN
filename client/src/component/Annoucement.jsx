import React from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";

const Container = styled.div`
  flex: 1;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const CenterArea = styled.div`
  flex: 1;
  text-align: center;
`;

const RightArea = styled.div`
  align-items: right;
  display: inline-block;
  justify-content: flex-end;
`;

const Annoucement = () => {
  return (
    <Container>
      <CenterArea>Super Deal!! New promo this month</CenterArea>

      <RightArea>
        <CancelIcon />
      </RightArea>
    </Container>
  );
};

export default Annoucement;
