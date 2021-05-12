import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background: white;
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