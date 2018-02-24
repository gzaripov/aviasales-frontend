import React, { Component } from "react";
import styled from "styled-components";
import media from "../common/media";
import Header from "./Header";
import Tickets from "./Tickets";
import Button from "../common/Button";
import Filters from "./Filters";
import filter from "./filter.svg";

const Search = styled.section`
  background-color: #eaeaea;
`;

const MobileFilterButton = styled(Button)`
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

const TabletFilterButton = styled(Button)`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 17px 24px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background: #23a9f6;
  border-radius: 10px;

  ${media.sm`
    display: flex;
  `};

  ${media.lg`
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

const LoadMoreTickets = styled(Button)`
  width: 100%;
  text-align: center;
  display: hidden;
  background: #00acde;
  border-radius: 4px;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  padding: 18px 0;
  margin-bottom: 40px;
  text-transform: uppercase;

  ${media.sm`
    display: block;
  `};
`;

export default () => (
  <Search>
    <ScrollToTop />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <TabletFilterButton>
            <img src={filter} alt="Filter icon" />
          </TabletFilterButton>
        </div>
      </div>
      <div className="row">
        <div className="xs-hidden col-lg-4 col-xl-3">
          <Filters />
        </div>
        <div className="col-xs-12 col-lg-8 col-xl-7">
          <Tickets />
          <LoadMoreTickets>показать еще 10 билетов!</LoadMoreTickets>
        </div>
      </div>
    </div>
    <MobileFilterButton>Фильтровать</MobileFilterButton>
  </Search>
);
