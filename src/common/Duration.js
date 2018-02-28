import React from "react";

const MINUTES_IN_HOUR = 60;

function formatDuration(duration) {
  const hours = (duration / MINUTES_IN_HOUR) ^ 0;
  const minutes = duration % MINUTES_IN_HOUR;
  const formattedHours = hours ? `${hours} ч ` : "";
  const formattedMins = minutes ? `${minutes} мин` : "";
  return formattedHours + formattedMins;
}

export default props => (
  <span className={props.className}>{formatDuration(props.duration)}</span>
);
