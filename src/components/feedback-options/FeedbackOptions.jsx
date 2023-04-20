import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './feedbackOptions.module.css';

export const FeedbackOption = ({ handleIcrement, arrayNamesState }) => {
  return (
    <div className={css.feedbackOption}>
      {arrayNamesState.map(name => {
        return (
          <button
            className={css.feedbackOptionBtn}
            key={nanoid(4)}
            name={name}
            type="button"
            onClick={handleIcrement}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOption.propTypes = {
  handleIcrement: PropTypes.func.isRequired,
  arrayNamesState: PropTypes.array.isRequired,
};
