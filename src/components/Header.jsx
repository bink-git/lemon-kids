import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Button from './ButtonPrimary';

const Header = () => {
  return (
    <Wrapper>
      <div className="header">
        <nav className="main-nav">
          <div className="logo">
            <img src={logo} alt="main logo" />
          </div>
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
        <Button>Зв’яжіться з нами</Button>
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
