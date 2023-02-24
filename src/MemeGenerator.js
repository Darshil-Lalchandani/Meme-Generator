import React, { Component } from "react";
import MemeComponent from "./MemeComponent";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      bottomStyle1: {
        position: "absolute",
        bottom: "350px",
        left: "100px",
        zIndex: "5",
      },
      topStyle1: {
        position: "absolute",
        top: "20px",
        left: "60px",
        zIndex: "5",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.imgSelector = this.imgSelector.bind(this);
    this.sliderAlign = this.sliderAlign.bind(this);
    this.sliderAlignVertical = this.sliderAlignVertical.bind(this);
    this.download = this.download.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  imgSelector(event) {
    event.preventDefault(); //no reload
    this.setState(() => {
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
      return {
        randomImg: this.state.allMemeImgs[randNum].url,
      };
    });
  }

  sliderAlign(event) {
    const { name } = event.target;
    if (name === "topStyle1") {
      this.setState({
        topStyle1: {
          ...this.state.topStyle1,
          left: 7 * event.target.value + "px",
        },
      });
    } else {
      this.setState({
        bottomStyle1: {
          ...this.state.bottomStyle1,
          left: 7 * event.target.value + "px",
        },
      });
    }
  }

  sliderAlignVertical(event) {
    const { name } = event.target;
    if (name === "topStyle1") {
      this.setState({
        topStyle1: {
          ...this.state.topStyle1,
          top: 7 * event.target.value + "px",
        },
      });
    } else {
      this.setState({
        bottomStyle1: {
          ...this.state.bottomStyle1,
          bottom: 7 * event.target.value + "px",
        },
      });
    }
  }

  download = () => {
    const meme = document.querySelector(".meme");

    // Delay before capturing the screenshot
    setTimeout(() => {
      // Create a new canvas element
      const canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;

      // Get the 2D context of the canvas
      const ctx = canvas.getContext("2d");

      // Draw the image element onto the canvas
      const img = new Image();
      img.src = this.state.randomImg;
      img.crossOrigin = "anonymous";
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 500, 500);

        // Draw the top and bottom text elements onto the canvas
        ctx.font = "30px Impact";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";

        ctx.fillText(
          this.state.topText.toUpperCase(),
          parseInt(this.state.topStyle1.left) - 250,
          parseInt(this.state.topStyle1.top),
          meme.offsetWidth
        );
        ctx.strokeText(
          this.state.topText.toUpperCase(),
          parseInt(this.state.topStyle1.left) - 250,
          parseInt(this.state.topStyle1.top),
          meme.offsetWidth
        );

        ctx.textBaseline = "bottom";
        ctx.fillText(
          this.state.bottomText.toUpperCase(),
          parseInt(this.state.bottomStyle1.left) - 250,
          parseInt(this.state.bottomStyle1.bottom),
          meme.offsetWidth
        );
        ctx.strokeText(
          this.state.bottomText.toUpperCase(),
          parseInt(this.state.bottomStyle1.left) - 250,
          parseInt(this.state.bottomStyle1.bottom),
          meme.offsetWidth
        );

        // Download the canvas as a PNG
        const link = document.createElement("a");
        link.download = `${this.state.topText} - ${this.state.bottomText}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }.bind(this);
    }, 500);
  };

  render() {
    return (
      <div>
        <MemeComponent
          data={this.state}
          handleChange={this.handleChange}
          imgSelector={this.imgSelector}
          customAlign={this.customAlign}
          sliderAlign={this.sliderAlign}
          sliderAlignVertical={this.sliderAlignVertical}
          download={this.download}
        />
      </div>
    );
  }
}

export default MemeGenerator;
