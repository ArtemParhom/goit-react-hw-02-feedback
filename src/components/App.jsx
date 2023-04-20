import React, { Component } from 'react';
import { FeedbackOption } from './feedback-options/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Statistics } from './statistics/Statistics';
import css from './app.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPercentages = () => {
    const { good, neutral, bad } = this.state;
    return (Math.round((good / (good + neutral + bad)) * 100) || 0) + `%`;
  };

  handleIcrement = event => {
    this.setState(oldState => {
      const { name } = event.target;
      const newState = { ...oldState };
      newState[name] = oldState[name] + 1;
      return newState;
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arrayNamesState = Object.keys(this.state);
    const arrayStatistics = [
      { good: good },
      { neutral: neutral },
      { bad: bad },
      { total: this.getTotal() },
      { percentages: this.getPercentages() },
    ];

    return (
      <div className={css.container}>
        <h2>Please leave feedback</h2>
        <FeedbackOption
          handleIcrement={this.handleIcrement}
          arrayNamesState={arrayNamesState}
        />
        <h2>Statistics</h2>
        {this.getTotal() === 0 ? (
          <Notification />
        ) : (
          <Statistics arrayStatistics={arrayStatistics} />
        )}
      </div>
    );
  }
}
export default App;
