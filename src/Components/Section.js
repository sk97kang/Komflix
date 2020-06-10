import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  /* SCROLL */

  /* 스크롤바의 width */
  ::-webkit-scrollbar {
    width: 20px;
    height: 12px;
  }

  /* 스크롤바의 전체 배경색 */
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  /* 스크롤바 색 */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  /* 위 아래 버튼 (버튼 없애기를 함) */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Section;
