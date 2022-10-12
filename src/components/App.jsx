import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  render() {
    return (
      <div>
        <Section title="Please leave feedback"></Section>
      </div>
    );
  }
}
