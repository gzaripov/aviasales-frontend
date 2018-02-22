import React from "react";
import styled from "styled-components";
import Ticket from "./Ticket";

const ticketsData = [
  {
    status: "cheapest",
    price: "7 712 ₽",
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/russia.png"],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: "/",
    baggage: {
      primary: {
        hand: 5,
        bag: 15
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
        duration: "5 ч",
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
        duration: "4 ч 35 м",
        type: "Прямой"
      }
    }
  },
  {
    status: "fastest",
    price: "9 269 ₽",
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
        hand: "",
        bag: 20
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
        duration: "4 ч 20 м",
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
        duration: "4 ч 15 м",
        type: "CDG"
      }
    }
  },
  {
    status: "best",
    price: "8 029 ₽",
    agency: "на Билетик Аэро",
    suggestions: [],
    logos: ["/img/avia/nordwind.png"],
    isCharter: false,
    ticketsLeft: "",
    shareLink: "/",
    baggage: {
      primary: {
        hand: 5,
        bag: false
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
        duration: "4 ч 55 м",
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
        duration: "4 ч 30 м",
        type: "Прямой"
      }
    }
  },
  {
    status: "",
    price: "8 164 ₽",
    agency: "Aviakassa",
    suggestions: [],
    logos: ["/img/avia/nordwind-airlines.png"],
    isCharter: true,
    ticketsLeft: 0,
    shareLink: "/",
    baggage: {
      primary: {
        hand: 5,
        bag: 0,
        verdict: "Нет багажа"
      },
      alternative: {
        hand: 5,
        bag: 12,
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
        duration: "4 ч 55 м",
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
        duration: "4 ч 30 м",
        type: "Прямой"
      }
    }
  },
  {
    status: "",
    price: "8 240 ₽",
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
        hand: 10,
        bag: "",
        verdict: "Нет багажа"
      },
      alternative: {
        hand: 10,
        bag: 20,
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
        duration: "4 ч 30 м",
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
        duration: "4 ч 10 м",
        type: "Прямой"
      }
    }
  },
  {
    status: "",
    price: "9 180 ₽",
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/redwings-logo.png", "/img/avia/russia-logo.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        hand: 10,
        bag: 15
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
        duration: "5 ч",
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
        duration: "4 ч 10 м",
        type: "Прямой"
      }
    }
  },
  {
    status: "",
    price: "9 485 ₽",
    agency: "Clickavia",
    suggestions: [],
    logos: ["/img/avia/russia-logo.png", "/img/avia/blueairlines-logo.png"],
    isCharter: true,
    ticketsLeft: null,
    shareLink: "/",
    baggage: {
      primary: {
        hand: "",
        bag: 15
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
        duration: "5 ч",
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
        duration: "4 ч 15 м",
        type: "Прямой"
      }
    }
  }
];

const Tickets = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export default () => (
  <Tickets>
    {ticketsData.map((ticket, index) => <Ticket data={ticket} key={index} />)}
  </Tickets>
);
