import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import useMediaQuery from "@mui/material/useMediaQuery";

import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import video3 from "../../../assets/video3.mp4";
import video4 from "../../../assets/video4.mp4";

//==================Component=======================
function Starter() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/products");
  };

  let videoWidth = "30%";
  const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  isSmallScreen ? (videoWidth = "100%") : null;

  //-------------------------Render---------------------
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      > 
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab icon={<WorkIcon />} label="Proveedores" />
            <Tab icon={<FiberNewIcon />} label="Novedades" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} id={"proveedores"}>
          <Grid item display={"flex"} justifyContent={"center"}>
            <img
              src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1686442232/calixto/proveedores_zlgr9b.jpg"
              alt="providers"
              onClick={handleClick}
              width={"90%"}
              style={{ objectFit: "fit", cursor: "pointer" }}
              
            />
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1} id={"videos"}>
          <Grid
            item
            display={"Flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            padding={1}
            width={"90vw"}
            height={"80vh"}
            sx={{ cursor: "pointer" }}
            // onClick={() => navigate("/products")}
            // border={2}
          >
            
              <video
                type="video/mp4"
                width={videoWidth}
                src={
                  "https://res.cloudinary.com/dbxsr9mfc/video/upload/v1687184750/calixto/videos/video2_vqi7tg.mp4"
                }
                // src={video1}
                controls
                // autoPlay
                // loop
                // muted
                // poster="https://assets.codepen.io/6093409/river.jpg"
              ></video>

              <video
                type="video/mp4"
                width={videoWidth}
                src={
                  "https://res.cloudinary.com/dbxsr9mfc/video/upload/v1687184748/calixto/videos/video4_eqf3qw.mp4"
                }
                controls
                // src={video2}
                // autoPlay
                // loop
                // muted
                // poster="https://assets.codepen.io/6093409/river.jpg"
              ></video>
           
              <video
                type="video/mp4"
                width={videoWidth}
                src={
                  "https://res.cloudinary.com/dbxsr9mfc/video/upload/v1687184747/calixto/videos/video1_k6r5jj.mp4"
                }
                controls
                // src={video3}
                // autoPlay
                // loop
                // muted
                // poster="https://assets.codepen.io/6093409/river.jpg"
              ></video>
           
              <video
                type="video/mp4"
                width={videoWidth}
                src={
                  "https://res.cloudinary.com/dbxsr9mfc/video/upload/v1687184746/calixto/videos/video3_sxo33b.mp4"
                }
                controls
                // src={video4}
                // autoPlay
                // loop
                // muted
                // poster="https://assets.codepen.io/6093409/river.jpg"
              ></video>
           
          </Grid>
        </TabPanel>
      </Grid>
    </Box>
  );
}
export default Starter;
