import React, { Component } from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import ruLocale from "date-fns/locale/ru";
import Button from "../Button";
import Cell from "./Cell";
import calendar from "./img/calendar.svg";
import { format, lastDayOfMonth, addDays } from "date-fns";
import { withClickOutside } from "react-clickoutside";
import "react-day-picker/lib/style.css";
import "./styled.css";

const DataPickerInput = styled.div`
  display: flex;
  flex: 1;
`;

const DateSelect = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px;
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};
`;

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
  z-index: 10;
  overflow: hidden;
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

const CalendarButton = styled(Button)`
  margin-left: auto;
`;

export default class DatePicker extends Component {
  state = {
    edge: this.props.edge
  };

  static defaultProps = {
    edge: "left",
    hide: () => {},
    show: () => {}
  };

  setDate = (date, { selected }) => {
    const period = this.props.period;
    if (this.state.edge === "left") {
      period.from = date;
    } else {
      period.to = date;
    }
    this.props.onDateChanged(period);
    this.props.hide();
  };

  handleKeyDown = e => {
    if (e.key === "Tab") {
      this.props.hide();
    }
  };

  renderDay(day) {
    const date = day.getDate();
    return <Cell date={date} price={prices[date]} />;
  }

  getDisabledDays() {
    const { from, to } = this.props.period;
    if (this.state.edge === "left") {
      return { before: new Date(), after: to };
    }
    return { before: from ? from : new Date() };
  }

  getInitaltMonth() {
    const { from, to } = this.props.period;
    if (this.state.edge === "left") {
      return from ? from : new Date();
    }
    if (to) {
      return to;
    }
    if (from) {
      return lastDayOfMonth(from) ? addDays(from, 2) : from;
    }
    return new Date();
  }

  render() {
    const { from, to } = this.props.period;
    const isShown = this.props.isShown;
    const { edge } = this.state;
    const modifiers = { start: from, end: to };
    const date = edge === "left" ? from : to;
    const formattedDate = formatDate(date);

    return (
      <DataPickerInput>
        <DateSelect onClick={this.props.show} disabled={this.props.disabled}>
          <Input
            date
            type="text"
            onFocus={this.props.show}
            onKeyDown={this.handleKeyDown}
            value={formattedDate}
            placeholder={this.props.placeholder}
            readOnly
          />
          <CalendarButton>
            <img src={calendar} alt="Calendar Icon" />
          </CalendarButton>
        </DateSelect>
        {isShown && (
          <PickerWithOutside onClickOutside={this.props.hide}>
            <DatePickerContainer>
              <DayPicker
                selectedDays={[from, { from, to }]}
                disabledDays={this.getDisabledDays()}
                onDayClick={(date, params) => this.setDate(date, params)}
                locale={"ru"}
                modifiers={modifiers}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                initialMonth={this.getInitaltMonth()}
                labels={LABELS}
                renderDay={day => this.renderDay(day)}
              />
            </DatePickerContainer>
            {this.props.children}
          </PickerWithOutside>
        )}
      </DataPickerInput>
    );
  }
}
