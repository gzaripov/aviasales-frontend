import React from 'react';
import PropTypes from 'prop-types';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  const formattedHours = hours ? `${hours} ч ` : '';
  const formattedMins = minutes ? `${minutes} мин` : '';
  return formattedHours + formattedMins;
}

const Duration = props => <span className={props.className}>{formatDuration(props.duration)}</span>;

Duration.defaultProps = {
  className: '',
  duration: 0,
};

Duration.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
};

export default Duration;
