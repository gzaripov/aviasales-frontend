import React from "react";
import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import Logo from "./Logo";

const Header = styled.header`
  background: linear-gradient(#00b0de, #196ebd);
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
`;

const SearchBox = styled(SearchContainer)`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Content>
            <Logo />
            <SearchBox />
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
