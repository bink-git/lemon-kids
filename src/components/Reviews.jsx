import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle.jsx';
import Title from './Title.jsx';
import rectPurp from '../assets/rect-purple.svg';
import rectOrange from '../assets/rect-orange.svg';
import stars from '../assets/stars.svg';
import commentDots from '../assets/slide-dots-icon.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { slides } from '../data.js';

const Reviews = () => {
  return (
    <Wrapper id="reviews " className="container">
      <Subtitle className="sub-center">Експертна думка користувачів</Subtitle>
      <Title>Відгуки батьків та педагогів</Title>
      <div className="slide-bg">
        <img src={rectPurp} alt="rect" className="rect-purp" />
        <img src={rectOrange} alt="rect" className="rect-org" />

        <Swiper
          slidesPerView={3}
          // spaceBetween={20}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className="swiper-slide " key={slide.id}>
                <img
                  src={slide.slide}
                  alt="slide photo"
                  className="slide-img"
                />
                <div className="slide-content">
                  <div className="slide-rating">
                    <img src={stars} alt="stars rating" />
                    <span>5.0 rating</span>
                  </div>
                  <div className="slide-comment">
                    <p className="slide-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                    <img src={commentDots} alt="icon" className="dots" />
                  </div>
                  <div className="slide-author">
                    <p className="name">Elisa Grant</p>
                    <p className="position">Legacy Solutions Engineer</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-block: 90px;
  width: 100%;
  margin: 0 auto;

  h2,
  .sub-center {
    text-align: center;
  }

  h2 {
    margin-bottom: 100px;
  }

  .slide-bg {
    position: relative;
    width: 100%;
    min-height: 450px;
    height: 100%;
  }

  .rect-purp {
    position: absolute;
    left: 30%;
    bottom: 25%;
  }
  .rect-org {
    position: absolute;
    top: -40px;
    right: 32%;
  }

  .mySwiper {
    width: 100%;
    min-height: 450px;
    height: 100%;
    margin-top: 150px;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 17px;
    border-radius: 6px;
    background: #fbfbfb;
    box-shadow: 14.296875px 10.0078125px 28.59375px 0px rgba(0, 0, 0, 0.08);
    transform: scale(0.7);
  }

  .swiper-slide.swiper-slide-active {
    width: 512px;
    height: 206px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: scale(1);
    transition: transform ease-out 0.7s;
  }

  .swiper-slide.swiper-slide-next .slide-img,
  .swiper-slide.swiper-slide-prev .slide-img {
    width: 70px;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      background-color: var(--clr-primary-1);
      opacity: 1;
      margin: 0 8px;
    }

    .swiper-pagination-bullet-active {
      width: 45px;
      height: 15px;
      border-radius: 12px;
      background-color: var(--clr-primary-2);
      transition: all ease-in-out 0.3s;
    }
  }

  .slide-content {
    height: 100%;
    position: relative;

    .dots {
      position: absolute;
      top: 10px;
      right: -35px;
    }
  }

  .slide-text {
    color: var(--clr-text);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
    margin-block: 16px;
  }

  .slide-rating {
    display: flex;
    align-items: center;

    span {
      color: #888;
      font-size: 12px;
      font-weight: 400;
      margin-left: 10px;
    }
  }

  .name {
    color: var(--clr-text);
    font-size: 16px;
    font-weight: 600;
    line-height: 14px; /* 100% */
  }

  .position {
    color: var(--clr-text);
    font-size: 12px;
    font-weight: 400;
  }
`;

export default Reviews;
