import "./nav.css";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Button } from "@mui/material";
export const Nav = () => {
  return (
    <div className="nav">
      <div className="first">
        <div className="f-c">
          <h3 style={{ fontStyle: "oblique" }}>Dribbble</h3>
        </div>
        <div className="f-c">
          <p>Inspiration</p>
        </div>
        <div className="f-c">
          <p>Find Work</p>
        </div>
        <div className="f-c">
          <p>Learn Design</p>
        </div>
        <div className="f-c">
          <p>Go Pro</p>
        </div>
        <div className="f-c">
          <p>Design Files</p>
        </div>
        <div className="f-c">
          <p>hire Designers</p>
        </div>
      </div>
      <div className="second">
        <div className="f-c">
          <Button>
            <BsSearch />
          </Button>
        </div>
        <div className="f-c">
          <Button>Sign UP</Button>
        </div>
        <div className="f-c">
          <Button variant="contained" color="secondary">
            Share my Wopk
          </Button>
        </div>
      </div>
    </div>
  );
};
