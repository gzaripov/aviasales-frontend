import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Toolbar from "./Toolbar";
import SearchForm from "./SearchForm";
import Logo from "./Logo";

const Currency = styled.p`
  border: 1px solid #ffffff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 6px 12px;
  color: white;
  margin-left: auto;

  ${media.sm`
    position: absolute;
    top: 6px;
    right: 0px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  `};
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
  position: relative;

  ${media.sm`
    padding-top: 80px;
    padding-bottom: 32px;
  `};
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row center-lg">
        <div className="col-xs-12">
          <Content>
            <Toolbar />
            <SearchForm />
            <Logo />
            <Currency>RUB</Currency>
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
