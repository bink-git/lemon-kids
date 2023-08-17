import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle';
import Title from './Title';
import ButtonPrimary from './ButtonPrimary';
import girl from '../assets/girl.jpg';

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="container contact-form">
        <div className="form-info">
          <Subtitle>зворотна форма</Subtitle>
          <Title>Залишились питання? Або бажаєте зворотній дзвінок?</Title>
          <p className="descr">
            Зв'яжіться з нами у будь-який час, і ми будемо раді відповісти на
            ваші запитання. Заповніть форму, щоб надіслати нам email. Ми
            відповімо або передзвонимо найближчим часом.
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
            <ButtonPrimary className="btn-form" disabled>
              Надіслати нам своє питання
            </ButtonPrimary>
          </form>
        </div>
        <div className="form-img">
          <img src={girl} alt="girl" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 750px;
  height: 100%;
  background-image: url('./main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .contact-form {
    display: flex;
    gap: 84px;
  }

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
      margin-bottom: 57px;
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
    }

    textarea {
      width: 330px;
      height: 130px;
      resize: none;
    }

    input,
    textarea {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: var(--clr-text);
      padding: 8px;
      border-radius: 10px;
      border: 1px solid var(--grey-border, #b9bcc3);
      background: var(--white, #fff);
    }

    input::placeholder,
    textarea::placeholder {
      font-family: 'Open Sans', sans-serif;
      color: #777b82;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }

    input:focus,
    textarea:focus {
      outline: 2px solid var(--clr-primary-1);
    }
  }

  .btn-form {
    width: 100%;
  }

  .form-img img {
    height: 100%;
  }
`;

export default ContactForm;
