import "./body.css";
import React from "react";
import { Button } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Slide } from "./Slide";
import { Grid, GridItem } from "@chakra-ui/react";
export const Body = () => {
  return (
    <div>
      <div className="first-div">
        <div className="img-div">
          <div>
            <img
              className="imgp"
              src="https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg"
              alt="img"
            />
          </div>
          <div
            style={{
              hight: "20px",
              lineHeight: "10px",
              justifyContent: "space-between",
            }}
          >
            <p>Onboarding #Exploration</p>
            <p>
              Eren Follow • <Button color="secondary"> Hire Me</Button>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", height: "40px" }}>
          <Button>Save</Button>
          <Button variant="contained" color="secondary">
            <AiOutlineHeart />
            Like
          </Button>
        </div>
      </div>
      <div>
        <Slide />
      </div>
      <div style={{ width: "40%", margin: "auto", marginTop: "80px" }}>
        <p>Yo, what's up guys! 🥳</p>
        <p>
          It's tiring to write a different description for each shot, just like
          the shot and move on, love ya! 😘
        </p>
        <p>
          Let's create something amazing together! 🧑‍🎨 Feel free to contact me -
          <span style={{ color: "red" }}>ertuken@gmail.com</span>
        </p>
      </div>
      <div className="imgo">
        <img
          className="imgp"
          src="https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg"
          alt="img"
        />
        <p>let's create something amazing together →</p>
        <Button variant="contained" color="secondary">
          <MdEmail />
          Hire Me
        </Button>
      </div>
      <div className="contf">
        <Grid templateColumns="repeat(4, 300px)">
          <GridItem w="100%" h="120" bg="blue.500">
            <img
              src="https://cdn.dribbble.com/users/5536359/screenshots/15647939/media/c85f959aae0f2a34e87b5ead55462626.png"
              alt=""
              height="220px"
              width="200px"
            />
          </GridItem>
          <GridItem w="100%" h="120" bg="blue.500">
            <img
              src="https://cdn.dribbble.com/users/5536359/screenshots/18186519/media/7c29cc4d7812c0ad0fd453280ea9ffd9.png"
              alt=""
              height="220px"
              width="200px"
            />
          </GridItem>
          <GridItem w="80%" h="120" bg="blue.500">
            <img
              src="https://cdn.dribbble.com/users/5536359/screenshots/15634117/media/3e9de4ded3d785b76394d5d99db7964d.png"
              alt=""
              height="220px"
              width="200px"
            />
          </GridItem>
          <GridItem w="100%" h="120" bg="blue.500">
            <img
              src="https://cdn.dribbble.com/users/5536359/screenshots/14568997/media/c7dad89901827d60a79f8189cfc81f65.jpg"
              alt=""
              height="220px"
              width="200px"
            />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};
