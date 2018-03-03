import React from "react";
import media from "../../common/media";
import styled from "styled-components";
import MobileTicket from "./MobileTicket";
import TabletTicket from "./TabletTicket";

const MINUTES_IN_HOUR = 60;

const data = [
  {
    status: "cheapest",
    price: 7712,
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/russia.png"],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 5,
        suitcase: 15
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519430700
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519441500
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520073300
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097000
        },
        duration: 4 * MINUTES_IN_HOUR + 35,
        type: "Прямой"
      }
    }
  },
  {
    status: "fastest",
    price: 9269,
    agency: "Biletix",
    suggestions: [
      {
        agency: "Svyaznoy Travel",
        price: "9 275 ₽"
      },
      {
        agency: "Билетик Аэро",
        price: "9 587 ₽"
      },
      {
        agency: "Svyaznoy Travel",
        price: "9 275 ₽"
      },
      {
        agency: "Svyaznoy Travel",
        price: "9 275 ₽"
      }
    ],
    logos: ["/img/avia/fly.png"],
    isCharter: true,
    ticketsLeft: 4,
    shareLink: "/",
    baggage: {
      primary: {
        suitcase: 20
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519457400
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519465800
        },
        duration: 4 * MINUTES_IN_HOUR + 20,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520076000
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520098500
        },
        duration: 4 * MINUTES_IN_HOUR + 15,
        type: "CDG"
      }
    }
  },
  {
    status: "best",
    price: 8029,
    agency: "на Билетик Аэро",
    suggestions: [],
    logos: ["/img/avia/nordwind.png"],
    isCharter: false,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 5,
        suitcase: -1
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519431300
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519441800
        },
        duration: 4 * MINUTES_IN_HOUR + 55,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520073900
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097300
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      }
    }
  },
  {
    price: 8164,
    agency: "Aviakassa",
    suggestions: [],
    logos: ["/img/avia/nordwind-airlines.png"],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 5,
        suitcase: -1,
        verdict: "Нет багажа"
      },
      alternative: {
        handbag: 5,
        suitcase: 12,
        verdict: "- 136 ₽"
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519431300
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519441800
        },
        duration: 4 * MINUTES_IN_HOUR + 55,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520073900
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097300
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      }
    }
  },
  {
    price: 8240,
    agency: "Билетик Аэро",
    suggestions: [
      {
        agency: "Clickavia",
        price: "8 302 ₽"
      },
      {
        agency: "Aviakassa",
        price: "8 376 ₽"
      },
      {
        agency: "Aviakassa",
        price: "8 376 ₽"
      },
      {
        agency: "Svyaznoy Travel",
        price: "9 275 ₽"
      },
      {
        agency: "Aviakassa",
        price: "8 376 ₽"
      }
    ],
    logos: ["/img/avia/redwings.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 10,
        verdict: "Нет багажа"
      },
      alternative: {
        handbag: 10,
        suitcase: 20,
        verdict: "- 267 ₽"
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519455600
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519464600
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520074800
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097000
        },
        duration: 4 * MINUTES_IN_HOUR + 10,
        type: "Прямой"
      }
    }
  },
  {
    price: 9180,
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/redwings-logo.png", "/img/avia/russia-logo.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 10,
        suitcase: 15
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519430700
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1519441500
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520074800
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097000
        },
        duration: 4 * MINUTES_IN_HOUR + 10,
        type: "Прямой"
      }
    }
  },
  {
    price: 9485,
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/russia-logo.png", "/img/avia/blueairlines-logo.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        suitcase: 15
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          timestamp: 1519430700
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 15194415002
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          timestamp: 1520097080
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          timestamp: 1520097455
        },
        duration: 4 * MINUTES_IN_HOUR + 15,
        type: "Прямой"
      }
    }
  }
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
    {data.map((ticket, index) => (
      <Ticket key={index}>
        <MobileTicket data={ticket} />
        <TabletTicket data={ticket} />
      </Ticket>
    ))}
  </Tickets>
);
