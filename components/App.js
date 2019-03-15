import React, {Component} from 'react';
import Projects from './Projects';
import Title from './Title';
import profile from '../assets/David shot v3.jpeg';
import Jokes from './Jokes';
import '../index.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {'displayBio': false};
  }


  toggleDisplayBio = () => {
      this.setState({
      displayBio: !this.state.displayBio
    });
  }

  render() {
    return (
      <div>
        <img src={profile} 
             alt="alt-text" 
             className="imageProfile"
             />
        <h1>Hello!</h1>
        <p>My name is David.</p>
        <p><Title /></p>
        <p>I'm always looking forward to learn and work in new projects.</p>
          {this.state.displayBio 
            ? <div>
              <p>I live in London and like to code.</p>
              <p>Besides work I love to spend time with my family and go rock 
                climbing</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
            : <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
              </div>
            }
            <hr />
        <Projects />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;