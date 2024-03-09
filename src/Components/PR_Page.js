import React from "react";
import Media from "react-media";
import "bootstrap/dist/css/bootstrap.min.css";

import pr from "../images/pr.png";

const PR_Page = () => {
  //TITLE
  let pr_title = {
    display: "flex",
    borderBottom: "1px solid black",
    margin: "15px",
  };

  let pr_title_img = {
    width: "55px",
  };

  let pr_title_h3 = {
    fontWeight: "bold",
    margin: "10px",
    /* border: 1px solid black; */
  };

  //DESKTOP
  let d = {
    width: "75%",
    height: "650px",
    margin: "5px",
  };

  //MOBILE
  let m = {
    width: "100%",
    height: "300px",
    margin: "5px",
  };

  return (
    <div>
      <div id="ae_title" style={pr_title}>
        <img src={pr} style={pr_title_img} />
        <h3 style={pr_title_h3}>Premiere Pro</h3>
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            //MOBILE
            <div>
              <h3 style={{ fontWeight: "bold" }}>
                Akagi Jiu-Jitsu Vlogs Episode #18
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/tk9tZAg-ViM"
                title="AkagiVlogs #18 - Better watch out, Dylan Aas is gonna getcha... - November 12th 2023"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Familia Skateshop - Derek Lewis
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/yBiUn7jL81U"
                title="Familia Skatepark - Derek Lewis"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h3 style={{ fontWeight: "bold" }}>
                Minnesota Fringe Festival Promo
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/IFlV1xLlDSU"
                title="Minnesota Fringe Festival"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            //DESKTOP
            <div>
              <h3 style={{ fontWeight: "bold" }}>
                Akagi Jiu-Jitsu Vlogs Episode #18
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/tk9tZAg-ViM"
                title="AkagiVlogs #18 - Better watch out, Dylan Aas is gonna getcha... - November 12th 2023"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Familia Skateshop - Derek Lewis
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/yBiUn7jL81U"
                title="Familia Skatepark - Derek Lewis"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Minnesota Fringe Festival Promo
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/IFlV1xLlDSU"
                title="Minnesota Fringe Festival"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          );
        }}
      </Media>
    </div>
  );
};

export default PR_Page;
