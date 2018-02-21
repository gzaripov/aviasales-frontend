import React from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar";

const Currency = styled.p`
  border: 1px solid #ffffff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 6px 12px;
  color: white;
  margin-left: auto;
`;

const Header = styled.header`
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Content>
            <Toolbar />
            <Currency>RUB</Currency>
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
