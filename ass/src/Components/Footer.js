import "./footer.css";
import React from "react";
import { DiChrome } from "react-icons/di";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div>
      <div className="main">
        <div>
          <h3>Dribbble</h3>
          <p>
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired
          </p>
          <div className="logo-div">
            <div className="icon-l">
              <DiChrome />
            </div>
            <div className="icon-l">
              <BsTwitter />
            </div>
            <div className="icon-l">
              <BsFacebook />
            </div>
            <div className="icon-l">
              <BsInstagram />
            </div>
            <div className="icon-l">
              <BsPinterest />
            </div>
          </div>
        </div>
        <div>
          <h3>For designers</h3>
          <p>Go Pro!</p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Weekly Warm-Up</p>
          <p>Code of conduct</p>
        </div>
        <div>
          <h3>Hire designers</h3>
          <p>Post a job opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
          <h3>Brands</h3>
          <p>Advertise with us</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media Kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
        <div>
          <h3>Directories</h3>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers for hire</p>
          <p>Tags</p>
          <p>Places</p>
          <h3>Design assets</h3>
          <p>Creative Market</p>
          <p>Fontspring</p>
          <p>Font Squirrel</p>
        </div>
        <div>
          <h3>Design Resources</h3>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry Trends</p>
        </div>
      </div>
      <hr />
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div>
          <h3>2022 Dribbble. All rights reserved.</h3>
        </div>
        <div>
          <h3>
            19,613,167{" "}
            <span>
              shots Dribbled <DiChrome />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
