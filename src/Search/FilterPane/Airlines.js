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

const Airlines = styled(Filter)`
  padding: 0 0 16px 0;
`;

export default class extends React.Component {
  static defaultProps = {
    severalAirlines: false,
    alliances: [],
    airlines: [],
    onChange: () => {},
  };

  static propTypes = {
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
    onChange: PropTypes.func,
  };

  onChange = (path, value) => {
    this.props.onChange(`airlines.${path}`, value);
  };

  render() {
    const { severalAirlines, alliances, airlines } = this.props;
    return (
      <Airlines title="Авиакомпании" initialOpened>
        <Checkbox
          label="Несколько авиакомпаний"
          checked={severalAirlines}
          onChange={checked => this.onChange('severalAirlines', checked)}
        />
        <Text>
          Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
        </Text>
        <Title>Альянсы</Title>
        <CheckGroup
          checklist={alliances}
          onChange={checklist => this.onChange('alliances', checklist)}
        />
        <Title>Авиакомпании</Title>
        <CheckGroup
          checklist={airlines}
          onChange={checklist => this.onChange('airlines', checklist)}
        />
      </Airlines>
    );
  }
}
