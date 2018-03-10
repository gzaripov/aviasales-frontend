import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import CheckGroup from './CheckGroup';

const Agencies = styled(Filter)`
  padding: 0 0 16px 0;
`;

export default class extends React.Component {
  static defaultProps = {
    data: [],
    onChange: () => {},
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      price: PropTypes.number,
    })),
    onChange: PropTypes.func,
  };

  onChange = (checklist) => {
    this.props.onChange('agencies', checklist);
  };

  render() {
    const { data } = this.props;
    return (
      <Agencies title="Агенства">
        <CheckGroup checklist={data} onChange={this.onChange} />
      </Agencies>
    );
  }
}
