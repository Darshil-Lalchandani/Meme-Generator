import React from 'react'

function MemeComp(props) {
  return(
    <div className="meme-container">
      <div>
        <form className="meme-form">
        <table>
        <tr>
          <td><label>Top Text:- </label></td>
          <td>
          <input
            type="text"
            name="topText"
            onChange={props.handleChange}
            value={props.data.topText}
          />
          </td>
        </tr>
        <tr>
          <td><label>Bottom Text:- </label></td>
          <td>
          <input
            type="text"
            name="bottomText"
            onChange={props.handleChange}
            value={props.data.bottomText}
          />
          </td>
        </tr>
        </table>
        <br />
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
        <table>
        <tr>
          <td><label>Top Text(Horizontal):-</label></td>
          <td>
          <input
          type="range"
          /*min="100px"
          max="700px"*/
          name="topStyle1"
          onChange={props.sliderAlign}
          />
          </td>
        </tr>
        <tr>
          <td><label>Bottom Text(Horizontal):-</label></td>
          <td>
          <input
          type="range"
          /*min="100px"
          max="700px"*/
          name="bottomStyle1"
          onChange={props.sliderAlign}
          />
          </td>
        </tr>
        <tr>
          <td><label>Top Text(Vertical):-</label></td>
          <td>
          <input
          type="range"
          max="66"
          name="topStyle1"
          onChange={props.sliderAlignVertical}
          />
          </td>
        </tr>
        <tr>
          <td><label>Bottom Text(Vertical):-</label></td>
          <td>
          <input
          type="range"
          max="66"
          name="bottomStyle1"
          onChange={props.sliderAlignVertical}
          />
          </td>
        </tr>
        </table>
      </div>
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
