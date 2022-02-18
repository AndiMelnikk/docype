import React, {useState} from "react";
import styled from "styled-components";
// Components
import Animates from "../Elements/Animates/Animates";
import FullButton from "../Buttons/FullButton";
// Assets
import ContactImg1 from "../../assets/img/contact-1.webp";
import ContactImg2 from "../../assets/img/contact-2.webp";
import ContactImg3 from "../../assets/img/contact-3.webp";

export default function Contact() {
  const [titleBtn, setTitleBtn] = useState('Надіслати')
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState('');
  const axios = require('axios');
  

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(name !== "" && phone.length > 9 && (!isNaN(parseFloat(phone)) && isFinite(phone)))
    axios({
      method: 'post',
      url: './php/toMail.php',
      data: {
          name:name,
          phone: phone,
          message: messages
      }
  })
      .then(function (response) {
        setTitleBtn('Відправленно')
          console.log(response)  
      })

      .catch(function (error) {
        setTitleBtn('Помилка, спробуйте знову')
          console.log(error)
      });

    else
    setTitleBtn('Введіть коректні дані')  
}

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">Давайте зв'яжемось</h2>
              <p className="font13">
                Якщо винакають питання або вирішили працювати зв'язуйтесь з нами. Можна надіслати лист на пошту, зателефонувати,
                <br />
                написати в онлайн чат або поспілкуємось в соц.мережах .
              </p>
            </Animates>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit} >
                <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="1">
                  <label className="font13">Ім'я</label>
                  <input type="text" id="fname" name="fname" className="font20 extraBold"  value={name} onChange={e => setName(e.target.value)} />
                </Animates> 
                <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="1">
                  <label className="font13">Телефон:</label>
                  <input type="tel" id="tel" name="tel" className="font20 extraBold"  value={phone} onChange={e => setPhone(e.target.value)} />
                </Animates> 
                <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="0.5">
                  <label className="font13">Побажання:</label>
                  <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold"  value={messages} onChange={e => setMessages(e.target.value)} />
                </Animates> 
                <SubmitWrapper className="flex">
                  <FullButton type="submit" title={titleBtn} value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                </SubmitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <Animates animate="animate__fadeInDownBig" time="animate__fast" showInterest="1">
                    <img src={ContactImg1} width="220px" alt="office" className="radius6" />
                  </Animates>
                </ContactImgBox>
                <ContactImgBox>
                  <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="1">
                    <img src={ContactImg2} width="180px" alt="office" className="radius6" />
                  </Animates>
                </ContactImgBox>
              
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <Animates animate="animate__fadeInRightBig" time="animate__fast" showInterest="1">
                    <img src={ContactImg3} width="230px" alt="office" className="radius6" />
                  </Animates>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SubmitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









