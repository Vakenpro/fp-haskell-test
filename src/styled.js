import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  & > li {
    padding: 0 15px;
    text-align: center;
    & > a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 18px;
  margin: 0 30px;
  & > a {
    text-decoration: none;
    color: black;
  }
`;
