import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #d6d9da;
  border-radius: 50px;
  background-color: #ffffff;
`;

const Line = styled.div`
  height: 2px;
  border-radius: 2px;
  background-color: #00acde;
  position: relative;
`;

const SelectedLine = Line.extend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00acde;
`;

export default () => (
  <Line>
    <SelectedLine>
      <Dot onMouseDown={this.onMouseDown} />
      <Dot />
    </SelectedLine>
  </Line>
);
