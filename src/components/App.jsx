import React from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

export class App extends React.Component {

    static defaultProps = {
        goodValue: 0,
        neutralValue: 0,
        badValue: 0
    }
    
  // static propTypes = { 
  //   goodValue: PropTypes.number.isRequired,
  //   neutralValue: PropTypes.number.isRequired,
  //   badValue: PropTypes.number.isRequired,
  //   }
    
   state = {
        good: this.props.goodValue,
        neutral: this.props.neutralValue,
        bad: this.props.badValue
    };

     onLeaveFeedback = option => {
       this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return (good / total) * 100;
  };
  
  render() {
    
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();

      return (
        <>
         <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
          </Section>

          <Section title="Statistics">
             {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
           )}
           </Section>
        </>
        )
}
}