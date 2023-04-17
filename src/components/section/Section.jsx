import FeedbackOptions from 'components/feedback-options/FeedbackOptions';
import React from 'react';
import css from './section.module.css';

export const Section = ({ title }) => {
  return (
    <div className={css.sectionBox}>
      <h2 className={css.sectionTitle}>{title}</h2>
      <FeedbackOptions />
    </div>
  );
};
