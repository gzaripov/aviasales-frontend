import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import twitter from './img/twitter.svg';
import facebook from './img/facebook.svg';
import vk from './img/vk.svg';
import rss from './img/rss.svg';
import imgTopBorder from './img/border-top.png';

const Subscribe = styled.section`
  background: url(${imgTopBorder}) no-repeat top center;
  padding-bottom: 60px;
  padding-top: 39px;
  display: none;

  ${media.md`
    display: block;
  `};

  ${media.lg`
    padding-bottom: 24px;
  `};
`;

const Suggestion = styled.p`
  margin-bottom: 20px;
  text-align: center;

  ${media.xl`
    margin-bottom: 0;
    text-align: left;
  `};
`;

const SuggestionTitle = styled.span`
  color: #5c5c5c;
  font-weight: 500;
`;

const Media = styled.div`
  margin-bottom: 30px;
  text-align: center;

  ${media.xl`
    margin-bottom: 0;
    text-align: left;
  `};
`;

const SocialMedia = styled.img`
  margin-right: 6px;
`;

const Join = styled.form`
  text-align: center;

  ${media.xl`
    text-align: right;
  `};
`;

const Input = styled.input`
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  color: #a0b0b9;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  max-width: 191x;
  padding: 7px;

  ${media.xl`
    margin-left: 16px;
  `};
`;

const Button = styled.button`
  color: white;
  background-color: #ff8e41;
  border: none;
  font-size: 16px;
  line-height: 20px;
  max-width: 139px;
  text-align: center;
  padding: 8px 20px;
`;

const MeidaAndJoin = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  ${media.xl`
    flex-direction: row;
  `};
`;

export default () => (
  <Subscribe id='subscribe'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-md-offset-3 col-xl-4 col-xl-offset-1'>
          <Suggestion>
            <SuggestionTitle>
              Хотите знать всё о скидках на авиабилеты?
            </SuggestionTitle>
            <br />
            Вы можете подписаться на нашу рассылку через соцсети или по
            электронной почте.
          </Suggestion>
        </div>
        <div className='col-md-6 col-md-offset-3 col-xl-6 col-xl-offset-1'>
          <MeidaAndJoin>
            <Media>
              <SocialMedia src={twitter} />
              <SocialMedia src={facebook} />
              <SocialMedia src={vk} />
              <SocialMedia src={rss} />
            </Media>

            <Join>
              <Input type='text' placeholder='Ваш email' />
              <Button>Подписаться</Button>
            </Join>
          </MeidaAndJoin>
        </div>
      </div>
    </div>
  </Subscribe>
);
