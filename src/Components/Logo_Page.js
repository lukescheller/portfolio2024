import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import tm from "../images/tm.png";
import moth from "../images/logo/91moth.jpg";
import ig from "../images/logo/instagram_ad.jpg";
import ls from "../images/logo/logo.jpg";
import tcm from "../images/logo/TCM_STICKER_EDIT.jpg";
import tk from "../images/logo/tripple kings IG store opening promotion color 2.jpg";

const ID_Page = () => {
  //TITLE
  let title = {
    display: "flex",
    borderBottom: "1px solid black",
    margin: "15px",
  };

  let title_img = {
    width: "55px",
  };

  let title_h3 = {
    fontWeight: "bold",
    margin: "10px",
  };

  //DESKTOP
  let desktop_div = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  let d = {
    width: "35%",
    margin: "5px",
  };

  //MOBILE
  let m = {
    width: "75%",
    margin: "5px",
  };

  return (
    <div>
      <div style={title}>
        <img src={tm} style={title_img} />
        <h3 style={title_h3}>Logo</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div style={desktop_div}>
              <img src={moth} alt="" style={{ width: "75%", margin: "5px" }} />
              <img src={ig} alt="" style={m} />
              <img src={ls} alt="" style={m} />
              <img src={tcm} alt="" style={m} />
              <img src={tk} alt="" style={m} />
            </div>
          ) : (
            //DESKTOP
            <div style={desktop_div}>
              <img src={moth} alt="" style={{ width: "75%", margin: "5px" }} />
              <img src={ig} alt="" style={d} />
              <img src={ls} alt="" style={d} />
              <img src={tcm} alt="" style={d} />
              <img src={tk} alt="" style={d} />
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default ID_Page;
