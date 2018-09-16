import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../common/media';
import Header from './Header';

const From = styled.span`
  line-height: 20px;
  font-size: 16px;
`;

const Price = styled.a`
  margin-left: auto;
  text-decoration: none;
  font-size: 14px;
  color: #00bae8;
  margin-bottom: 4px;
`;

const CityPriceContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CityPrice = props => (
  <CityPriceContainer>
    <From>{props.data.from}</From>
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
      {props.data.prices.map(price => <CityPrice data={price} key={price.id} />)}
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
