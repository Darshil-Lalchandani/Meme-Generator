import React, {Component} from 'react';

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText : "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      bottomStyle1: {
        position: "absolute",
        bottom: "50px",
        left: "50px",
        zIndex: "5",
      },
      bottomStyle2: {
        bottom : 0
      },
      topStyle1: {
        position: "absolute",
        top: "200px",
        left: "50px",
        zIndex: "5",
      },
      topStyle2:  {
        top : 0
      },
      customTopTextAlign: false,
      customBotTextAlign: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.imgSelector= this.imgSelector.bind(this)
  }
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const {memes} = response.data
        this.setState({
          allMemeImgs : memes
        })
      })
  }
  handleChange(event) {
    const {value, name} = event.target
    this.setState({
      [name] : value,
    })
  }
  imgSelector(event) {
    event.preventDefault()  //no reload
    this.setState(() => {
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      return {
        randomImg : this.state.allMemeImgs[randNum].url
      }
    })
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <label>Top Text:- </label>
          <input
            type="text"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br /><br />
          <label>Bottom Text:- </label>
          <input
            type="text"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <span>  </span>
          <button onClick={this.imgSelector}>New template</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2
            className="top"
            style={
              this.state.customTopTextAlign
              ? this.state.topStyle1
              : this.state.topStyle2
            }
          >
          {this.state.topText}</h2>
          <h2
            className="bottom"
            style={
              this.state.customBotTextAlign
              ? this.state.bottomStyle1
              : this.state.bottomStyle2
            }
          >
          {this.state.bottomText}</h2>
        </div>
        </div>
    )
  }
}

export default MemeGenerator;
