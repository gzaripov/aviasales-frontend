import React from "react";
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

const SocialLink = styled.span`
  font-size: 12px;
  color: #4a4a4a;
`;

const SocialIcon = styled.img`
  margin-right: 6px;
`;

export default () => (
  <SocialLinks>
    <SocialLink>
      <SocialIcon src={vk} alt="vk icon" />
      Вконтакте
    </SocialLink>
    <SocialLink>
      <SocialIcon src={facebook} alt="vk icon" />
      Фейсбук
    </SocialLink>
    <SocialLink>
      <SocialIcon src={instagram} alt="vk icon" />
      Инстаграм
    </SocialLink>
    <SocialLink>
      <SocialIcon src={twitter} alt="vk icon" />
      Твиттер
    </SocialLink>
    <SocialLink>
      <SocialIcon src={viber} alt="vk icon" />
      Вайбер
    </SocialLink>
  </SocialLinks>
);
