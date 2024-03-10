import React from "react";
import { Container } from "react-bootstrap";
import me from "../images/me2024.jpg";
import ae2 from "../images/ae2.png";
import pr2 from "../images/pr2.png";

const IntroBig = () => {
  return (
    <Container>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "10px",
          rowGap: "10px",
        }}
      >
        <h1
          style={{
            gridColumn: "1/-1",
            borderBottom: "1px solid black",
            color: "black",
            display: "inline-block",
            textAlign: "left",
            fontWeight: "lighter",
            padding: "10px",
            margin: "10px",
            marginBottom: "50px",
          }}
        >
          <a
            style={{ marginRight: "10px" }}
            href="https://icons8.com/icon/59800/handshake"
          >
            <img
              alt={{}}
              src="https://img.icons8.com/ios-glyphs/60/000000/handshake.png"
            />
          </a>
          Introduction
        </h1>
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <div class="profile-pic">
          <img
            src={me}
            alt="me"
            style={{
              width: "350px",
              // borderRadius: "50%",
              marginRight: "10px",
              margin: "5px",
            }}
          />
        </div>
        <div
          class="bio-text"
          style={{
            flexGrow: "1",
            textAlign: "left",
            marginLeft: "40px",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Luke Scheller</h1>{" "}
          <h6 style={{ fontWeight: "lighter", fontStyle: "italic" }}>
            {" "}
            Video Editor | Videographer | Motion Designer | Graphic Designer |
            Digital Painter | Developer
          </h6>
          <div
            class="icons"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <a href="https://icons8.com/icon/108781/adobe-after-effects">
              <img alt={{}} src={ae2} style={{ width: "48px" }} />
            </a>
            <a href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro">
              <img alt={{}} src={pr2} style={{ width: "48px" }} />
            </a>
            <a href="https://icons8.com/icon/13677/adobe-photoshop">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/13631/adobe-illustrator">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/13675/adobe-indesign">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-indesign--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/17854/windows-xp">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/windows-logo.png"
              />
            </a>
            <a href="https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              />
            </a>
            <a href="https://icons8.com/icon/20909/html-5">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/21278/css3">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/css3.png"
              />
            </a>
            <a href="https://icons8.com/icon/84710/bootstrap">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
              />
            </a>
            <a href="https://icons8.com/icon/108784/javascript">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/asWSSTBrDlTW/react-a-javascript-library-for-building-user-interfaces">
              <img
                alt={{}}
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              />
            </a>
            <a href="https://icons8.com/icon/jD-fJzVguBmw/redux">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/redux.png"
              />
            </a>
            <a href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">
              <img
                alt={{}}
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
              />
            </a>
          </div>
          <p
            style={{
              marginTop: "10px",
              paddingTop: "10px",
              borderTop: "1px solid black",
            }}
          >
            My name is Luke. From a very early age, I knew that I wanted to join
            the creative industry. My journey as an artist began with figure
            drawing and pointillism. I love the technicalities and process of
            illustrating a scene out of my imagination or copying a still life.
            After moving back to Minnesota from Las Vegas I decided to learn
            more about Adobe applications such as Photoshop, Illustrator,
            Premiere Pro, and After Effects. My most recent design projects have
            been focused on creating vlogs and motion graphics for my local
            Jiu-Jitsu gym. During my time at Minneapolis Community and Technical
            College, I discovered my interest in web development. My code of
            choice for the past few years has been Javascript—specifically React
            JS. My work is, now, dedicated to video editing and motion graphic
            design. I love the challenge and process of filming, editing, and
            creating the visual assets for my mini docs! My long term
            professional goal is to become a senior video editor and motion
            designer at a street culture organization such as Thrasher or Vice
            news! <br />
            <br />
            Thanks for taking the time to read my bio!
            <br />
            Contact: <strong>lukescheller1991@outlook.com</strong> |{" "}
            <strong>651-207-7638</strong>
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default IntroBig;
