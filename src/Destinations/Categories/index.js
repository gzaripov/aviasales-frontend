import React from "react";
import styled from "styled-components";
import Category from "./Category";
import media from "../../common/media";
import world from "./icons/world.svg";
import sun from "./icons/sun.svg";
import shopping from "./icons/shopping.svg";
import culture from "./icons/culture.svg";
import nightStyle from "./icons/night_style.svg";
import rest from "./icons/rest_kids.svg";

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  @media screen and (min-width: ${media.md}) {
    margin-top: 56px;
    justify-content: space-around;
  }
`;

export default () => (
  <div className="row">
    <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <Categories>
        <Category imageUrl={world} text="куда угодно" />
        <Category imageUrl={sun} text="солнце и море" />
        <Category imageUrl={shopping} text="шоппинг, город" />
        <Category imageUrl={culture} text="культура и история" />
        <Category imageUrl={nightStyle} text="ночная жизнь" />
        <Category imageUrl={rest} text="отдых с детьми" />
      </Categories>
    </div>
  </div>
);
