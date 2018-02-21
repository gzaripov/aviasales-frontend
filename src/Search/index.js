import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Tickets from "./Tickets";
import Button from "../common/Button";

const Search = styled.section``;

const FilterButton = styled(Button)`
  position: fixed;
  background: #00ace2;
  border-radius: 100px;
  bottom: 16px;
  left: 50%;
  padding: 10px 24px;
  transform: translateX(-50%);
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  text-transform: uppercase;
`;

const ScrollToTopButton = styled(Button)`
  position: fixed;
  top: 64px;
  left: 50%;
  padding: 6px 16px;
  transform: translateX(-50%);
  transition-duration: 600ms;
  transition-property: transform;
  font-weight: 900;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #00ace2;
  opacity: 0.5;
  mix-blend-mode: normal;
  border-radius: 100px;
`;

class ScrollToTop extends React.Component {
  //TODO: show/hide depending on scrollHeight
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <ScrollToTopButton onClick={this.scrollTop}>наверх</ScrollToTopButton>
    );
  }
}

export default () => (
  <Search>
    <ScrollToTop />
    <Header />
    <Tickets />
    <FilterButton>Фильтровать</FilterButton>
  </Search>
);
