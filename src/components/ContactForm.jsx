import React from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle';
import Title from './Title';
import girl from '../assets/girl.jpg';

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="form-info">
        <Subtitle>зворотна форма</Subtitle>
        <Title>Залишились питання? Або бажаєте зворотній дзвінок?</Title>
        <p className="descr">
          Зв'яжіться з нами у будь-який час, і ми будемо раді відповісти на ваші
          запитання. Заповніть форму, щоб надіслати нам email. Ми відповімо або
          передзвонимо найближчим часом.
        </p>
        <form>
          <div className="inputs">
            <div className="input-group">
              <div>
                <label htmlFor="name">ПІБ</label>
                <input type="text" placeholder="Введіть ваші ПІБ" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Введіть вашу електронну пошту"
                  id="email"
                />
              </div>
            </div>
            <div className="textarea">
              <label htmlFor="textarea">Коментар</label>
              <textarea id="textarea" placeholder="Введіть текст"></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="form-img">
        <img src={girl} alt="girl" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 84px;
  min-height: 750px;
  height: 100%;
  background-image: url('./main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .form-info {
    padding: 90px 0px 70px 50px;

    .descr {
      color: var(--clr-text);
      font-size: 17px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 24px;
    }

    .inputs {
      display: flex;
      justify-content: space-between;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    label {
      color: var(--clr-primary-1);
      font-size: 16px;
      font-weight: 600;
      line-height: 18px; /* 112.5% */
      display: block;
      margin-bottom: 3px;
    }

    input {
      width: 420px;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid var(--grey-border, #b9bcc3);
      background: var(--white, #fff);
    }

    input::placeholder {
      color: #777b82;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    input:focus {
      outline: 2px solid var(--clr-primary-1);
    }
  }

  textarea {
    width: 330px;
    height: 130px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid var(--grey-border, #b9bcc3);
    background: var(--white, #fff);
    resize: none;
  }

  textarea::placeholder {
    color: #777b82;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .form-img img {
    height: 100%;
  }
`;

export default ContactForm;
