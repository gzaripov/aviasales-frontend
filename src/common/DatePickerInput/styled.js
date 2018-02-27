import active from "./img/datapicker-active.svg";
import styled from "styled-components";

export const StyledDatePickerInput = styled.div`

  display: flex;
  flex: 1;    

  .DayPicker-Day--end, 
  .DayPicker-Day--start {
    z-index: 2;
  }

  .DayPicker-Day--start:after {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0px;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    background: url("${active}");
    background-color: #f4f4f4;
    background-size: 100% 100%;
    background-position: right center;
    background-repeat: no-repeat;
    box-shadow: -5px 0 0 0 white;
  }

   .DayPicker-Day--end:after {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0px;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    transform: rotate(180deg);
    background: url("${active}");
    background-color: #f4f4f4;
    background-size: 100% 100%;
    background-position: right center;
    background-repeat: no-repeat;
    box-shadow: -5px 0 0 0 white;
  }

  .DayPicker-Caption {
    text-align: center;
  }

  .DayPicker-NavButton--prev {
    left: 1.5rem;
  }

  .DayPicker-Day {
    padding: 11px 5px 11px;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    color: #4f4f4f;
    background-color: #f4f4f4;
    border-radius: 0px;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #b7dcfc;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
    border-radius: 0px;
  }
`;
