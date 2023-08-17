import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import mainImg from '../assets/main-img-2.png';
import Header from './Header';

const Hero = () => {
  return (
    <Wrapper>
      <Header />
      <div className="info container">
        <div className="">
          <h1>
            Мрія чи мета?
            <br />
            <span>До якого майбутнього тягнеться ваша дитина</span>
          </h1>
          <p>
            Платформа яка допоможе вам дізнатися здібності вашої дитини, і зможе
            допомогти визначитися з тим, що ближче і подобається вашій дитині
          </p>
          <div className="buttons">
            {/* <ButtonPrimary>Хочу на платформу!</ButtonPrimary> */}
            {/* <ButtonSecondary>Хочу дізнатися докладніше</ButtonSecondary> */}
          </div>
        </div>
        <div className="main-img">
          <img src={mainImg} alt="main img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background-image: url('./main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 50px;
  padding-bottom: 100px;

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
    padding-left: 50px;
  }

  h1 {
    color: var(--clr-primary-2);
    font-size: 72px;
    line-height: 1;
    font-weight: 800;
    margin-bottom: 45px;

    span {
      color: var(--clr-primary-1);
      font-size: 52px;
    }
  }

  p {
    color: var(--clr-text);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
    margin-bottom: 70px; /* 183.333% */
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .main-img {
    object-fit: cover;
  }
`;

export default Hero;
