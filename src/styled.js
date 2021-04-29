import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 5vh;
  list-style: none;
  padding: 0;
  & > li {
    width: 25%;
    text-align: center;
    border-right: 1px solid grey;
    & > a {
      text-decoration: none;
      color: black;
    }
  }
  & > li:last-of-type {
    border-right: 0px solid grey;
  }
`;
