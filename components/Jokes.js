import React, { Component } from 'react'

const Joke = props => {
  const {punchline, setup} = props.ele;
  return (
      <div style={{margin: '10px 10px 20px 10px', fontSize: '0.8em'}}>
        {setup} <br/>
        <em>{punchline}</em>
      </div>
    )
  };

class Jokes extends Component {
  state = {joke: ""};

  componentDidMount() {
    this.updateJokeButton()
  };

  updateJokeButton = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(json => this.setState({joke: [json]}))
    .catch(error => alert("Darn it I Failed to Fetch the Jokes!", error.message))
  }

  getMoreJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(json => {this.setState({joke: json})})
    .catch(error => alert("Darn it I Failed to Fetch the Jokes!",error.message))
  }

  render() {
    const jokes = this.state.joke;
    return (
      <div>
        <div style={{fontSize: '0.7em'}}>
          <button onClick={this.updateJokeButton}>Didn't like the joke?</button>
          <button onClick={this.getMoreJokes}>Get More Jokes!</button>
        </div>
       { 
         jokes 
         ? jokes.map( ele => <Joke key={ele.id} ele={ele}/>) 
         : ""
       } 
      </div>
    )
  }
}

export default Jokes;