import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import ps from "../images/ps.png";

import one from "../images/photoshop/1.jpg";
import two from "../images/photoshop/2.jpg";
import three from "../images/photoshop/3.jpg";
import four from "../images/photoshop/4.jpg";
import five from "../images/photoshop/5.jpg";
import six from "../images/photoshop/6.jpg";
import seven from "../images/photoshop/7.jpg";
import eight from "../images/photoshop/8.jpg";
import nine from "../images/photoshop/9.jpg";
import poster from "../images/photoshop/Poster_1st_Draft.png";

const PS_Page = () => {
  //TITLE
  let ps_title = {
    display: "flex",
    borderBottom: "1px solid black",
    margin: "15px",
  };

  let ps_title_img = {
    width: "55px",
  };

  let ps_title_h3 = {
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
      <div style={ps_title}>
        <img src={ps} style={ps_title_img} />
        <h3 style={ps_title_h3}>Photoshop</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div style={desktop_div}>
              <img src={one} alt="" style={m} />
              <img src={two} alt="" style={m} />
              <img src={three} alt="" style={m} />
              <img src={four} alt="" style={m} />
              <img src={five} alt="" style={m} />
              <img src={six} alt="" style={m} />
              {/* <img src={seven} alt="" style={m} /> */}
              <img src={eight} alt="" style={m} />
              <img src={nine} alt="" style={m} />
              <img src={poster} alt="" style={m} />
            </div>
          ) : (
            //DESKTOP
            <div style={desktop_div}>
              <img src={one} alt="" style={d} />
              <img src={two} alt="" style={d} />
              <img src={three} alt="" style={d} />
              <img src={four} alt="" style={d} />
              <img src={five} alt="" style={d} />
              <img src={six} alt="" style={d} />
              {/* <img src={seven} alt="" style={d} /> */}
              <img src={eight} alt="" style={d} />
              <img src={nine} alt="" style={d} />
              <img src={poster} alt="" style={d} />
              <div style={d} />
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default PS_Page;
