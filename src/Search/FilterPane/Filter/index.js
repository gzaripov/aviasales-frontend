import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapse, { Panel } from 'rc-collapse';
import Button from '../../../common/ui/Button';
import clear from './img/clear.svg';
import arrow from './img/arrow.svg';
import './index.css';

const Title = styled.p`
  position: relative;
  display: flex;
  padding: 16px;
  line-height: 18px;
  font-weight: 500;
  font-size: 12px;
  color: #5b5b5c;
  text-transform: uppercase;
  user-select: none;
`;

const Arrow = styled.img`
  margin-right: 8.5px;
  user-select: none;
  transition: transform 0.2s ease, -o-transform 0.2s ease;
  transform: ${props => (props.opened ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;

const Amount = styled.span``;

const FilterStyled = styled.div`
  position: relative;
  padding: 0 16px;
`;

const Clear = styled(Button)`
  display: flex;
  align-self: flex-start;
  margin: 14px 16px 0 auto;
`;

const HeaderStyled = styled.h2`
  display: flex;
  margin: 0;

  &:hover {
    background: #f1fcff;
  }
`;

const StyledCollapse = styled(Collapse)`
  border-bottom: 1px solid #dddddd;
`;

const Header = ({
  opened, title, amount, clearVisible, onClear,
}) => (
  <HeaderStyled>
    <Title>
      <Arrow src={arrow} opened={opened} />
      {title}
      {amount !== 0 && <Amount>{amount}</Amount>}
    </Title>
    {clearVisible && (
      <Clear onClick={onClear}>
        <img src={clear} alt="Clear filter" />
      </Clear>
    )}
  </HeaderStyled>
);

Header.defaultProps = {
  opened: false,
  amount: 0,
  clearVisible: false,
  onClear: () => {},
};

Header.propTypes = {
  opened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number,
  clearVisible: PropTypes.bool,
  onClear: PropTypes.func,
};

class Filter extends React.Component {
  static defaultProps = {
    className: '',
    amount: 0,
    children: null,
    initialOpened: false,
    dirty: false,
    onClear: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    children: PropTypes.node,
    initialOpened: PropTypes.bool,
    dirty: PropTypes.bool,
    onClear: PropTypes.func,
  };

  state = {
    opened: this.props.initialOpened,
  };

  onClear = (e) => {
    this.props.onClear();
    e.stopPropagation();
  };

  toggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    const {
      className, title, amount, children, dirty,
    } = this.props;
    const { opened } = this.state;
    return (
      <StyledCollapse onChange={this.toggle} defaultActiveKey={opened ? '1' : ''}>
        <Panel
          header={
            <Header
              opened={opened}
              title={title}
              amount={amount}
              clearVisible={dirty}
              onClear={this.onClear}
            />
          }
          showArrow={false}
          key="1"
        >
          <FilterStyled className={className}>{children}</FilterStyled>
        </Panel>
      </StyledCollapse>
    );
  }
}

export default Filter;
