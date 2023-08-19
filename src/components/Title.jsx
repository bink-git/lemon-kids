import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  color: var(--clr-primary-1);
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: 30px;
`;

export default Title;
