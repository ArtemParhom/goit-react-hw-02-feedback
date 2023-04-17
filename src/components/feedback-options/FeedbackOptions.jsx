import { Notification } from 'components/notification/Notification';
import Statistics from 'components/statistics/Statistics';
import React from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClickInc = () => {
    return this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralClickInc = () => {
    return this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badClickInc = () => {
    return this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div className={css.buttonsBox}>
        <div className={css.buttons}>
          <button className={css.buttonBtn} onClick={this.goodClickInc}>
            good
          </button>
          <button className={css.buttonBtn} onClick={this.neutralClickInc}>
            neutral
          </button>
          <button className={css.buttonBtn} onClick={this.badClickInc}>
            bad
          </button>
        </div>
        <div>
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <Notification />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          )}
        </div>
      </div>
    );
  }
}
export default FeedbackOptions;
