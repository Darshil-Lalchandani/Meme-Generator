import React, {Component} from 'react';
import MemeComponent from './MemeComponent';

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
        left: "100px",
        zIndex: "5",
      },
      bottomStyle2: {
        bottom : 0
      },
      topStyle1: {
        position: "absolute",
        top: "20px",
        left: "60px",
        zIndex: "5",
      },
      topStyle2:  {
        top : 0
      },
      customTopTextAlign: false,
      customBotTextAlign: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.imgSelector = this.imgSelector.bind(this)
    this.customAlign = this.customAlign.bind(this)
    this.sliderAlign = this.sliderAlign.bind(this)
    this.sliderAlignVertical = this.sliderAlignVertical.bind(this)
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
  customAlign(event) {
      this.setState({
        customBotTextAlign: !this.state.customBotTextAlign,
        customTopTextAlign: !this.state.customTopTextAlign,
      })
    }
  sliderAlign(event) {
    const {name} = event.target
    if(name === "topStyle1") {
      this.setState({
        topStyle1: {
          ...this.state.topStyle1,
          left: 7*event.target.value + 'px'
        },
      })
    } else {
      this.setState({
        bottomStyle1: {
          ...this.state.bottomStyle1,
          left: 7*event.target.value + 'px'
        },
      })
    }
  }
  sliderAlignVertical(event) {
    const {name} = event.target
    if(name === "topStyle1") {
      this.setState({
        topStyle1: {
          ...this.state.topStyle1,
          top: 7*event.target.value + 'px'
        },
      })
    } else {
      this.setState({
        bottomStyle1: {
          ...this.state.bottomStyle1,
          bottom: 7*event.target.value + 'px'
        },
      })
    }
  }
  render() {
    return (
      <div>
        <MemeComponent
          data = {this.state}
          handleChange = {this.handleChange}
          imgSelector = {this.imgSelector}
          customAlign = {this.customAlign}
          sliderAlign = {this.sliderAlign}
          sliderAlignVertical = {this.sliderAlignVertical}
        />
      </div>
    )
  }
}

export default MemeGenerator;
