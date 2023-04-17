import React from 'react';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  const colon = ':';
  return (
    <div className={css.statisticsBox}>
      <h3 className={css.statisticsTitle}>Statistics</h3>
      <ul className={css.statisticsList}>
        <li className={css.statisticsElement}>
          good{colon} {good}
        </li>
        <li className={css.statisticsElement}>
          neutral{colon} {neutral}
        </li>
        <li className={css.statisticsElement}>
          bad{colon} {bad}
        </li>
        <li className={css.statisticsElement}>
          total{colon} {countTotalFeedback()}
        </li>
        {countPositiveFeedbackPercentage() ? (
          <li className={css.statisticsElement}>
            positive percentage{colon}{' '}
            {Math.round(countPositiveFeedbackPercentage())}%
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default Statistics;
