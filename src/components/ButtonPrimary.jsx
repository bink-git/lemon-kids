import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = ({ children, disabled, type, onClick }) => {
  return (
    <ButtonStyled
      type={type}
      disabled={disabled}
      className="btn-about btn-subscribe"
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: var(--clr-primary-1);
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: var(--text-lg);
  line-height: 100%;
  border-radius: 60px;
  padding: 17px 37px;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e4cdf6;
  }

  &:active {
    background-color: #ffd500;
  }

  &:disabled {
    background-color: #eae5ee;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export default ButtonPrimary;
