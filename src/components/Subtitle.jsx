import React from 'react';
import styled from 'styled-components';

const Subtitle = ({ children }) => {
  return <SubtitleStyled className="sub-center">{children}</SubtitleStyled>;
};

const SubtitleStyled = styled.p`
  color: var(--clr-primary-2);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export default Subtitle;
