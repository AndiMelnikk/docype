import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";
import Animates from "../Elements/Animates/Animates";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <Animates animate="animate__fadeInUp" time="animate__slow" showInterest="0.2">
            <TestimonialBox
              text="Хлопці роблять таке, що важко уявити. Розробили систему '1C' для мого шиномонтажа. Тепер всі операції по бізнесу у мене електроно."
              author="Володими Мельник"
            />
          </Animates>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <Animates animate="animate__fadeInUp" time="animate__slow" showInterest="0.5">
            <TestimonialBox
              text="Доробляють мені уже 2-ий сайт. Подобається що відносяться до мене як до партнера, і ми ніби допомагаємо один одному. Дякую за класну роботу."
              author="Іванка Дорош"
            />
          </Animates>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <Animates animate="animate__fadeInUp" time="animate__slow" showInterest="0.8">
            <TestimonialBox
              text="Зробили телеграм бота, який розбровідає про мої успіхи, чим займаюсь та ставить запитання для майбутніх покупці, а відповіді зберігає в Excel таблиці.."
              author="Ірина Запотична"
            />
          </Animates>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
