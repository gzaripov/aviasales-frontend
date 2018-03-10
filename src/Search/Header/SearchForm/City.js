import React from 'react';
import styled from 'styled-components';
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

const Input = styled.input`
  width: 100%;
`;

const City = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 18px 16px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.xl`
    width: calc(18% - 2px);
  `};
`;

const Departure = City.extend`
  padding: 0;
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

class DepartureCity extends React.Component {
  state = {
    airport: {
      city: '',
      country: '',
      iata: '',
    },
  };

  onChange = (city) => {
    this.setState({
      ...this.state,
      city,
    });
  };

  handleSelection = (airport) => {
    this.setState(airport);
  };

  render() {
    const { city, iata } = this.state;
    return (
      <Departure>
        <Field
          value={city}
          onChange={this.onChange}
          handleSelection={this.handleSelection}
          placeholder="Город вылета"
        >
          <Index>{iata}</Index>
          {/* <SwapButton>
            <img src={arrow} alt="Swap cities button" />
          </SwapButton> */}
        </Field>
      </Departure>
    );
  }
}

export { DepartureCity };

export const ArrivalCity = () => (
  <Arrival>
    <Input placeholder="Город прибытия" />
    <Index />
  </Arrival>
);
