import React, { Component } from 'react';

class AddScore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newScoreListEntry: {
        username: "",
        score: ""
      },
      errorMsg: ""
    }
  }

  handleChange = event => {
    this.setState({
      newScoreListEntry:
        { ...this.state.newScoreListEntry, [event.target.id]: event.target.value }
    })
  }

  saveScore = () => {
    const score = this.state.newScoreListEntry
    if (score.username === "" || score.score === "") {
      this.setState(
        {
          errorMsg: "Both fields need to have values!"
        }
      );
    } else if (isNaN(score.score)) {
      this.setState(
        {
          errorMsg: "Score needs to be a numeric value!"
        }
      );
    } else {
      this.props.saveScore(this.state.newScoreListEntry);
      this.setState(
        {
          errorMsg: ""
        }
      );
    }

    this.setState({
      newScoreListEntry:
        { ...this.state.newScoreListEntry, username: "", score: "" }
    })
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <label htmlFor="username">Username: <input type="text" onChange={this.handleChange} id="username" value={this.state.newScoreListEntry.username} /></label>
          <label htmlFor="score">Score: <input type="text" onChange={this.handleChange} id="score" value={this.state.newScoreListEntry.score} /></label>
          <button onClick={this.saveScore} className="buttons" >Save</button>
        </div>
        <p id="error">{this.state.errorMsg}</p>

      </div>
    );
  }
}

export default AddScore;