import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Counter from '../../common/ui/Counter';
import Checkbox from '../../common/ui/Checkbox';

const PickerStyled = styled.div`
  padding: 16px;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
`;

const PassengerCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 24px;
  }
`;

const Text = styled.span`
  display: block;
  margin-right: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  white-space: nowrap;
`;

const SecondaryText = styled.span`
  font-size: 12px;
  line-height: 18px;
  margin-top: 2px;
  margin-right: auto;
  color: #a0b0b9;
  white-space: nowrap;
`;

const BusinessClassCheck = styled(Checkbox)`
  padding-top: 14px;
  border-top: 1px solid #dbdbdb;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Picker = ({
  passengerCount,
  isBusinessClass,
  onPassengerChange,
  onClassChange,
  className,
  disabled,
}) => (
  <PickerStyled className={className}>
    <PassengerCounter>
      <Text>Взрослые</Text>
      <Counter
        disabled={disabled}
        max={9}
        onChange={onPassengerChange('adults')}
        value={passengerCount.adults}
      />
    </PassengerCounter>
    <PassengerCounter>
      <Text>Дети до 12 лет</Text>
      <Counter
        disabled={disabled}
        max={9}
        onChange={onPassengerChange('kids')}
        value={passengerCount.kids}
      />
    </PassengerCounter>
    <PassengerCounter>
      <Info>
        <Text>Дети до 2 лет</Text>
        <SecondaryText>Без места</SecondaryText>
      </Info>
      <Counter
        disabled={disabled}
        max={passengerCount.adults}
        onChange={onPassengerChange('babies')}
        value={passengerCount.babies}
      />
    </PassengerCounter>
    <BusinessClassCheck label="Бизнес-класс" onChange={onClassChange} checked={isBusinessClass} />
  </PickerStyled>
);

Picker.defaultProps = {
  passengerCount: 1,
  isBusinessClass: false,
  onPassengerChange: () => {},
  onClassChange: () => {},
  className: '',
  disabled: false,
};

Picker.propTypes = {
  passengerCount: PropTypes.number,
  isBusinessClass: PropTypes.number,
  onPassengerChange: PropTypes.func,
  onClassChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Picker;
