import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function MemeComp(props) {
  return (
    <>
      <div className="meme-container glassmorphism">
        <div className="">
          <form className="meme-form">
            <Button
              variant="contained"
              size="small"
              onClick={props.imgSelector}
              sx={{ marginBottom: "25px", marginTop: "5px" }}
            >
              Random template
            </Button>
            <fieldset style={{ borderRadius: "5px" }}>
              <legend>
                {" "}
                <Typography variant="body1" component="span">
                  <b>Input texts:</b>
                </Typography>
              </legend>
              <Typography variant="body1" component="span">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Top Text:- </label>
                      </td>
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
                      <td>
                        <label>Bottom Text:- </label>
                      </td>
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
              </Typography>
            </fieldset>
            <br />
          </form>

          <br />
          <fieldset style={{ borderRadius: "5px" }}>
            <legend>
              {" "}
              <Typography variant="body1" component="span">
                <b>Position your texts: </b>{" "}
              </Typography>
            </legend>
            <Typography variant="body1" component="span">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Top Text(Horizontal):-</label>
                    </td>
                    <td>
                      <input
                        type="range"
                        name="topStyle1"
                        onChange={props.sliderAlign}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Bottom Text(Horizontal):-</label>
                    </td>
                    <td>
                      <input
                        type="range"
                        name="bottomStyle1"
                        onChange={props.sliderAlign}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Top Text(Vertical):-</label>
                    </td>
                    <td>
                      <input
                        type="range"
                        max="66"
                        defaultValue="5"
                        name="topStyle1"
                        onChange={props.sliderAlignVertical}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Bottom Text(Vertical):-</label>
                    </td>
                    <td>
                      <input
                        type="range"
                        max="70"
                        defaultValue="65"
                        name="bottomStyle1"
                        onChange={props.sliderAlignVertical}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Typography>
          </fieldset>
          <Button
            variant="contained"
            size="small"
            onClick={props.download}
            sx={{ marginTop: "30px" }}
          >
            Download Meme
          </Button>
        </div>
        <div className="meme">
          <svg
            id="svg_ref"
            height="500px"
            width="500px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <image
              xlinkHref={props.data.randomImg}
              height="500px"
              width="500px"
              preserveAspectRatio="none"
              className="display-desktop"
            />
            <image
              xlinkHref={props.data.randomImg}
              height="50vh"
              width="85vw"
              preserveAspectRatio="none"
              className="display-mobile"
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
    </>
  );
}

export default MemeComp;
