import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import MobileTicket from './MobileTicket';
import TabletTicket from './TabletTicket';

const data = [
  {
    id: 0,
    status: 'cheapest',
    price: 7712,
    agency: 'Clickavia',
    suggestions: [],
    logos: [{ id: 0, img: '/img/avia/russia.png' }],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: '/',
    baggage: {
      primary: {
        handbag: 5,
        suitcase: 15,
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519430700,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519441500,
        },
        duration: 5 * 60,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520073300,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097000,
        },
        duration: 275,
        type: 'Прямой',
      },
    },
  },
  {
    id: 1,
    status: 'fastest',
    price: 9269,
    agency: 'Biletix',
    suggestions: [
      {
        id: 0,
        agency: 'Svyaznoy Travel',
        price: '9 275 ₽',
      },
      {
        id: 1,
        agency: 'Билетик Аэро',
        price: '9 587 ₽',
      },
      {
        id: 2,
        agency: 'Svyaznoy Travel',
        price: '9 275 ₽',
      },
      {
        id: 3,
        agency: 'Svyaznoy Travel',
        price: '9 275 ₽',
      },
    ],
    logos: [{ id: 1, img: '/img/avia/fly.png' }],
    isCharter: true,
    ticketsLeft: 4,
    shareLink: '/',
    baggage: {
      primary: {
        suitcase: 20,
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519457400,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519465800,
        },
        duration: 260,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520076000,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520098500,
        },
        duration: 255,
        type: 'CDG',
      },
    },
  },
  {
    id: 2,
    status: 'best',
    price: 8029,
    agency: 'на Билетик Аэро',
    suggestions: [],
    logos: [{ id: 2, img: '/img/avia/nordwind.png' }],
    isCharter: false,
    shareLink: '/',
    baggage: {
      primary: {
        handbag: 5,
        noBaggage: true,
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519431300,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519441800,
        },
        duration: 295,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520073900,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097300,
        },
        duration: 270,
        type: 'Прямой',
      },
    },
  },
  {
    id: 3,
    price: 8164,
    agency: 'Aviakassa',
    suggestions: [],
    logos: [{ id: 4, img: '/img/avia/nordwind-airlines.png' }],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: '/',
    baggage: {
      primary: {
        handbag: 5,
        noBaggage: true,
        verdict: 'Нет багажа',
      },
      alternative: {
        handbag: 5,
        suitcase: 12,
        verdict: '- 136 ₽',
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519431300,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519441800,
        },
        duration: 295,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520073900,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097300,
        },
        duration: 270,
        type: 'Прямой',
      },
    },
  },
  {
    id: 4,
    price: 8240,
    agency: 'Билетик Аэро',
    suggestions: [
      {
        id: 4,
        agency: 'Clickavia',
        price: '8 302 ₽',
      },
      {
        id: 5,
        agency: 'Aviakassa',
        price: '8 376 ₽',
      },
      {
        id: 6,
        agency: 'Aviakassa',
        price: '8 376 ₽',
      },
      {
        id: 7,
        agency: 'Svyaznoy Travel',
        price: '9 275 ₽',
      },
      {
        id: 8,
        agency: 'Aviakassa',
        price: '8 376 ₽',
      },
    ],
    logos: [{ id: 5, img: '/img/avia/redwings.png' }],
    isCharter: true,
    ticketsLeft: null,
    shareLink: '/',
    baggage: {
      primary: {
        handbag: 10,
        verdict: 'Нет багажа',
      },
      alternative: {
        handbag: 10,
        suitcase: 20,
        verdict: '- 267 ₽',
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519455600,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519464600,
        },
        duration: 270,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520074800,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097000,
        },
        duration: 250,
        type: 'Прямой',
      },
    },
  },
  {
    id: 5,
    price: 9180,
    agency: 'Clickavia',
    suggestions: [],
    logos: [
      { id: 6, img: '/img/avia/redwings-logo.png' },
      { id: 7, img: '/img/avia/russia-logo.png' },
    ],
    isCharter: true,
    ticketsLeft: null,
    shareLink: '/',
    baggage: {
      primary: {
        handbag: 10,
        suitcase: 15,
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519430700,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1519441500,
        },
        duration: 300,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520074800,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097000,
        },
        duration: 250,
        type: 'Прямой',
      },
    },
  },
  {
    id: 6,
    price: 9485,
    agency: 'Clickavia',
    suggestions: [],
    logos: [
      { id: 8, img: '/img/avia/russia-logo.png' },
      { id: 9, img: '/img/avia/blueairlines-logo.png' },
    ],
    isCharter: true,
    ticketsLeft: null,
    shareLink: '/',
    baggage: {
      primary: {
        suitcase: 15,
      },
    },
    flight: {
      depart: {
        origin: {
          city: 'Москва',
          iata: 'VKO',
          timestamp: 1519430700,
        },
        dest: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 15194415002,
        },
        duration: 300,
        type: 'Прямой',
      },
      return: {
        origin: {
          city: 'Барселона',
          iata: 'BCN',
          timestamp: 1520097080,
        },
        dest: {
          city: 'Москва',
          iata: 'SVO',
          timestamp: 1520097455,
        },
        duration: 255,
        type: 'Прямой',
      },
    },
  },
];

const Tickets = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;

  ${media.sm`
    padding-bottom: 0;
  `};
`;

const Ticket = styled.div`
  margin-bottom: 8px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: #fff;

  ${media.sm`
    border-radius: 4px;
    overflow: hidden;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  `};
`;

export default () => (
  <Tickets>
    {data.map(ticket => (
      <Ticket key={ticket.id}>
        <MobileTicket data={ticket} />
        <TabletTicket data={ticket} />
      </Ticket>
    ))}
  </Tickets>
);
