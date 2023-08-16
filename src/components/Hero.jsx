import React from 'react';
import styled from 'styled-components';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import mainImg from '../assets/main-img-2.png';

const Hero = () => {
  return (
    <Wrapper>
      <div className="info">
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
          <ButtonPrimary>Хочу на платформу!</ButtonPrimary>
          <ButtonSecondary>Хочу дізнатися докладніше</ButtonSecondary>
        </div>
      </div>
      <div className="main-img">
        {/* <img src={mainImg} alt="main img" /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 86px;
  justify-content: space-between;
  min-height: 770px;
  height: 100%;
  background-image: url('./main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 50px;
  padding-bottom: 70px;

  h1 {
    color: var(--clr-primary-2);
    font-size: 72px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-bottom: 45px;

    span {
      color: var(--clr-primary-1);
      font-size: 55px;
    }
  }

  p {
    color: #5d2b6f;
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
