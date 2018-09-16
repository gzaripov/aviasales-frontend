import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import CheckGroup from './CheckGroup';
import Checkbox from './Checkbox';

const Text = styled.p`
  margin-top: 12px;
  margin-bottom: 8px;
  padding: 0 16px;
  text-align: left;
  line-height: 16px;
  font-size: 12px;
  padding-right: 24px;
`;

const Title = styled.h4`
  margin: 16px 0;
  padding: 0 16px;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-align: left;
`;

const AirlinesStyled = styled(Filter)`
  padding: 0 0 16px 0;
`;

const Airlines = ({
  severalAirlines, alliances, airlines, onChange, dirty, onClear,
}) => (
  <AirlinesStyled title="Авиакомпании" dirty={dirty} onClear={onClear} initialOpened>
    <Checkbox
      label="Несколько авиакомпаний"
      checked={severalAirlines}
      onChange={checked => onChange('severalAirlines', checked)}
    />
    <Text>
      Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
    </Text>
    <Title>Альянсы</Title>
    <CheckGroup checklist={alliances} onChange={checklist => onChange('alliances', checklist)} />
    <Title>Авиакомпании</Title>
    <CheckGroup checklist={airlines} onChange={checklist => onChange('airlines', checklist)} />
  </AirlinesStyled>
);

Airlines.defaultProps = {
  severalAirlines: false,
  alliances: [],
  airlines: [],
  dirty: false,
  onChange: () => {},
  onClear: () => {},
};

Airlines.propTypes = {
  severalAirlines: PropTypes.bool,
  alliances: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    price: PropTypes.number,
  })),
  airlines: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    price: PropTypes.number,
  })),
  dirty: PropTypes.bool,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

export default Airlines;
