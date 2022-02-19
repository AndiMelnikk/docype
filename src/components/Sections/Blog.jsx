import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import Animates from "../Elements/Animates/Animates";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">Наша історія</h2>
              <p className="font13">
                2 хлопці, які у сфері IT понад 4 роки, покинули свою роботу, та займаються розробкою вебсайтів,
                <br />
                рекламою в інтернеті та створення додатків для PC, Android та iPhone.
              </p>
            </Animates>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <BlogBox
                  title="Відкриття студії !"
                  text="Саме це число можна вважати першим днем існування студії в цей день був куплені домен doctype.site та хостинг."
                  tag="www.doctype.site"
                  author="04.09.2021"
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                <BlogBox
                  title="Соц. сторінка"
                  text="Кожен бізнес повинен бути відомим, ми як і всі зареєстрували сторінку в соц. мережах."
                  tag="Instagram"
                  author="05.09.2021"
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.6">
                <BlogBox
                  title="Перше замовлення )"
                  text="Сарафанне радіо допомогло знайти перші замовлення, це були телеграм боти для збору інформації."
                  tag="Telegram bot"
                  author="29.09.2021"
                />
              </Animates>
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.6">
                <BlogBox
                  title="Реклама 1"
                  text="Спроба запустити рекламу в соц. мережах увінчалась провалом, як пізніше нам підказали - наші партнери не там."
                  tag="Instagram / Facebook"
                  author="15.10.2021"
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                <BlogBox
                  title="Реклама 2"
                  text="Контекстна реклама в Google уже принесла свій результат через декілька днів, і ми вирішили що діла в капелюсі."
                  tag="Google"
                  author="28.12.2021"
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <BlogBox
                  title="Майбутні плани."
                  text="Зі зростанням кількості замовлень задумуєшся до переїзду на офіс, тому в ближнє майбутнє будемо переїжджати."
                  tag="Офіс"
                  author="до 01.05.2022"
                />
              </Animates>
            </div>
          </div>
          <div className="row flexCenter">
            {/* <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Незабаром більше" action={() => alert("clicked")} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">Що вони кажуть?</h2>
              <p className="font13">
                Ось декілька задоволених відгуків партнерів яким пощастило працювати
                <br />
                разом з нами, а ми своєю чергою зробити все як завжди
              </p>
            </Animates>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;