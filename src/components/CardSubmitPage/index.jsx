import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { CardInfoContext } from '../../context';
import { LABEL_PRIMARY_COLOR, PLACEHOLDER_PRIMARY_COLOR } from '../../style';

import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import Footer from '../common/Footer';
import TextButton from '../common/TextButton';

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

const LinedInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 1px solid #000;
  width: 80%;
  font-size: 1.25rem;
  padding: 8px;

  &:focus {
    outline: 1px solid ${PLACEHOLDER_PRIMARY_COLOR};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function CardSubmitPage() {
  const { cardCompany, cardNumbers, owner, cardDate } = useContext(CardInfoContext);
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setNickname(value);
    setErrorMessage('');

    if (!value.trim()) {
      setErrorMessage('필수로 입력해주세요.');
    }
  };

  const handleClick = () => {
    if (!nickname.trim()) {
      return;
    }

    alert('완료 :D');
  };
  return (
    <>
      <SubmitContainer>
        <Title>카드 등록이 완료되었습니다.</Title>
        <Card
          large
          handleClickBox={() => {}}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          cardOwner={owner}
          cardDate={cardDate}
        />
        <Container>
          <LinedInput
            type="text"
            minLength={1}
            maxLength={30}
            placeholder="카드 별칭"
            required
            name="nickname"
            value={nickname}
            onChange={handleInputChange}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Container>
      </SubmitContainer>
      <Footer>
        <TextButton type="button" hexColor={LABEL_PRIMARY_COLOR} onClick={handleClick} isVisible>
          확인
        </TextButton>
      </Footer>
    </>
  );
}

export default CardSubmitPage;