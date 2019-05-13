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

  deleteItem = (id) => {
    scores.findAndRemove({ "$loki": id });
    this.setState({
      scoreList: scores.chain().simplesort("score", true).data()
    })
  }

  render() {
    return (
      <div>
        <header>
          <h2>Scoreboard hulabalooza</h2>
        </header>
        <div className="tablediv">
          <table>
            <tbody>
              <tr>
                <th>Username</th>
                <th>Score<span onClick={this.sortByScore} id="sortBtn" > &#171;&#187;</span></th>
                <th></th>
              </tr>
              {
                this.state.scoreList.map((item) =>
                  <tr key={`${item.$loki}`}>
                    <td>{item.username}</td>
                    <td id="scoreCell">{item.score}</td>
                    <td id="deleteCell"><button onClick={() => this.deleteItem(item.$loki)} className="buttons" >delete</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <AddScore saveScore={this.saveScore} />
      </div>
    );
  }
}

export default Scoreboard;