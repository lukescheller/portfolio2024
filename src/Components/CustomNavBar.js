import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import ae from "../images/ae.png";
import pr from "../images/pr.png";
import ps from "../images/ps.png";
import id from "../images/id.png";
import tm from "../images/tm.png";

const CustomNavBar = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="md"
        variant="light"
        style={{ padding: "15px", marginBottom: "25px" }}
      >
        <Navbar.Brand>
          <Link to="/portfolio2024">
            <img src={Logo} alt="" width="75px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <div
            style={{
              display: "flex",
              justifyContent: "Center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* after effects */}
            <Link
              to="/aftereffects"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src={ae} alt="" width="60px" />{" "}
            </Link>
            <br />
            {/* premiere pro */}
            <Link
              to="/premierepro"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src={pr} alt="" width="60px" />{" "}
            </Link>
            <br />
            {/* photoshop */}
            <Link
              to="/photoshop"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img src={ps} alt="" width="60px" />{" "}
            </Link>
            <br />
            {/* InDesign */}
            <Link
              to="/indesign"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img alt={{}} src={id} width="60px" />{" "}
            </Link>
            <br />
            {/* Logos */}
            <Link
              to="/logos"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img alt={{}} src={tm} width="60px" />{" "}
            </Link>
            <br />
            {/* clothing */}
            <Link
              to="/clothing"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-shirt-tropical-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
              />{" "}
            </Link>
            <br />
            {/* drawing */}
            <Link
              to="/drawing"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/material-rounded/48/000000/pencil-tip.png"
              />
            </Link>
            <br />
            {/* pokemon */}
            {/* <Link
              to="/pokemon"
              style={{
                color: "black",
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <img
                alt={{}}
                src="https://img.icons8.com/?size=50&id=cf5VAHkQsmvA&format=png&color=000000"
              />
            </Link>
            <br /> */}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
