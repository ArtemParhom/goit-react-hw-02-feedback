import React from 'react';
import { Section } from './section/Section';
import css from './app.module.css';
export const App = () => {
  return (
    <div className={css.homeworkBox}>
      <h1 className={css.homeworkTitle}>React homework template</h1>
      <Section title={'Please leave feedback'} />
    </div>
  );
};
