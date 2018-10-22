import React, { Component } from 'react';
import images from "./images.json"
import Image from "./components/Image"
import './App.css';

class App extends Component {

  state = {
    score: 0,
    images,
    clicked: [],
    highScore: 0


  }

  setclicked = (event) => {

    if (this.state.clicked.indexOf(event.target.id) < 0) {
      this.setState({ clicked: this.state.clicked.concat(event.target.id) })
      this.setState({ score: this.state.score + 1 })
      this.setState({ guess: true })
      console.log(this.state.clicked.length + 1)
      console.log(images.length)

    }

    else {
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      }
      this.setState({ guess: false })
      this.setState({ score: 0 })
      this.setState({ clicked: [] })

    }

    console.log(this.state.clicked)
    console.log(this.state.score);

  }
  shuffle = (event) => {
    this.setclicked(event)

    let shuffledpics = this.state.images.sort(() => {
      return .5 - Math.random();
    });

    this.setState({ images: shuffledpics });
  }

  render() {
    let guessDiv;
    if (this.state.guess) {
      guessDiv = <span className = "title-middle">Good Choice!</span>
    }
    else if (this.state.guess === false) {
      guessDiv = <span className = "title-middle">Oops... You Lost!</span>
    } else {
      guessDiv = <span className = "title-middle">Click an Image to Start!</span>
    }

    if ((this.state.clicked.length) === images.length) {
      alert("You win!")
      this.setState({clicked: []})
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      }
      this.setState({score: 0})
    }
    let showpics = this.state.images.map(item => (
      <Image
        id={item.id}
        key={item.id}
        image={item.image}
        click={this.shuffle}
      />
    ))
    return (
      <div>

        <div className="topbar">{guessDiv} <span className="badge badge-pill badge-success">Your Score: {this.state.score} Highest Score: {this.state.highScore}</span></div>
        <div>
          <div class="jumbotron jumbotron-fluid">
            <div class="container jumbo-inside">
              <h1 class="display-4">Clicky Game</h1>
              <p class="lead">Click on an image to earn points. Only click on each image once.</p>
            </div>
          </div>
          <div className="row pic-row">
            <div className="col-lg-12 pic-div">
              {showpics}
            </div>
          </div>
        </div>
        <div className = "botbar"></div>
      </div>
    );
  }
}

export default App;
