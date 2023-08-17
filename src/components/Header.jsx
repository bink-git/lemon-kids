import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import ButtonPrimary from './ButtonPrimary';

const Header = () => {
  return (
    <Wrapper>
      <div className="header container">
        <a href="#">
          <img src={logo} alt="main logo" className="logo" />
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="#about">Про компанію</a>
            </li>
            <li>
              <a href="#reviews">Відгуки</a>
            </li>
            <li>
              <a href="#faq">Питання</a>
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
    padding: 20px 50px;
    align-items: center;
    margin-bottom: 50px;
  }

  .logo {
    margin-right: 80px;
  }

  nav {
    display: flex;
    flex: 1;
  }

  li {
    color: var(--clr-primary-1);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
    &:hover {
      color: var(--clr-primary-2);
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    gap: 60px;
  }
`;

export default Header;
