import React from 'react';
import { Link } from 'react-router-dom';
import { testsData } from '../../components/test/testConstant';
export default function () {
  return (
    <ul>
      {testsData.map((elem) => (
        <li key={elem.id}>
          <Link to={`test/${elem.id}`}>Тест № {elem.id + 1}</Link>
        </li>
      ))}
    </ul>
  );
}
