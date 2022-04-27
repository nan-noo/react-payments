import React, { useState } from 'react';
import { Input, InputContainer, Label } from './common';
import LetterCounter from './common/LetterCounter';

const MAX_NAME_LENGTH = 30;

const convertToUpperCase = word => word.toUpperCase();

const notAlphabet = word => /[^a-zA-Z\s]/.test(word);
const validator = value => {
  if (notAlphabet(value)) {
    throw new Error('영어만 입력해 주세요.');
  }

  if (value.length > MAX_NAME_LENGTH) {
    throw new Error(`최대 ${MAX_NAME_LENGTH}글자까지 입력할 수 있습니다.`);
  }
};

function CardOwner() {
  const [ownerName, setOwnerName] = useState('');
  const handleInputChange = ({ target: { value } }) => {
    try {
      validator(value);
    } catch (err) {
      console.log(err.message);
      return;
    }
    setOwnerName(convertToUpperCase(value));
  };
  return (
    <InputContainer position="relative">
      <LetterCounter maxLength={30} currentLength={ownerName.length} />
      <Label>카드 소유자 이름(선택)</Label>
      <Input
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength="30"
        onChange={handleInputChange}
        value={ownerName}
        required
      />
    </InputContainer>
  );
}

export default CardOwner;