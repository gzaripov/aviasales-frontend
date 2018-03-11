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

const ClearFilter = styled(Button)`
  display: none;
  position: absolute;
  top: 12px;
  right: 16px;
`;

const HeaderStyled = styled.h2`
  margin: 0;

  &:hover {
    background: #f1fcff;
  }
`;

const StyledCollapse = styled(Collapse)`
  border-bottom: 1px solid #dddddd;
`;

const Header = ({ opened, title, amount }) => (
  <HeaderStyled>
    <ClearFilter>
      <img src={clear} alt="Clear filter" />
    </ClearFilter>
    <Title>
      <Arrow src={arrow} opened={opened} />
      {title}
      {amount !== 0 && <Amount>{amount}</Amount>}
    </Title>
  </HeaderStyled>
);

Header.defaultProps = {
  opened: false,
  amount: 0,
};

Header.propTypes = {
  opened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

class Filter extends React.Component {
  static defaultProps = {
    className: '',
    amount: 0,
    children: null,
    initialOpened: false,
  };

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    children: PropTypes.element,
    initialOpened: PropTypes.false,
  };

  state = {
    opened: this.props.initialOpened,
  };

  toggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    const {
      className, title, amount, children,
    } = this.props;
    const { opened } = this.state;
    return (
      <StyledCollapse onChange={this.toggle} defaultActiveKey={opened ? '1' : ''}>
        <Panel
          header={<Header opened={opened} title={title} amount={amount} />}
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
