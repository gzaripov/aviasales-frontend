import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import Heading from './Heading';
import Logo from './Logo';
import SearchForm from './SearchForm';
import SearchButton from './SearchButton';

const Header = styled.header`
  background: linear-gradient(#00b0de, #196ebd);
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
`;

const SearchBox = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${media.md`
    padding: 0 54px;
  `};

  ${media.lg`
    padding: 0;
  `};
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Content>
            <Logo />
            <SearchBox>
              <Heading />
              <SearchForm />
              <SearchButton />
            </SearchBox>
          </Content>
        </div>
      </div>
    </div>
  </Header>
);
