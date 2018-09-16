import { css } from 'styled-components';

const sizes = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
