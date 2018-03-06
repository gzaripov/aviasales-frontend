import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'react-day-picker/lib/style.css';
import media from '../media';
import Toggle from '../Toggle';
import DatePickerInput from '../DatePickerInput';

const FlightDate = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  cursor: default;
  padding: 18px 26px;
`;

const Departure = FlightDate.extend`
  margin-right: 2px;
  border-radius: 0;

  ${media.sm`
    border-radius: 0 0 0 4px;
  `};

  ${media.lg`
    border-radius: ${p => (p.type === 'main' ? '0' : '')};
  `};

  ${media.xl`
    border-radius: 0;
  `};
`;

const Dates = styled.div`
  display: flex;
  position: relative;
  overflow: visible;
  width: 100%;
  margin: 1px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.xl`
    width: calc(30% - 2px);
  `};
`;

class DatesComponent extends React.Component {
  static defaultProps = {
    className: '',
    location: {},
  };

  static propTypes = {
    className: PropTypes.string,
    location: PropTypes.shape({ pathname: PropTypes.string }),
  };

  state = {
    period: {
      from: '',
      to: '',
    },
    isLeftShown: false,
    isRightShown: false,
    isOneWay: false,
  };

  onDateSelected = (date, edge) => {
    const { from, to } = this.state.period;
    const period = {
      from: edge === 'left' ? date : from,
      to: edge === 'right' ? date : to,
    };
    this.setState({
      period,
      isRightShown: !this.state.isOneWay && !period.to,
    });
  };

  onToggleClicked = () => {
    const { from, to } = this.state.period;
    const checked = !this.state.isOneWay;
    this.setState({
      isOneWay: checked,
      period: {
        from,
        to: checked ? '' : to,
      },
    });
  };

  setInputVisibility(edge, visibility) {
    if (edge === 'left') {
      this.setState({ isLeftShown: visibility });
    } else if (!this.state.isOneWay) {
      this.setState({ isRightShown: visibility });
    }
  }

  render() {
    return (
      <Dates className={this.props.className}>
        <Departure type={this.props.location.pathname === '/' ? 'main' : 'search'}>
          <DatePickerInput
            placeholder='Туда'
            edge='left'
            onDateSelected={this.onDateSelected}
            period={this.state.period}
            isShown={this.state.isLeftShown}
            show={() => this.setInputVisibility('left', true)}
            hide={() => this.setInputVisibility('left', false)}
          >
            <ToggleContainer>
              <Toggle
                onToggleClicked={this.onToggleClicked}
                checked={this.state.isOneWay}
                label='Показать цены в одну сторону'
              />
            </ToggleContainer>
          </DatePickerInput>
        </Departure>
        <FlightDate>
          <DatePickerInput
            placeholder='Обратно'
            edge='right'
            onDateSelected={this.onDateSelected}
            period={this.state.period}
            isShown={this.state.isRightShown}
            disabled={this.state.isOneWay}
            show={() => this.setInputVisibility('right', true)}
            hide={() => this.setInputVisibility('right', false)}
          />
        </FlightDate>
      </Dates>
    );
  }
}

export default withRouter(DatesComponent);
