import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable/PricingTable";
import Animates from "../Elements/Animates/Animates";

export default function Pricing(props) {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <Animates animate="animate__flipInX" time="animate__fast" showInterest="0.3">
              <h2 className="font40 extraBold">Перегляньте наші ціни</h2>
              <p className="font13">
              Вебсайти, SEO, Реклама, Додатки на ПК, Android та iPhone - ми займаємось усім цим.
                <br />
                А головним критерієм у нашій співпраці є виконання всі домовленостей.
              </p>
            </Animates>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <PricingTable
                  icon="leading"
                  price="$150"
                  title="Landing Page"
                  text="Односторінкові сайти зазвичай використовують разом з рекламою в соц. мережа. Це чудова зв'яза для заявлення про себе."
                  offers={[
                    { name: "Впізнавання бренду", cheked: true },
                    { name: "Залучення новий людей", cheked: true },
                    { name: "Отримання контактів", cheked: true },
                    { name: "Збільшення заявок", cheked: true },
                    { name: "Інтернет продажі", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                <PricingTable
                  icon="shop"
                  price="$450"
                  title="Магазин"
                  text="Продаж власних товарів, або запуск бізнесу про дропшипінгу. Все як у звичайному магазині, тільки можна працювати без складу."
                  offers={[
                    { name: "Продажа власних товарів", cheked: true },
                    { name: "Дропшипінг", cheked: true },
                    { name: "Ваш продукт шукають", cheked: true },
                    { name: "Власний бізнес", cheked: true },
                    { name: "Збільшення продажів", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.6">
                <PricingTable
                  icon="company"
                  price="$250"
                  title="Корпоративний"
                  text="Сайт, що має потужні функціональні можливості з великою кількістю розділів, детальною інформацією про компанію."
                  offers={[
                    { name: "Інформація про компанію", cheked: true },
                    { name: "Формування іміджу", cheked: true },
                    { name: "БД клієнтів та партнерів", cheked: true },
                    { name: "Розкрутка компанії", cheked: true },
                    { name: "Залучення аудиторії", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
          </TablesWrapper>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.6">
                <PricingTable
                  icon="ads"
                  price="$30"
                  title="Реклама"
                  text="Обов'язковий атрибут для нового бізнесу, а також для підтримки існуючого."
                  offers={[
                    { name: "Google", cheked: true },
                    { name: "Instagram", cheked: true },
                    { name: "Facebook", cheked: true },
                    { name: "Youtube", cheked: true },
                    { name: "SEO", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.4">
                <PricingTable
                  icon="bot"
                  price="$50"
                  title="Чат ботн"
                  text="Заготовленні відповіді чи питання, або автоматичний збір контактів про людину."
                  offers={[
                    { name: "Спілкування 24/7", cheked: true },
                    { name: "Часті питання", cheked: true },
                    { name: "Автоматизоване спілкування", cheked: true },
                    { name: "Легка розсилка новин", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
            <TableBox>
              <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.2">
                <PricingTable
                  icon="app"
                  price="$900"
                  title="PC | Mobile"
                  text="Програмне забезпечення яке буде тільки у вас, або програма для багатьох користувачів."
                  offers={[
                    { name: "Особиста програма", cheked: true },
                    { name: "Робота без інтернету", cheked: true },
                    { name: "Зручність", cheked: true },
                    { name: "Приватний функціонал", cheked: true },
                    { name: "Великі можливості", cheked: true },
                  ]}
                  action={()=>{props.showModal()}}
                />
              </Animates>
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




