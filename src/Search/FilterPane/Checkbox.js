import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Check = styled.input`
  height: 18px;
  width: 18px;
  margin-left: 0.5px;
`;

const Text = styled.span`
  line-height: 24px;
  font-size: 12px;
  margin-left: 6px;
  user-select: none;
`;

const Checkbox = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 4px 16px;
  font-size: 12px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    background: #f1fcff;
  }
`;

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
  user-select: none;
  margin-left: auto;
`;

export default class extends React.Component {
  static defaultProps = {
    price: '',
    checked: false,
    onChange: () => {},
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    price: PropTypes.number,
    onChange: PropTypes.func,
  };

  onCheckedChange = () => {
    const { checked, onChange } = this.props;
    onChange(!checked);
  };

  render() {
    const {
      id, label, checked, price,
    } = this.props;
    return (
      <Checkbox key={id} onClick={this.onCheckedChange}>
        <Check type="checkbox" checked={checked} />
        <Text>{label}</Text>
        {price && (
          <Price>
            <FormattedNumber
              value={price}
              style={['currency']}
              currency="RUB"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        )}
      </Checkbox>
    );
  }
}
