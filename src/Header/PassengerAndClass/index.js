import React from 'react';
import styled from 'styled-components';
import sum from 'lodash/sum';
import { withClickOutside } from 'react-clickoutside';
import media from '../../common/media';
import PassengerAndClassPicker from './Picker';
import arrowDown from './arrowDown.svg';

const Passenger = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FlightClass = styled.span`
  color: #a0b0b9;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PassengerAndClass = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 19px 16px;
  cursor: pointer;

  ${media.sm`
    width: calc(25% - 2px);
  `};

  ${media.xl`
    width: calc(17.2% - 2px);
    border-radius: 0 4px 4px 0;
  `};
`;

const ArrowDown = styled.img`
  margin-left: auto;
`;

const Picker = styled(PassengerAndClassPicker)`
  position: absolute;
  top: 100%;
  left: 0;
`;

const PickerWithOutside = withClickOutside()(Picker);

const data = {
  passengerCount: {
    adults: 1,
    kids: 0,
    babies: 0,
  },
  isBusinessClass: false,
};

function countPassengers(passengers) {
  return sum(Object.values(passengers));
}

export default class extends React.Component {
  state = { ...data, isPickerShown: false };

  onChange = ({ passengerCount, isBusinessClass }) => {
    this.setState({ passengerCount, isBusinessClass });
  };

  showPicker = () => {
    this.setState({ isPickerShown: true });
  };

  hidePicker = () => {
    this.setState({ isPickerShown: false });
  };

  render() {
    const { passengerCount, isBusinessClass, isPickerShown } = this.state;
    return (
      <PassengerAndClass onClick={this.showPicker}>
        <Passenger>{countPassengers(passengerCount)} пассажир,&nbsp;</Passenger>
        <FlightClass>{isBusinessClass ? 'бизнес' : 'эконом'}</FlightClass>
        <ArrowDown src={arrowDown} alt="Arrow" />
        {isPickerShown && (
          <PickerWithOutside
            onClickOutside={this.hidePicker}
            passengerCount={passengerCount}
            isBusinessClass={isBusinessClass}
            onChange={this.onChange}
          />
        )}
      </PassengerAndClass>
    );
  }
}
