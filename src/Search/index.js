import React, { Component } from "react";
import styled from "styled-components";
import media from "../common/media";
import Header from "./Header";
import Tickets from "./Tickets";
import Button from "../common/Button";

const Search = styled.section`
  background-color: #eaeaea;
`;

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

  ${media.sm`
      display: none;
  `};
`;

const ScrollToTopButton = styled(Button)`
  position: fixed;
  top: 16px;
  left: 50%;
  padding: 6px 16px;
  transform: ${props =>
    props.shown ? "translateX(-50%);" : "translate(-50%, -50px);"};
  opacity: ${props => (props.shown ? "0.5;" : "0")};
  transition: all 200ms ease-in-out;
  font-weight: 900;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #00ace2;
  mix-blend-mode: normal;
  border-radius: 100px;

  ${media.sm`
      display: none;
  `};
`;

class ScrollToTop extends Component {
  state = {
    isShown: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const triggerHeight = window.innerWidth / 2;
    const isShown = this.state.isShown;
    if (isShown && top < triggerHeight) {
      this.setState({ isShown: false });
    } else if (!isShown && top > triggerHeight) {
      this.setState({ isShown: true });
    }
  };

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    const isShown = this.state.isShown;
    return (
      <ScrollToTopButton shown={isShown} onClick={this.scrollTop}>
        наверх
      </ScrollToTopButton>
    );
  }
}

export default () => (
  <Search>
    <ScrollToTop />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Tickets />
        </div>
      </div>
    </div>
    <FilterButton>Фильтровать</FilterButton>
  </Search>
);
