import React from 'react'

function MemeComp(props) {
  return(
    <div>
      <form className="meme-form">
        <label>Top Text:- </label>
        <input
          type="text"
          name="topText"
          onChange={props.handleChange}
          value={props.data.topText}
        />
        <br /><br />
        <label>Bottom Text:- </label>
        <input
          type="text"
          name="bottomText"
          onChange={props.handleChange}
          value={props.data.bottomText}
        />
        <span>  </span>
        <button onClick={props.imgSelector}>New template</button>
      </form>
      <br />
      <input
        type="checkbox"
        onChange={props.customAlign}
        style={{float: 'left'}}
      />
      <label>Custom Text Align</label>
      <br />
      <label>Top Text(Horizontal):--</label>
      <input
      type="range"
      /*min="100px"
      max="700px"*/
      name="topStyle1"
      onChange={props.sliderAlign}
      />
      <br />
      <label>Bottom Text(Horizontal):--</label>
      <input
      type="range"
      /*min="100px"
      max="700px"*/
      name="bottomStyle1"
      onChange={props.sliderAlign}
      />
      <br />
      <label>Top Text(Vertical):--</label>
      <input
      type="range"
      max="75"
      name="topStyle1"
      onChange={props.sliderAlignVertical}
      />
      <br />
      <label>Bottom Text(Vertical):--</label>
      <input
      type="range"
      max="75"
      name="bottomStyle1"
      onChange={props.sliderAlignVertical}
      />
      <div className="meme">
        <img src={props.data.randomImg} alt="" />
        <h2
          className="top"
          style={
            props.data.customTopTextAlign
            ? props.data.topStyle1
            : props.data.topStyle2
          }
        >
        {props.data.topText}</h2>
        <h2
          className="bottom"
          style={
            props.data.customBotTextAlign
            ? props.data.bottomStyle1
            : props.data.bottomStyle2
          }
        >
        {props.data.bottomText}</h2>
      </div>
    </div>
  )
}

export default MemeComp
