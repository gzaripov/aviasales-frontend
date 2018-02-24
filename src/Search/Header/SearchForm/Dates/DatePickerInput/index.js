import React, { Component } from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import Toggle from "./Toggle";
import ruLocale from "date-fns/locale/ru";
import { format } from "date-fns";
import { withClickOutside } from "react-clickoutside";
import "react-day-picker/lib/style.css";
import "./datepicker.css";

const DateSelect = styled.div``;

const Input = styled.input`
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  cursor: inherit;

  ::placeholder {
    color: #a0b0b9;
  }
`;

const Picker = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const ToggleContainer = styled.div`
  cursor: default;
  padding: 18px 26px;
`;

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const PickerWithOutside = withClickOutside()(Picker);

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const LABELS = {
  nextMonth: "следующий месяц",
  previousMonth: "предыдущий месяц"
};

const prices = {
  25: ["43 606"],
  26: ["43 606"],
  27: ["42 606"],
  28: ["41 387"]
};

function formatDate(date) {
  if (!date) return "";
  return format(new Date(date), "D MMMM, dd", { locale: ruLocale });
}

const DatePickerContainer = styled.div`
  background: white;
`;

export default class DatePicker extends Component {
  state = {
    date: "",
    isShown: this.props.isShown
  };

  show = () => this.setState({ isShown: true });

  hide = () => this.setState({ isShown: false });

  setDate = (date, { selected }) => {
    this.setState({
      date: selected ? undefined : date,
      isShown: false
    });
  };

  handleKeyDown = e => {
    if (e.key === "Tab") {
      this.hide();
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isShown: nextProps.isShown
    });
  }

  renderDay(day) {
    const date = day.getDate();

    const dateStyle = {
      fontSize: 16,
      fontWeight: 900,
      height: 20,
      width: 35
    };

    const priceStyle = {
      position: "absolute",
      fontSize: 10,
      fontWeight: 500,
      textAlign: "center",
      color: "#00C455"
    };

    const cellStyle = {};

    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {prices[date] &&
          prices[date].map((price, i) => (
            <div key={i} style={priceStyle}>
              {price}
            </div>
          ))}
      </div>
    );
  }

  render() {
    console.log("render");
    const isShown = this.state.isShown;
    return (
      <div>
        <DateSelect onClick={this.show}>
          <Input
            date
            type="text"
            onFocus={this.show}
            onKeyDown={this.handleKeyDown}
            value={formatDate(this.state.date)}
            placeholder={this.props.placeholder}
            readOnly
          />
        </DateSelect>
        {isShown && (
          <PickerWithOutside onClickOutside={this.hide}>
            <DatePickerContainer>
              <DayPicker
                selectedDays={[new Date(this.state.date)]}
                disabledDays={[{ after: new Date(this.state.date) }]}
                onDayClick={this.setDate}
                locale={"ru"}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                labels={LABELS}
                renderDay={this.renderDay}
              />
            </DatePickerContainer>
            <ToggleContainer>
              <Toggle label="Показать цены в одну сторону" />
            </ToggleContainer>
          </PickerWithOutside>
        )}
      </div>
    );
  }
}
