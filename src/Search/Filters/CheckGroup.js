import React from 'react';
import PropTypes from 'prop-types';
import findIndex from 'lodash/findIndex';
import Checkbox from './Checkbox';

function areAllChecksChecked(checklist) {
  return checklist.reduce((acc, check) => acc && check.checked, true);
}

function checkAllChecks(checklist, checked) {
  return checklist.map(check => ({ ...check, checked }));
}

function toggleCheckById(checklist, id) {
  const index = findIndex(checklist, { id });
  const checked = !checklist[index].checked;
  checklist.splice(index, 1, { ...checklist[index], checked });
  return checklist;
}

class CheckGroup extends React.Component {
  static defaultProps = {
    checklist: [],
    onChange: () => {},
  };

  static propTypes = {
    checklist: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      price: PropTypes.number,
    })),
    onChange: PropTypes.func,
  };

  onCheckAll = () => {
    const { checklist, onChange } = this.props;
    const allChecksChecked = !areAllChecksChecked(checklist);
    onChange(checkAllChecks(checklist, allChecksChecked));
  };

  onCheckChanged = (id) => {
    const { checklist, onChange } = this.props;
    onChange(toggleCheckById(checklist, id));
  };

  render() {
    const { checklist } = this.props;
    return (
      <div>
        <Checkbox label="Все" onChange={this.onCheckAll} checked={areAllChecksChecked(checklist)} />
        {checklist.map(check => (
          <Checkbox {...check} onChange={() => this.onCheckChanged(check.id)} />
        ))}
      </div>
    );
  }
}

export default CheckGroup;
