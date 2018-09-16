import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../common/media';
import Button from '../../common/ui/Button';

const CategoryButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.selected ? '#5C5C5C' : '#00ace2')};
  transition: color 0.3s ease;

  :hover {
    color: ${props => (props.selected ? '#5C5C5C' : '#ff8b00;')};
  }
`;

const Text = styled.span`
  max-width: 70px;
  margin-top: 12px;
  line-height: 20px;
  color: ${props => (props.active ? '#5C5C5C' : '#00ace2')};
  text-transform: uppercase;
  font-size: 12px;
`;

const Icon = styled.img`
  box-shadow: 0 1px 4px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
  padding: 13px;
  transition: all 0.5s ease;
`;

const CategoryStyled = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 16px;
  width: 33%;

  ${CategoryButton}:hover & {
    transform: ${props => (CategoryButton.selected ? '' : 'translateY(-5px);')};
    box-shadow: 0 4px 4px rgba(74, 74, 74, 0.12);
  }

  ${media.md`
    width: auto;  
    padding: 0;
  `};
`;

const Underline = styled.hr`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 0 30px;
  margin-top: 2px;
  border-top: 1px solid #00ace2;
`;

const Category = props => (
  <CategoryStyled className={props.className}>
    <CategoryButton selected={props.selected}>
      <Icon src={props.imageUrl} alt="Category icon" />
      <Text>{props.text}</Text>
      <Underline selected={props.selected} />
    </CategoryButton>
  </CategoryStyled>
);

Category.defaultProps = {
  active: false,
};

Category.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Category;
