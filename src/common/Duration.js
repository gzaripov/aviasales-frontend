import React from "react";

function formatDuration(duration) {
  const hours = (duration / 60) ^ 0;
  const minutes = duration % 60;
  const formattedHours = hours ? `${hours} ч ` : "";
  const formattedMins = minutes ? `${minutes} мин` : "";
  return formattedHours + formattedMins;
}

export default props => (
  <span className={props.className}>{formatDuration(props.duration)}</span>
);
