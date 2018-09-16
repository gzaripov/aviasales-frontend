import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../common/media';
import Header from './Header';

const CityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  padding: 0 8px;

  :hover {
    background-color: #f1fcff;
  }
`;

const City = styled.a`
  padding: 8px 0;
  line-height: 20px;
  flex-grow: 1;
  text-align: start;
  transition: color 0.3s;
  color: #4a4a4a;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${CityPriceContainer}:hover & {
    color: #ff8b00;
    text-decoration: underline;
  }
`;

const Price = styled.a`
  margin-left: auto;
  text-decoration: none;
  color: #00bae8;
  transition: color 0.3s;
  padding-left: 10px;
  white-space: nowrap;

  ${CityPriceContainer}:hover & {
    color: #ff8b00;
  }
`;

const CityPrice = props => (
  <CityPriceContainer>
    <City>{props.data.from}</City>
    <Price>от {props.data.price} ₽</Price>
  </CityPriceContainer>
);

CityPrice.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

const PricesBox = styled.div`
  padding-top: 24px;
`;

const CityCardStyled = styled.div`
  ${media.lg`
    flex: 1;
  `};
`;

const CityCard = props => (
  <CityCardStyled className={props.className}>
    <Header data={props.data} />
    <PricesBox>
      {props.data.prices.map(price => (
        <CityPrice data={price} key={price.id} />
      ))}
    </PricesBox>
  </CityCardStyled>
);

CityCard.defaultProps = {
  className: '',
};

CityCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    prices: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.string,
      price: PropTypes.string,
    })),
  }).isRequired,
};

export default CityCard;
