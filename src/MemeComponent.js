import React from 'react'

function MemeComp(props) {
  return(
    <div className="meme-container">
      <div>
        <form className="meme-form">
        <table>
        <tbody>
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
        </tbody>
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
        <tbody>
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
          max="70"
          name="bottomStyle1"
          onChange={props.sliderAlignVertical}
          />
          </td>
        </tr>
        </tbody>
        </table>
      </div>
      <div className="meme">
      <svg
            id="svg_ref"
            //ref={el => { this.svgRef = el }}
            height="500px"
            width="500px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <image
              //ref={el => { this.imageRef = el }}
              xlinkHref={props.data.randomImg}
              height="500px"
              width="500px"
            />
            <text
              id="textStyle"
              x={props.data.topStyle1.left}
              y={props.data.topStyle1.top}
              dominantBaseline="middle"
              textAnchor="middle"
            >
                {props.data.topText}
            </text>
            <text
              id="textStyle"
              dominantBaseline="middle"
              textAnchor="middle"
              x={props.data.bottomStyle1.left}
              y={props.data.bottomStyle1.bottom}
            >
                {props.data.bottomText}
            </text>
          </svg>
      </div>
    </div>
  )
}

export default MemeComp
