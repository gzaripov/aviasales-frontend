import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Logo from "./Logo";
import SearchFlightForm from "./SearchFlightForm";
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
            <SearchBox>
              <StyledTitle />
              <SearchFlightForm />
              <SearchButton />
            </SearchBox>
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
