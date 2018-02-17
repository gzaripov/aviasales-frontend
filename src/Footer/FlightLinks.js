import React from "react";
import styled from "styled-components";

const FlightLinks = styled.div`
  border-bottom: 1px solid #e0e6e8;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
`;

const LiLink = props => (
  <li className={props.className}>
    <a href={props.href}>{props.children}</a>
  </li>
);

const Link = styled(LiLink)`
  display: block;
  margin-bottom: 12px;
`;

const BoldLink = Link.extend`
  font-weight: 500;
  padding-top: 4px;
  margin-bottom: 0px;
`;

const LinkList = styled.ul`
  padding: 0;
  text-align: left;
  font-size: 12px;
`;

const LinkColumn = styled.nav`
  margin-bottom: 24px;
`;

export default () => (
  <FlightLinks>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Страны</Title>
            <LinkList>
              <Link>Россия</Link>
              <Link>Таиланд</Link>
              <Link>Черногория</Link>
              <Link>Кипр</Link>
              <Link>Болгария</Link>
              <Link>Грузия</Link>
              <BoldLink>Все страны →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Города</Title>
            <LinkList>
              <Link>Москва</Link>
              <Link>Санкт-Петербург</Link>
              <Link>Симферополь</Link>
              <Link>Адлер</Link>
              <Link>Екатеринбург</Link>
              <Link>Лондон</Link>
              <BoldLink>Все города →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Авиакомпании</Title>
            <LinkList>
              <Link>Air Berlin</Link>
              <Link>Air France</Link>
              <Link>Alitalia</Link>
              <Link>Ait Baltic</Link>
              <Link>Emirates</Link>
              <Link>KLM</Link>
              <BoldLink>Все страны →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Аэропорты</Title>
            <LinkList>
              <Link>Шереметьево</Link>
              <Link>Курумоч</Link>
              <Link>Домодедство</Link>
              <Link>Толмачево</Link>
              <Link>Владивосток</Link>
              <Link>Гамбург</Link>
              <BoldLink>Все аэропорты →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Направления</Title>
            <LinkList>
              <Link>MOW – SIP </Link>
              <Link>MOW – AER</Link>
              <Link>MOW – TIV</Link>
              <Link>MOW – MRV</Link>
              <Link>LED – MOW</Link>
              <Link>MOW – BKK</Link>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Сервисы</Title>
            <LinkList>
              <Link>Горящие авиабилеты</Link>
              <Link>Календарь низких цен</Link>
              <Link>Карта низких цен</Link>
              <Link>Спецпредложения</Link>
              <Link>Таблица цен</Link>
              <Link>Блог</Link>
              <Link>Помощь</Link>
            </LinkList>
          </LinkColumn>
        </div>
      </div>
    </div>
  </FlightLinks>
);
