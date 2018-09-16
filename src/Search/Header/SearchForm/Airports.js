import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../../common/media';
import Button from '../../../common/ui/Button';
import arrow from './icons/arrow.svg';
import Field from '../../../Header/AutocompleteField';

const SwapButton = styled(Button)``;

const Index = styled.span`
  text-transform: uppercase;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-left: auto;
  margin-right: 12px;
`;

const City = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.xl`
    width: calc(18% - 2px);
  `};
`;

const Departure = City.extend`
  border-radius: 4px 0 0;

  ${media.xl`
    border-radius: 4px 0 0 4px;
  `};
`;

const Arrival = City.extend`
  border-radius: 0 4px 0 0;

  ${media.xl`
    border-radius: 0;
  `};
`;

const DepartureAirport = ({
  data, onChange, handleSelect, onReverse,
}) => (
  <Departure>
    <Field
      value={data.city}
      onChange={onChange}
      handleSelection={handleSelect}
      placeholder="Город вылета"
    >
      <Index>{data.iata}</Index>
      <SwapButton onClick={onReverse}>
        <img src={arrow} alt="Swap cities button" />
      </SwapButton>
    </Field>
  </Departure>
);

const ArrivalAirport = ({ data, onChange, handleSelect }) => (
  <Arrival>
    <Field
      value={data.city}
      onChange={onChange}
      handleSelection={handleSelect}
      placeholder="Город прибытия"
    >
      <Index>{data.iata}</Index>
    </Field>
  </Arrival>
);

DepartureAirport.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    iata: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  onReverse: PropTypes.func.isRequired,
};

ArrivalAirport.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    iata: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  handleSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { DepartureAirport, ArrivalAirport };
