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
                Akagi Jiu-Jitsu Vlogs #22 - Jake Marshall
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/g5uQmNFj_aM?si=M7rhSYYgWbU6b-02"
                title="Akagi Jiu-Jitsu Vlogs #22 - Jake Marshall"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h3 style={{ fontWeight: "bold" }}>
                Akagi Jiu-Jitsu Vlogs #21 - Nick Pocock
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/G54ynv310CY?si=asBCmBpizj09xMsp"
                title="Akagi Jiu-Jitsu Vlogs #21 - Nick Pocock"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Hubcap Productions - Steven Asplund
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/6PJ2yP8j9os?si=ej4PrLd_xstt_pos"
                title="Hubcap Productions - Steven Asplund"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                End Time Harvest Studios Interviews - Courtney
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/ZKKwIpJIQkY?si=cQt7x6mrbawaenF5"
                title="End Time Harvest Studios Interviews - Courtney"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                End Time Harvest Studios Interviews - Modoh
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/ba40zgNnoo4?si=IeLzJHYIi3lV0Y4G"
                title="End Time Harvest Studios Interviews - Modoh"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Akagi Jiu-Jitsu Vlogs Episode #19
              </h3>
              <iframe
                style={m}
                src="https://www.youtube.com/embed/lbzdtsLq1cs?si=1IZekW5JhW9EmDxr"
                title="Akagi Vlogs #19 - Getting philosophical with James Hubman - Part 1 - MAY 12TH 2024"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Akagi Vlogs #18 - Dylan Aas
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
                Akagi Jiu-Jitsu Vlogs #22 - Jake Marshall
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/g5uQmNFj_aM?si=M7rhSYYgWbU6b-02"
                title="Akagi Jiu-Jitsu Vlogs #22 - Jake Marshall"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h3 style={{ fontWeight: "bold" }}>
                Akagi Jiu-Jitsu Vlogs #21 - Nick Pocock
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/G54ynv310CY?si=asBCmBpizj09xMsp"
                title="Akagi Jiu-Jitsu Vlogs #21 - Nick Pocock"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Hubcap Productions - Steven Asplund
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/6PJ2yP8j9os?si=ej4PrLd_xstt_pos"
                title="Hubcap Productions - Steven Asplund"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                End Time Harvest Studios Interviews - Courtney
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/ZKKwIpJIQkY?si=cQt7x6mrbawaenF5"
                title="End Time Harvest Studios Interviews - Courtney"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                End Time Harvest Studios Interviews - Modoh
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/ba40zgNnoo4?si=IeLzJHYIi3lV0Y4G"
                title="End Time Harvest Studios Interviews - Modoh"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Akagi Vlogs #19 - James Hubman
              </h3>
              <iframe
                style={d}
                src="https://www.youtube.com/embed/lbzdtsLq1cs?si=v8OaIY82v0uHeRQ6"
                title="Akagi Vlogs #19 - James Hubman"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <h3 style={{ fontWeight: "bold" }}>
                Akagi Vlogs #18 - Dylan Aas
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
