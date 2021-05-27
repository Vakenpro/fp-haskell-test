import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`

`;

export const A = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin-bottom: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: #AFEEEE;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  &:hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: white;
    transform: translateY(-7px);
    border:none;
  }
`;

export const Button = styled.button`
  outline: 0 !important;
  background: none;
  font-weight: bold;
  border: 0;
  position: relative;
  margin-top: 11px;
  margin-left: 10px;
  & > a {
    padding: 25px 10px 25px;
    text-shadow: none;
    font-size:15px;
    font-weight: 700;
    color: black;
    text-decoration: none;
  }
  & > a::before, 
  & > a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: #566473;
    content: '';
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    transform: scale(0.85);
  }
  & > a::after {
    opacity: 0;
    -webkit-transition: top 0.3s, opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: top 0.3s, opacity 0.3s, -moz-transform 0.3s;
    transition: top 0.3s, opacity 0.3s, transform 0.3s;
  }
  & > a:hover::before,
  & > a:hover::after,
  & > a:focus::before,
  & > a:focus::after {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }
  & > a:hover::after,
  & > a:focus::after {
    top: 0%;
    opacity: 1;
  }
`;