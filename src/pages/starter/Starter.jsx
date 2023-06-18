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
            justifyContent={"center"}
            alignItems={"center"}
            width={"30vw"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/products")}
          >
            <video
              // autoPlay
              // loop
              muted
              // poster="https://assets.codepen.io/6093409/river.jpg"
              src={video1}
              type="video/mp4"
              width={"70%"}
              style={{ objectFit: "fill", margin:10 }}
              controls
            ></video>

            <video
              // autoPlay
              // loop
              muted
              // poster="https://assets.codepen.io/6093409/river.jpg"
              src={video2}
              type="video/mp4"
              width={"70%"}
              style={{ objectFit: "fill", margin:10  }}
              controls
            ></video>

            <video
              // autoPlay
              // loop
              muted
              // poster="https://assets.codepen.io/6093409/river.jpg"
              src={video3}
              type="video/mp4"
              width={"70%"}
              style={{ objectFit: "fill", margin:10  }}
              controls
            ></video>

            <video
              // autoPlay
              // loop
              muted
              // poster="https://assets.codepen.io/6093409/river.jpg"
              src={video4}
              type="video/mp4"
              width={"70%"}
              style={{ objectFit: "fill", margin:10  }}
              controls
            ></video>
          </Grid>
        </TabPanel>
      </Grid>
    </Box>
  );
}
export default Starter;
