import React from "react";
import Media from "react-media";

import ae from "../images/ae.png";

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

  let ae_video = { margin: "5px", width: "45%", height: "400px" };

  let filler = {
    width: "45%",
    margin: "5px",
  };

  //MOBILE
  let ae_video_mobile = { margin: "5px", width: "100%", height: "300px" };

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
                <iframe
                  style={ae_video_mobile}
                  src="https://www.youtube.com/embed/uSzxbP6dkSA"
                  title="akagi credits"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video_mobile}
                  src="https://www.youtube.com/embed/s5ndRCPBcWQ"
                  title="akagi intro"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video_mobile}
                  src="https://www.youtube.com/embed/2IIV9UQtdn8"
                  title="atheneum intro"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video_mobile}
                  src="https://www.youtube.com/embed/ot2qEnRaey8"
                  title="course logo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ) : (
            //DESKTOP
            <div id="ae1" style={ae1}>
              <div id="ae1_container" style={ae1_container}>
                <iframe
                  style={ae_video}
                  src="https://www.youtube.com/embed/uSzxbP6dkSA"
                  title="akagi credits"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video}
                  src="https://www.youtube.com/embed/s5ndRCPBcWQ"
                  title="akagi intro"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video}
                  src="https://www.youtube.com/embed/2IIV9UQtdn8"
                  title="atheneum intro"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  style={ae_video}
                  src="https://www.youtube.com/embed/ot2qEnRaey8"
                  title="course logo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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
