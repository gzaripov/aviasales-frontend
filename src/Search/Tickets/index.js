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
          time: "00:05",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "03:05",
          date: "24 фев 2018, Сб"
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "10:35",
          date: "3 мар 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:10",
          date: "3 мар 2018, Сб"
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
        handbag: "",
        suitcase: 20
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          time: "07:30",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "09:50",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 20,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "11:20",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:35",
          date: "24 фев 2018, Сб"
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
    ticketsLeft: "",
    shareLink: "/",
    baggage: {
      primary: {
        handbag: 5,
        suitcase: false
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          time: "00:15",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "03:10",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 55,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "10:45",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:15",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      }
    }
  },
  {
    status: "",
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
        suitcase: false,
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
          time: "00:15",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "03:10",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 55,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "10:45",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:15",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      }
    }
  },
  {
    status: "",
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
        suitcase: "",
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
          time: "07:00",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "09:30",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 30,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "11:00",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:10",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 10,
        type: "Прямой"
      }
    }
  },
  {
    status: "",
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
          time: "00:05",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "03:05",
          date: "24 фев 2018, Сб"
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "11:00",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:10",
          date: "24 фев 2018, Сб"
        },
        duration: 4 * MINUTES_IN_HOUR + 10,
        type: "Прямой"
      }
    }
  },
  {
    status: "",
    price: 9485,
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/russia-logo.png", "/img/avia/blueairlines-logo.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        handbag: "",
        suitcase: 15
      }
    },
    flight: {
      depart: {
        origin: {
          city: "Москва",
          iata: "VKO",
          time: "00:05",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Барселона",
          iata: "BCN",
          time: "03:05",
          date: "24 фев 2018, Сб"
        },
        duration: 5 * MINUTES_IN_HOUR,
        type: "Прямой"
      },
      return: {
        origin: {
          city: "Барселона",
          iata: "BCN",
          time: "11:20",
          date: "24 фев 2018, Сб"
        },
        dest: {
          city: "Москва",
          iata: "SVO",
          time: "17:35",
          date: "24 фев 2018, Сб"
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
