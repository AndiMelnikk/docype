import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import Animates from "../Elements/Animates/Animates";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import AddImage2 from "../../assets/img/add/add.jpeg";

export default function Projects(props) {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">Прєкти в розробці</h2>
              <p className="font13">
                Ось які проєкти зараз знаходяться в наших руках.
                <br />
                Переоцінити важкість проєктів та нашу роботу - задача не легка.
              </p>
            </Animates>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <ProjectBox
                  img={ProjectImg1}
                  title="Shiba"
                  text="Крипто гра. Вигравай криптовалюту граючи в легкі ігри."
                  action={() => alert("clicked")}
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.8">
                <ProjectBox
                  img={ProjectImg2}
                  title="Інтернет магазин"
                  text="Уже займаємось прєктами які принесуть дохідн уже цього сезону."
                  action={() => alert("clicked")}
                />
              </Animates>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.5">
                <ProjectBox
                  img={ProjectImg3}
                  title="Ivanna's Blog"
                  text="Інформаційна сторінка про майстриню та її роботу."
                  action={() => alert("clicked")}
                />
              </Animates>
            </div>
          </div>
          <div className="row flexCenter">
            {/* <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <Animates animate="animate__fadeInLeft" time="animate__fast" showInterest="0.2">
                  <ImgWrapper className="flexCenter">
                    <img className="radius8" src={AddImage2} alt="add" />
                  </ImgWrapper>
                </Animates>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
                <h4 className="font15 semiBold">Онлайн відповіді на шаблонні запитання</h4>
                <h2 className="font40 extraBold">Що я знаю про чат бота ?</h2>
                <p className="font12">
                Чат бот - це інструмент який спілкується з клієнатами в соц. мережах. Зазвичай такі боти використвують для шаблоних питянь клієнтів, надсилання новин, акцій для людей які спілкувались з вами або збору інформаціх про людину.
                </p>
              </Animates>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                <FullButton title="Консультація" action={()=>{props.showModal()}} />
                  
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title={ <a href='tel:123-456-7890'>Зателефонувати</a>} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
