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
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { filterByProvider } from "../../redux/actions";

// import video1 from "../../../assets/video1.mp4";
// import video2 from "../../../assets/video2.mp4";
// import video3 from "../../../assets/video3.mp4";
// import video4 from "../../../assets/video4.mp4";

//==================Component=======================
function Starter() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (prov) => {
    prov === "ALL" ? null : dispatch(filterByProvider(prov));
    navigate("/products");
  };

  let videoWidth = "30%";
  const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  isSmallScreen ? (videoWidth = "100%") : (videoWidth = "40%");

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
            // aria-label="basic tabs example"
            centered
          >
            <Tab icon={<WorkIcon />} label="Proveedores" />
            <Tab icon={<FiberNewIcon />} label="Novedades" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} id={"proveedores"}>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/sfgroup.png"
                alt="providers"
                onClick={()=>handleClick("ALL")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/flexy.png"
                alt="providers"
                onClick={()=>handleClick("ALL")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}

              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/ecohome.png"
                alt="providers"
                value="ECOHOME"
                onClick={()=>handleClick("ECOHOME")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              sx={{ padding: 3 }}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/wake.png"
                alt="providers"
                onClick={()=>handleClick("ALL")}
                height={"50px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/kala.png"
                alt="providers"
                onClick={()=>handleClick("ALL")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/El_dorado.png"
                alt="providers"
                onClick={()=>handleClick("EL DORADO COMEX SAS")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/Nature.png"
                alt="providers"
                onClick={()=>handleClick("ALL")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              boxShadow={3}
              margin={2}
              justifyContent={"center"}
              // width={"12vw"}
            >
              <img
                src="https://res.cloudinary.com/sthemma/calixto/logosProveedores/amira.jpg"
                alt="providers"
                onClick={()=>handleClick("AMIRA SAS")}
                height={"100px"}
                style={{ objectFit: "contain", cursor: "pointer" }}
              />
            </Grid>
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
            // border={2}
          >
            <video
              type="video/mp4"
              width={videoWidth}
              src={
                "https://res.cloudinary.com/sthemma/video/upload/calixto/videos/video1.mp4"
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
                "https://res.cloudinary.com/sthemma/video/upload/calixto/videos/video2.mp4"
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
                "https://res.cloudinary.com/sthemma/video/upload/calixto/videos/video3.mp4"
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
                "https://res.cloudinary.com/sthemma/video/upload/calixto/videos/video4.mp4"
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
