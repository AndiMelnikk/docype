import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox/ServiceBox";
import FullButton from "../Buttons/FullButton";
import Animates from "../Elements/Animates/Animates";
// Assets
import AddImage1 from "../../assets/img/add/portfolio-1.jpeg";
import AddImage2 from "../../assets/img/contact-1.webp";
import AddImage3 from "../../assets/img/contact-2.webp";
import AddImage4 from "../../assets/img/add/portfolio-2.jpeg";


export default function Services(props) {

  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="0.3">
          <div className="container">
            <ClientSlider />
          </div>
        </Animates>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">!Doctype, тому що...</h2>
              <p className="font13">
              розробляємо  інтернет-магазин  до 60 днів, landing page до 10, налаштування реклами 3.
                <br />
                <b>Хоча студія ще юна, проте  гарантуємо все, що вказано на сайті.</b>
              </p>
              </Animates>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <ServiceBox
                  icon="cup"
                  title="Винятковість"
                  subtitle="Ми розробляємо не просто вебсайт або програму, а індивідуальну систему під Ваш бізнес і побажання."
                />
              </Animates>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.6">
                <ServiceBox
                  icon="speed"
                  title="Швидкість"
                  subtitle="Інтернет-магазин до 60 днів. Landing Page до 10 днів. Реклама 3 дні. Програми для Пк від 50 днів."
                />
              </Animates>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.8">
                <ServiceBox
                  icon="fire"
                  title="Якість"
                  subtitle="Чітко формуємо цілі, технічні завдання та нюанси, тому 8/10 проєктів здаємо з першої демонстрації"
                />
              </Animates>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                <ServiceBox 
                  icon="prise" 
                  title="Розумна ціна" 
                  subtitle="Ціна - це: якість + швидкість + унікальність + важкість. Так оцінюємо ми." />
              </Animates>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
                  <h4 className="font15 semiBold">Ось що ми скажемо про себе</h4>
                  <h2 className="font40 extraBold">Про студію !Doctype</h2>
                  <p className="font12">
                  Ми хлопці котрі відкрили свою студію та створюють інструмент для масштабування | піднімають рейтинги | займаються онлайн відкриттям Вашого бізнесу, налаштовуємо його та допомагаємо в просуванні. Нічого більшого, нічого зайвого.
                  </p>
                </Animates>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Консультація" action={()=>{props.showModal()}} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title={ <a href='tel:123-456-7890'>Зателефонувати</a> } border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                        <img src={AddImage1} alt="office" />
                      </Animates>
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <Animates animate="animate__fadeInRightBig" time="animate__fast" showInterest="1">
                        <img src={AddImage2} alt="office" />
                      </Animates>
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <Animates animate="animate__fadeInRightBig" time="animate__fast" showInterest="1">
                          <img src={AddImage3} alt="office" />
                        </Animates>
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                        <img src={AddImage4} alt="office" />
                      </Animates>
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;