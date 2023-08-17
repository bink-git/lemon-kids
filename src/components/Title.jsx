import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  color: var(--clr-primary-1);
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 30px;
`;

export default Title;
