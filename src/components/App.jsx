import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prev => ({ [evt.target.name]: prev[evt.target.name] + 1 }));
  };

  render() {
    const stats = Object.keys(this.state);
    console.log(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stats}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}
