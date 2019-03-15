/* eslint-disable no-ternary */
/* eslint-disable no-invalid-this */
/* eslint-disable no-magic-numbers */
import React, {Component} from 'react';

const TITLES = [
  'a solutions engineer.',
  'a rock climber.',
  'an enthusiastic learner.'
];

class Title extends Component {
  state = {titleIndex: 0,
           fadeIn: true};

  componentDidMount () {
    this.fadeInterval = setInterval(() => {
      this.setState({fadeIn: false});
    }, 2000);
    this.animateTitles();
  }

  componentDidUpdate () {
    // ClearInterval(this.fadeInterval);
  }

  componentWillUnmount () {
    clearInterval(this.titleInterval);
    clearInterval(this.fadeInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIncrease = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({titleIndex: titleIncrease,
                     fadeIn: true});
    }, 4000);
  }

  render () {
    const {fadeIn} = this.state,
     title = TITLES[this.state.titleIndex];

    
return (
        <span className={fadeIn 
                      ? 'title-fade-in' 
                      : 'title-fade-out'} >I am {title}</span>
    );
  }
}

export default Title;