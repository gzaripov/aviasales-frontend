import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import Button from '../../common/Button';
import aeroflot from './img/aeroflot.png';
import s7airlines from './img/s7airlines.png';
import one2trip from './img/one2trip.png';
import koreanAir from './img/korean-air.png';
import elevalen from './img/elevalen.png';
import arrowLeft from './img/arrow_left.svg';
import arrowRight from './img/arrow_right.svg';

const Slider = styled.div`
  padding: 28px 20px;
  padding-top: 0;
`;

const Title = styled.h3`
  color: #5c5c5c;
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  margin-bottom: 0;

  ${media.lg`
    margin-left: 0;
    margin-right: 0;
  `};
`;

const Vendors = styled.div`
  padding: 0 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  ${media.lg`
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Vendor = styled.img`
  margin-top: 24px;
  margin-bottom: 8px;

  ${media.lg`
    margin-left:10px; 
    margin-right:10px;
  `};
`;

const LeftButton = styled(Button)`
  position: absolute;
  left: 0;
  top: 48%;

  ${media.lg`
    left: -50px;
  `};
`;

const RightButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 48%;

  ${media.lg`
    right: -50px;
  `};
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => (props.active ? ' #818181' : 'rgba(0, 0, 0, 0)')};
  border: 1px solid #818181;
  border-radius: 20px;
  margin: 0 8px;
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export default () => (
  <section if='slider'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-lg-8 col-lg-offset-2 col-xl-10 col-xl-offset-1 hidden-xs hidden-sm'>
          <Slider>
            <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
            <Vendors>
              <Vendor src={aeroflot} />
              <Vendor src={s7airlines} />
              <Vendor src={one2trip} />
              <Vendor src={koreanAir} />
              <Vendor src={elevalen} />
              <LeftButton>
                <img src={arrowLeft} alt='left arrow' />
              </LeftButton>
              <RightButton>
                <img src={arrowRight} alt='right arrow' />
              </RightButton>
            </Vendors>
            <BottomNav>
              <Indicator active />
              <Indicator />
              <Indicator />
            </BottomNav>
          </Slider>
        </div>
      </div>
    </div>
  </section>
);
