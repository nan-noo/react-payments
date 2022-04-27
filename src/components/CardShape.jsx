import React from 'react';
import styled from 'styled-components';
import { Span } from './common';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 208px;
  height: 130px;
  padding: 16px;
  background: #94dacd;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 10px 0;
`;

const CardHeader = styled.div``;
const CardChip = styled.div`
  width: 45px;
  height: 25px;
  margin: 8px;
  border-radius: 10%;
  background-color: #cbba64;
`;
const CardBottom = styled.div``;
const CardNumber = styled.div``;
const CardInfo = styled.div``;

function CardShape({ cardCompany, cardNumber, cardOwner, cardDate }) {
  return (
    <CardContainer>
      <CardBox>
        <CardHeader>
          <Span>{cardCompany}</Span>
        </CardHeader>
        <CardChip />
        <CardBottom>
          <CardNumber>
            <Span>{cardNumber}</Span>
          </CardNumber>
          <CardInfo>
            <Span>{cardOwner}</Span>
            <Span>{cardDate}</Span>
          </CardInfo>
        </CardBottom>
      </CardBox>
    </CardContainer>
  );
}

export default CardShape;
