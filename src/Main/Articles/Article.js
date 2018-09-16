import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../common/media';

const Title = styled.h3`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 0 0 10px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const ArticleStyled = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Text = styled.p`
  font-size: 14px;
  padding-top: 22px;

  ${media.md`
    padding-top: 16px;
  `};
`;

const Link = styled.a`
  font-size: 14px;
  color: #00ace2;
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
`;

const Article = props => (
  <ArticleStyled>
    <Heading>
      <div>
        <img src={props.data.icon} alt="Article icon" />
      </div>
      <Title>{props.data.title}</Title>
    </Heading>
    <Text>
      {props.data.text}
      <Link href="/">Подробнее</Link>
    </Text>
  </ArticleStyled>
);

Article.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
