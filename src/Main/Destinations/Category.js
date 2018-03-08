import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../common/media';
import Button from '../../common/Button';

const Icon = styled.img`
  box-shadow: 0 4px 4px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
  padding: 13px;
`;

const Text = styled.span`
  max-width: 70px;
  margin-top: 12px;
  line-height: 20px;
  color: ${props => (props.active ? '#5C5C5C' : '#00ace2')};
  text-transform: uppercase;
  font-size: 12px;
`;

const CategoryStyled = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 16px;
  width: 33%;

  ${media.md`
    padding: 0;
    width: auto;
  `};
`;

const Underline = styled.hr`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 0 30px;
  margin-top: 2px;
  border-top: 1px solid #00ace2;
`;

const Category = props => (
  <CategoryStyled>
    <Icon src={props.imageUrl} alt="Category icon" />
    <Text active={props.active}>{props.text}</Text>
    <Underline active={props.active} />
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
