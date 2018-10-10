import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import CheckGroup from './CheckGroup';

const Title = styled.h4`
  margin: 10px 0;
  padding: 0 16px;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-align: left;
`;

const Airlines = styled(Filter)`
  padding: 0 0 4px 0;
`;

const CheckGroupStyled = styled(CheckGroup)`
  padding-bottom: 12px;
`;

export default class extends React.Component {
  static defaultProps = {
    dirty: false,
    onChange: () => {},
    onClear: () => {},
    origin: {
      takeoff: [
        {
          id: 0,
          label: '',
          checked: false,
          price: 0,
        },
      ],
      landing: [
        {
          id: 0,
          label: '',
          checked: false,
          price: 0,
        },
      ],
    },
    dest: {
      takeoff: [
        {
          id: 0,
          label: '',
          checked: false,
          price: 0,
        },
      ],
      landing: [
        {
          id: 0,
          label: '',
          checked: false,
          price: 0,
        },
      ],
    },
  };

  static propTypes = {
    origin: PropTypes.shape({
      takeoff: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        price: PropTypes.number,
      })),
      landing: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        price: PropTypes.number,
      })),
    }),
    dest: PropTypes.shape({
      takeoff: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        price: PropTypes.number,
      })),
      landing: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        price: PropTypes.number,
      })),
    }),
    dirty: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  onChange = (path, value) => {
    this.props.onChange(path, value);
  };

  render() {
    const {
      origin, dest, dirty, onClear,
    } = this.props;
    return (
      <Airlines title="Аэропорты" dirty={dirty} onClear={onClear} initialOpened>
        <Title>Вылет из Москвы 14, мар</Title>
        <CheckGroupStyled
          checklist={origin.takeoff}
          onChange={checklist => this.onChange('origin.takeoff', checklist)}
        />
        <Title>Прибытие в Барселону, 14 мар</Title>
        <CheckGroupStyled
          checklist={dest.landing}
          onChange={checklist => this.onChange('dest.landing', checklist)}
        />
        <Title>Вылет из Барселоны, 21 мар</Title>
        <CheckGroupStyled
          checklist={dest.takeoff}
          onChange={checklist => this.onChange('dest.takeoff', checklist)}
        />
        <Title>Прибытие в Москву, 21 мар</Title>
        <CheckGroupStyled
          checklist={origin.landing}
          onChange={checklist => this.onChange('origin.landing', checklist)}
        />
      </Airlines>
    );
  }
}
