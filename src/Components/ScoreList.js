import React, { Component } from 'react';
import { scores } from "../TestData/dbInit";
import AddScore from "./AddScore";

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scoreList: ["Empty"]
    }
  }

  componentDidMount() {
    this.setState({
      scoreList: scores.chain().simplesort("score", true).data()
    })
  }

  saveScore = (newScore) => {
    scores.insert({ "username": newScore.username, "score": newScore.score });
    this.setState({
      scoreList: scores.chain().simplesort("score", true).data()
    })
  }

  sortByScore = () => {
    const scoreList = this.state.scoreList;
    if (scoreList[0].score <= scoreList[scoreList.length - 1].score) {
      this.setState({
        scoreList: scores.chain().simplesort("score", true).data()
      })
    } else {
      this.setState({
        scoreList: scores.chain().simplesort("score").data()
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Scoreboard</h3>
        <button onClick={this.sortByScore} className="buttons" id="sortBtn" >Sort by score</button>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
            {
              this.state.scoreList.map((item) =>
                <tr key={`${item.$loki}`}>
                  <td>{item.username}</td>
                  <td id="scoreCell">{item.score}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <AddScore saveScore={this.saveScore} />
      </div>
    );
  }
}

export default Scoreboard;