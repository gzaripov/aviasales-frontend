import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../../common/media';
import Button from '../../../common/ui/Button';
import Field from '../../../Header/AutocompleteField';
import arrow from './icons/arrow.svg';

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

  ${media.lg`
    width: calc(20% - 2px);
  `};
`;

const Departure = styled(City)`
  border-radius: 4px 4px 0 0;

  ${media.sm`
    border-radius: 4px 0 0 0;
  `};

  ${media.lg`
    border-radius: 4px 0 0 4px;
  `};
`;

const Arrival = styled(City)`
  ${media.sm`
    border-radius: 0 4px 0 0;
  `};

  ${media.lg`
   border-radius: 0;
  `};
`;
const DepartureAirport = ({ data, onChange, onReverse }) => (
  <Departure>
    <Field
      value={data.city}
      onChange={city => onChange({ ...data, city })}
      handleSelection={onChange}
      placeholder="Город вылета"
    >
      <div>
        <Index>{data.iata}</Index>
        <SwapButton onClick={onReverse}>
          <img src={arrow} alt="Swap cities button" />
        </SwapButton>
      </div>
    </Field>
  </Departure>
);

const ArrivalAirport = ({ data, onChange }) => (
  <Arrival>
    <Field
      value={data.city}
      onChange={city => onChange({ ...data, city })}
      handleSelection={onChange}
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
  }),
  onChange: PropTypes.func.isRequired,
  onReverse: PropTypes.func.isRequired,
};

DepartureAirport.defaultProps = {
  data: {
    city: '',
    iata: '',
    country: '',
  },
};

ArrivalAirport.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    iata: PropTypes.string,
    country: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

ArrivalAirport.defaultProps = {
  data: {
    city: '',
    iata: '',
    country: '',
  },
};

export { DepartureAirport, ArrivalAirport };
