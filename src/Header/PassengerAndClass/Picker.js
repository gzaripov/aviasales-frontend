import React from 'react';
import styled from 'styled-components';
import Counter from '../../common/ui/Counter/index';
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
  passengerCount, isBusinessClass, onChangeCounter, className, disabled,
}) => (
  <PickerStyled className={className}>
    <PassengerCounter>
      <Text>Взрослые</Text>
      <Counter
        disabled={disabled}
        max={9}
        onChangeCounter={onChangeCounter}
        value={passengerCount.adults}
      />
    </PassengerCounter>
    <PassengerCounter>
      <Text>Дети до 12 лет</Text>
      <Counter
        disabled={disabled}
        max={9}
        onChangeCounter={onChangeCounter}
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
        max={1}
        onChangeCounter={onChangeCounter}
        value={passengerCount.babies}
      />
    </PassengerCounter>
    <BusinessClassCheck label="Бизнес-класс" />
  </PickerStyled>
);
export default Picker;
