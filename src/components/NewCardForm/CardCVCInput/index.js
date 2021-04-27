import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardCVCInputWrapper } from './index.styles';

const CardCVCInput = ({ cvc, errorMessage, onChangeCardInput }) => {
  return (
    <CardCVCInputWrapper>
      <div className='input-label'>보안 코드(CVC/CVV)</div>
      <div className='input-main cvc-container'>
        <Input
          type='password'
          name='cvc'
          minLength='3'
          maxLength='3'
          value={cvc}
          onChange={onChangeCardInput}
          required
        />
        <div className='help'>?</div>
      </div>
      <div className='input-alert'>{errorMessage}</div>
    </CardCVCInputWrapper>
  );
};

CardCVCInput.propTypes = {
  cvc: PropTypes.string,
  errorMessage: PropTypes.string,
  onChangeCardInput: PropTypes.func,
};

export default CardCVCInput;
