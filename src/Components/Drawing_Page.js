import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import pencil from "../images/pencil.png";
import d1 from "../images/drawing/1.png";
import d2 from "../images/drawing/2.png";
import d3 from "../images/drawing/3.png";
// import d4 from "../images/drawing/4.png";
import d5 from "../images/drawing/5.png";
import d6 from "../images/drawing/6.png";
import d7 from "../images/drawing/7.png";
import d8 from "../images/drawing/8.png";
import d9 from "../images/drawing/9.png";
import d10 from "../images/drawing/10.png";
import d11 from "../images/drawing/11.png";
import d12 from "../images/drawing/12.png";
import d13 from "../images/drawing/13.png";
import d14 from "../images/drawing/14.png";
import d15 from "../images/drawing/15.png";
import d16 from "../images/drawing/16.png";
import d17 from "../images/drawing/17.png";
import d18 from "../images/drawing/18.png";
import d19 from "../images/drawing/19.png";
import d20 from "../images/drawing/20.png";
import d21 from "../images/drawing/21.png";
import d22 from "../images/drawing/22.png";
import d23 from "../images/drawing/23.png";
import d24 from "../images/drawing/24.png";
import d25 from "../images/drawing/25.png";

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
      <div style={title}>
        <img src={pencil} style={title_img} />
        <h3 style={title_h3}>Drawing</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div style={desktop_div}>
              <img src={d2} alt="" style={m} />
              <img src={d1} alt="" style={m} />
              <img src={d3} alt="" style={m} />
              {/* <img src={d4} alt="" style={d} /> */}
              <img src={d5} alt="" style={m} />
              <img src={d6} alt="" style={m} />
              <img src={d7} alt="" style={m} />
              <img src={d8} alt="" style={m} />
              <img src={d9} alt="" style={m} />
              <img src={d10} alt="" style={m} />
              <img src={d11} alt="" style={m} />
              <img src={d12} alt="" style={m} />
              <img src={d13} alt="" style={m} />
              <img src={d14} alt="" style={m} />
              <img src={d15} alt="" style={m} />
              <img src={d16} alt="" style={m} />
              <img src={d17} alt="" style={m} />
              <img src={d18} alt="" style={m} />
              <img src={d19} alt="" style={m} />
              <img src={d20} alt="" style={m} />
              <img src={d21} alt="" style={m} />
              <img src={d22} alt="" style={m} />
              <img src={d23} alt="" style={m} />
              <img src={d24} alt="" style={m} />
              <img src={d25} alt="" style={m} />
            </div>
          ) : (
            //DESKTOP
            <div style={desktop_div}>
              <img src={d1} alt="" style={d} />
              <img src={d2} alt="" style={d} />
              <img src={d3} alt="" style={d} />
              {/* <img src={d4} alt="" style={d} /> */}
              <img src={d5} alt="" style={d} />
              <img src={d6} alt="" style={d} />
              <img src={d7} alt="" style={d} />
              <img src={d8} alt="" style={d} />
              <img src={d9} alt="" style={d} />
              <img src={d10} alt="" style={d} />
              <img src={d11} alt="" style={d} />
              <img src={d12} alt="" style={d} />
              <img src={d13} alt="" style={d} />
              <img src={d14} alt="" style={d} />
              <img src={d15} alt="" style={d} />
              <img src={d16} alt="" style={d} />
              <img src={d17} alt="" style={d} />
              <img src={d18} alt="" style={d} />
              <img src={d19} alt="" style={d} />
              <img src={d20} alt="" style={d} />
              <img src={d21} alt="" style={d} />
              <img src={d22} alt="" style={d} />
              <img src={d23} alt="" style={d} />
              <img src={d24} alt="" style={d} />
              <img src={d25} alt="" style={d} />
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default ID_Page;
