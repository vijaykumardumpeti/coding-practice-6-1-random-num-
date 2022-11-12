// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  randomGenerate = () => {
    const randInt = Math.ceil(Math.random(0, 100) * 100)
    console.log(randInt)
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + randInt,
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              onClick={this.randomGenerate}
              className="btn-style"
              type="button"
            >
              Generate
            </button>
          </div>
          <p className="heading-2">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
