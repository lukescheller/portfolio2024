import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import clothing from "../images/shirt.png";
import t1 from "../images/clothing/tshirt1.jpg";
import t2 from "../images/clothing/tshirt2.jpg";
import t3 from "../images/clothing/tshirt3.jpg";
import t4 from "../images/clothing/tshirt4.jpg";
import t5 from "../images/clothing/tshirt5.jpg";
import t6 from "../images/clothing/tshirt6.jpg";

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
        <img src={clothing} style={title_img} />
        <h3 style={title_h3}>Clothing</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div style={desktop_div}>
              <img src={t1} alt="" style={m} />
              <img src={t2} alt="" style={m} />
              <img src={t3} alt="" style={m} />
              <img src={t4} alt="" style={m} />
              <img src={t5} alt="" style={m} />
              <img src={t6} alt="" style={m} />
            </div>
          ) : (
            //DESKTOP
            <div style={desktop_div}>
              <img src={t1} alt="" style={d} />
              <img src={t2} alt="" style={d} />
              <img src={t3} alt="" style={d} />
              <img src={t4} alt="" style={d} />
              <img src={t5} alt="" style={d} />
              <img src={t6} alt="" style={d} />
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default ID_Page;
