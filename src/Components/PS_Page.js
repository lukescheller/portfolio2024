import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import ps from "../images/ps.png";

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

  return (
    <div>
      <div id="ae_title" style={ps_title}>
        <img src={ps} style={pr_title_img} />
        <h3 style={ps_title_h3}>Premiere Pro</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div></div>
          ) : (
            //DESKTOP
            <div></div>
          );
        }}
      </Media>
    </div>
  );
};

export default PS_Page;
