import React, { Component } from 'react';
import ScoreCard from './ScoreCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "Ahjuma",
          score: 1001
        },
        {
          id: 2,
          name: "Jeff",
          score: 20
        },
        {
          id: 3,
          name: "Kelly",
          score: 500
        }
      ]
    }
  }

  _incrementScoreById(id) {
    // Find the player in this.state.scores

    // increment their score
    const newScores = this.state.scores.map(bob => {
       return bob.id !== id ? bob : {...bob, score: bob.score + 1};
    });

    // const newScores = this.state.scores.map(bob => {
    //   return (
    //     if (bob.id !== id) {
    //       return bob;
    //     } else {
    //       return {
    //         ...bob,
    //         score: bob.score + 1
    //       }
    //     }
    //   );
    // });

    // call this.setState
    this.setState({
      scores: newScores
    });
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <ScoreCard
        key={score.id}
        id={score.id}
        name={score.name}
        score={score.score}
        handleClick={this._incrementScoreById.bind(this)}
         />

      );
    });

    return cards;
  }

  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1>
        <div className="score-container">
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }
}

export default App;
