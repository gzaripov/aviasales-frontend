import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlightLinks = styled.div`
  padding-bottom: 12px;
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

const LinkText = styled.a`
  color: #4a4a4a;
  text-decoration: none;
`;

const Link = props => (
  <li className={props.className}>
    <LinkText href={props.href}>{props.children}</LinkText>
  </li>
);

Link.defaultProps = {
  className: '',
  href: '',
  children: null,
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.element,
};

const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 12px;
`;

const BoldLink = LinkStyled.extend`
  font-weight: 500;
  padding-top: 4px;
  margin-bottom: 0px;
`;

const LinkList = styled.ul`
  padding: 0;
  margin-top: 16px;
  margin-bottom: 0;
  text-align: left;
  font-size: 12px;
`;

const LinkColumn = styled.nav`
  margin-top: 32px;
`;

export default () => (
  <FlightLinks>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Страны</Title>
            <LinkList>
              <LinkStyled>Россия</LinkStyled>
              <LinkStyled>Таиланд</LinkStyled>
              <LinkStyled>Черногория</LinkStyled>
              <LinkStyled>Кипр</LinkStyled>
              <LinkStyled>Болгария</LinkStyled>
              <LinkStyled>Грузия</LinkStyled>
              <BoldLink>Все страны →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Города</Title>
            <LinkList>
              <LinkStyled>Москва</LinkStyled>
              <LinkStyled>Санкт-Петербург</LinkStyled>
              <LinkStyled>Симферополь</LinkStyled>
              <LinkStyled>Адлер</LinkStyled>
              <LinkStyled>Екатеринбург</LinkStyled>
              <LinkStyled>Лондон</LinkStyled>
              <BoldLink>Все города →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Авиакомпании</Title>
            <LinkList>
              <LinkStyled>Air Berlin</LinkStyled>
              <LinkStyled>Air France</LinkStyled>
              <LinkStyled>Alitalia</LinkStyled>
              <LinkStyled>Ait Baltic</LinkStyled>
              <LinkStyled>Emirates</LinkStyled>
              <LinkStyled>KLM</LinkStyled>
              <BoldLink>Все страны →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Аэропорты</Title>
            <LinkList>
              <LinkStyled>Шереметьево</LinkStyled>
              <LinkStyled>Курумоч</LinkStyled>
              <LinkStyled>Домодедство</LinkStyled>
              <LinkStyled>Толмачево</LinkStyled>
              <LinkStyled>Владивосток</LinkStyled>
              <LinkStyled>Гамбург</LinkStyled>
              <BoldLink>Все аэропорты →</BoldLink>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Направления</Title>
            <LinkList>
              <LinkStyled>MOW – SIP </LinkStyled>
              <LinkStyled>MOW – AER</LinkStyled>
              <LinkStyled>MOW – TIV</LinkStyled>
              <LinkStyled>MOW – MRV</LinkStyled>
              <LinkStyled>LED – MOW</LinkStyled>
              <LinkStyled>MOW – BKK</LinkStyled>
            </LinkList>
          </LinkColumn>
        </div>
        <div className="col-xs-6 col-sm-3 col-lg-2">
          <LinkColumn>
            <Title>Сервисы</Title>
            <LinkList>
              <LinkStyled>Горящие авиабилеты</LinkStyled>
              <LinkStyled>Календарь низких цен</LinkStyled>
              <LinkStyled>Карта низких цен</LinkStyled>
              <LinkStyled>Спецпредложения</LinkStyled>
              <LinkStyled>Таблица цен</LinkStyled>
              <LinkStyled>Блог</LinkStyled>
              <LinkStyled>Помощь</LinkStyled>
            </LinkList>
          </LinkColumn>
        </div>
      </div>
    </div>
  </FlightLinks>
);
