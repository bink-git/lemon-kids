import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import ButtonPrimary from './ButtonPrimary';

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <nav className="main-nav">
          <img src={logo} alt="main logo" className="logo" />

          <ul className="menu">
            <li>
              <a href="#">Про компанію</a>
            </li>
            <li>
              <a href="#">Відгуки</a>
            </li>
            <li>
              <a href="#">Питання</a>
            </li>
          </ul>
        </nav>
        <ButtonPrimary>Зв’яжіться з нами</ButtonPrimary>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header {
    display: flex;
  }
`;

export default Header;
