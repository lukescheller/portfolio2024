import React from "react";
import Media from "react-media";

import ae from "../images/ae.png";

import a_intro from "../images/videos/akagi_intro.mp4";
import a_credits from "../images/videos/akagi_credits.mp4";
import atheneum_intro from "../images/videos/atheneum_intro.mp4";
import atheneum_intro2 from "../images/videos/atheneum_intro2.mp4";
import logo from "../images/videos/course_logo.mp4";
import glow from "../images/videos/textglow.mp4";
import lightning from "../images/videos/lightning.mp4";
import three_d from "../images/videos/3d_shape.mp4";
import broll from "../images/videos/broll.mp4";

const AE_Page = () => {
  //TITLE
  let ae_title = {
    display: "flex",
    borderBottom: "1px solid black",
    margin: "15px",
  };

  let ae_title_img = {
    width: "55px",
  };

  let ae_title_h3 = {
    fontWeight: "bold",
    margin: "10px",
    /* border: 1px solid black; */
  };

  //DESKTOP
  let ae1 = {
    display: "flex",
    justifyContent: "center",
    margin: "5px",
  };

  let ae1_container = {
    margin: "5px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  let ae_video = { margin: "5px", width: "45%" };

  let filler = {
    width: "45%",
    margin: "5px",
  };

  //MOBILE
  let ae_video_mobile = { margin: "5px", width: "100%" };

  let filler_mobile = { margin: "5px", width: "100%" };

  return (
    <div>
      <div id="ae_title" style={ae_title}>
        <img src={ae} style={ae_title_img} />
        <h3 style={ae_title_h3}>After Effects</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div id="ae1">
              <div id="ae1_container">
                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={broll} type="video/mp4" />
                </video>
                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={three_d} type="video/mp4" />
                </video>
                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={lightning} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={glow} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={a_intro} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={a_credits} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={atheneum_intro} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={atheneum_intro2} type="video/mp4" />
                </video>

                <video style={ae_video_mobile} autoPlay loop muted>
                  <source src={logo} type="video/mp4" />
                </video>
              </div>
            </div>
          ) : (
            //DESKTOP
            <div id="ae1" style={ae1}>
              <div id="ae1_container" style={ae1_container}>
                <video style={ae_video} autoPlay loop muted>
                  <source src={broll} type="video/mp4" />
                </video>
                <video style={ae_video} autoPlay loop muted>
                  <source src={three_d} type="video/mp4" />
                </video>
                <video style={ae_video} autoPlay loop muted>
                  <source src={lightning} type="video/mp4" />
                </video>
                <video style={ae_video} autoPlay loop muted>
                  <source src={glow} type="video/mp4" />
                </video>

                <video style={ae_video} autoPlay loop muted>
                  <source src={a_intro} type="video/mp4" />
                </video>

                <video style={ae_video} autoPlay loop muted>
                  <source src={a_credits} type="video/mp4" />
                </video>

                <video style={ae_video} autoPlay loop muted>
                  <source src={atheneum_intro} type="video/mp4" />
                </video>

                <video style={ae_video} autoPlay loop muted>
                  <source src={atheneum_intro2} type="video/mp4" />
                </video>

                <video style={ae_video} autoPlay loop muted>
                  <source src={logo} type="video/mp4" />
                </video>
                <div id="filler" style={filler}></div>
              </div>
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default AE_Page;
