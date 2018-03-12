import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Downshift from 'downshift';
import Highlighter from 'react-highlight-words';
import Field from './Field';
import airports from './airports.mock.json';

const AirpotsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const City = styled(Highlighter)`
  font-size: 14px;
  overflow: hidden;
  max-width: 105px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4a4a4a;
  transition: color 0.3s;
`;

const Country = styled.span`
  margin-right: 12px;
  font-size: 14px;
  max-width: 105px;
  white-space: nowrap;
  color: #a0b0b9;
  transition: color 0.3s;
`;

const Iata = styled.span`
  font-size: 12px;
  margin-left: auto;
  color: #a0b0b9;
  transition: color 0.3s;
`;

const Comma = styled.span`
  color: #4a4a4a;
  font-size: 14px;
  transition: color 0.3s;
`;

const DropDownCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;  
  cursor: pointer;  
  background-color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #20a6cb;
    ${City},
    ${Country},
    ${Comma},
    ${Iata} {
      color: white;
    }
  }

  &:nth-child(even) {
    background-color: #f4f4f4;
    &:hover {
      background-color: #20a6cb;
    }
  }

  ${props =>
    props.select &&
    css`
      background-color: #20a6cb;
      ${City},
      ${Country},
      ${Comma},
      ${Iata} {
        color: white;
      }
  `};
`;

const HighlighedText = styled.span`
  font-weight: bold;
`;

const Airport = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Autocomplete = styled.div`
  position: relative;
  border-radius: inherit;
`;

const filterContent = (city, searchWord) => city === searchWord || city.includes(searchWord);

const AutocompleteField = props => (
  <Downshift
    onChange={selection => props.handleSelection(selection)}
    itemToString={i => (i !== null ? i.city : '')}
    render={({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex,
      getRootProps,
    }) => (
      <Autocomplete {...getRootProps({ refKey: 'innerRef' })}>
        <Field
          placeholder={props.placeholder}
          {...getInputProps({
            onChange: event => props.onChange(event.target.value),
            value: props.value,
            className: props.className,
            children: props.children,
          })}
        />
        {isOpen &&
          props.value !== '' && (
            <AirpotsDropdown>
              {airports
                .filter(airport => filterContent(airport.city, inputValue))
                .slice(0, 6)
                .map((airport, index) => (
                  <DropDownCity
                    key={airport.iata}
                    select={highlightedIndex === index}
                    {...getItemProps({
                      item: airport,
                      index,
                    })}
                  >
                    <Airport>
                      <City
                        searchWords={[props.value]}
                        autoEscape
                        textToHighlight={airport.city}
                        highlightTag={HighlighedText}
                      />
                      <Comma>,&nbsp;</Comma>
                      <Country>{airport.country}</Country>
                      <Iata>{airport.iata}</Iata>
                    </Airport>
                  </DropDownCity>
                ))}
            </AirpotsDropdown>
          )}
      </Autocomplete>
    )}
  />
);

AutocompleteField.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.element,
  handleSelection: PropTypes.func,
  onChange: PropTypes.func,
};

AutocompleteField.defaultProps = {
  value: '',
  className: '',
  placeholder: '',
  children: null,
  handleSelection: () => {},
  onChange: () => {},
};

export default AutocompleteField;
