import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './statistics.module.css';

export const Statistics = ({ arrayStatistics }) => {
  return (
    <ul className={css.statisticList}>
      {arrayStatistics.map(e => {
        return (
          <li key={nanoid(4)} className={css.statisticItem}>
            {Object.keys(e)}: {Object.values(e)}
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  arrayStatistics: PropTypes.array.isRequired,
};
