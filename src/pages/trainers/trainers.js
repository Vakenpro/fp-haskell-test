import React from 'react';
import { Link } from 'react-router-dom';
import { trainersData } from '../../components/trainer/trainerConstant';
export default function () {
  return (
    <ul>
      {trainersData.map((elem) => (
        <li key={elem.id}>
          <Link to={`trainer/${elem.id}`}>Тренажер № {elem.id + 1}</Link>
        </li>
      ))}
    </ul>
  );
}
