import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import id from "../images/id.png";

import m1 from "../images/indesign/magazine.jpg";
import m2 from "../images/indesign/magazine2.jpg";

const ID_Page = () => {
  //TITLE
  let id_title = {
    display: "flex",
    borderBottom: "1px solid black",
    margin: "15px",
  };

  let id_title_img = {
    width: "55px",
  };

  let id_title_h3 = {
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
    width: "25%",
    margin: "5px",
  };

  //MOBILE
  let m = {
    width: "75%",
    margin: "5px",
  };

  return (
    <div>
      <div style={id_title}>
        <img src={id} style={id_title_img} />
        <h3 style={id_title_h3}>InDesign</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div style={desktop_div}>
              <img src={m1} alt="" style={{ width: "100%" }} />
              <img src={m2} alt="" style={{ width: "100%" }} />
            </div>
          ) : (
            //DESKTOP
            <div style={desktop_div}>
              <img src={m1} alt="" style={{ width: "75%" }} />
              <img src={m2} alt="" style={{ width: "75%" }} />
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default ID_Page;
