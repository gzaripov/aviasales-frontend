import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function areAllChecked(checklist) {
  return checklist.reduce((acc, check) => acc && check.checked, true);
}

function checkAll(checklist, checked) {
  return checklist.map(check => ({ ...check, checked }));
}

function toggleCheckById(checklist, id) {
  return checklist.map(check => (check.id === id ? { ...check, checked: !check.checked } : check));
}

class CheckGroup extends React.Component {
  static defaultProps = {
    checklist: [],
    onChange: () => {},
    className: '',
  };

  static propTypes = {
    checklist: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      price: PropTypes.number,
    })),
    onChange: PropTypes.func,
    className: PropTypes.string,
  };

  onCheckAll = () => {
    const { checklist, onChange } = this.props;
    const allChecksChecked = !areAllChecked(checklist);

    onChange(checkAll(checklist, allChecksChecked));
  };

  onCheckChanged = (id) => {
    const { checklist, onChange } = this.props;

    onChange(toggleCheckById(checklist, id));
  };

  render() {
    const { checklist, className } = this.props;
    return (
      <div className={className}>
        {checklist.length > 1 && (
          <Checkbox label="Все" onChange={this.onCheckAll} checked={areAllChecked(checklist)} />
        )}
        {checklist.map(check => (
          <Checkbox {...check} key={check.id} onChange={() => this.onCheckChanged(check.id)} />
        ))}
      </div>
    );
  }
}

export default CheckGroup;
