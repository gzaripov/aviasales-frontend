import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import SearchButton from "./SearchButton";

const Header = styled.header`
  background: linear-gradient(#00b0de, #196ebd);
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
`;

const StyledTitle = styled(Title)`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

const SearchBox = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Content>
            <Logo />
            <SearchBox>
              <StyledTitle />
              <SearchForm />
              <SearchButton />
            </SearchBox>
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
