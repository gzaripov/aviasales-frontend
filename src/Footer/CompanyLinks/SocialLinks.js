import React from "react";
import media from "../../common/media";
import styled from "styled-components";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import viber from "./icons/viber.svg";
import vk from "./icons/vk.svg";

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  flex-basis: 33%;
  min-width: 33%;
  margin-bottom: 12px;
  font-size: 12px;
  color: #4a4a4a;
  line-height: 1;

  ${media.sm`
    flex-basis: initial;
    min-width: initial;
    margin-right: 28px;
  `};
`;

const SocialIcon = styled.img`
  margin-right: 6px;
`;

export default () => (
  <SocialLinks>
    <SocialLink>
      <SocialIcon src={vk} alt="Vk icon" />
      Вконтакте
    </SocialLink>
    <SocialLink>
      <SocialIcon src={facebook} alt="Facebook icon" />
      Фейсбук
    </SocialLink>
    <SocialLink>
      <SocialIcon src={instagram} alt="Instagram icon" />
      Инстаграм
    </SocialLink>
    <SocialLink>
      <SocialIcon src={twitter} alt="Twitter icon" />
      Твиттер
    </SocialLink>
    <SocialLink>
      <SocialIcon src={viber} alt="Viber icon" />
      Вайбер
    </SocialLink>
  </SocialLinks>
);
