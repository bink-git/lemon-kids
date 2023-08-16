import React from 'react';
import Advanteges from './Advanteges';
import team from '../assets/team.png';
import styled from 'styled-components';
import smallCheck from '../assets/check-small.svg';
import ButtonPrimary from './ButtonPrimary';
import Title from './Title';
import Subtitle from './Subtitle';

const About = () => {
  return (
    <>
      <Wrapper>
        <div className="light-bg"></div>
        <div className="about-img">
          <img src={team} alt="team photo" />
        </div>
        <div className="about-info">
          <Subtitle>Давайте знайомитися</Subtitle>
          <Title>Хто ми?</Title>
          <div className="descr">
            <p>
              Таким чином, початок повсякденної роботи з формування позиції
              значною мірою зумовлює створення форм розвитку. Значимість цих
              проблем настільки очевидна, що консультація із широким активом
              відіграє важливу роль у формуванні форм розвитку.
            </p>
            <p>
              Так само постійне інформаційно-пропагандистське забезпечення нашої
              діяльності вимагають визначення та уточнення суттєвих фінансових
              та адміністративних умов. Ідейні міркування вищого порядку, а
              також рамки та місце навчання кадрів відіграє важливу роль у
              формуванні форм розвитку.
            </p>
          </div>
          <div className="instagram">
            <img src={smallCheck} alt="check icon" />
            <p>
              Наша сторінка в{' '}
              <span>
                <a href="https://www.instagram.com/" target="_blank">
                  Instagram
                </a>
              </span>
            </p>
          </div>
          <ButtonPrimary>Подивитись</ButtonPrimary>
        </div>
      </Wrapper>
      <Advanteges />
    </>
  );
};

const Wrapper = styled.section`
  padding: 90px 50px 0px 50px;
  position: relative;
  display: flex;
  gap: 60px;

  .light-bg {
    background-color: #fdf4eb;
    height: 217px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .descr {
      margin-bottom: 56px;
      color: var(--clr-text);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
      margin-bottom: 20px;
    }
  }

  .instagram {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    img {
      margin-right: 24px;
    }

    p {
      color: var(--clr-text);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      margin: 0;
    }

    a {
      color: #ff8a00;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      text-decoration: none;
    }
  }

  .about-btn {
    align-self: flex-start;
    border: 5px solid red;
  }
`;

export default About;
