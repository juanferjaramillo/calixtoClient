import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import { useRef } from "react";

//============================COMPONENT==========================
export default function Appbar(props) {
  const inputRef = useRef();

  const handleInput = () => {};

  //---------------------render------------------------
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${props.drawerWidth}px)` },
        ml: { md: `${props.drawerWidth}px` },
        height: "64px",
      }}
    >
      {/* <Toolbar sx={{ backgroundColor: palette.appBar }}> */}
      <Toolbar sx={{ backgroundColor: props.colorPrimario }}>
        <Grid item display={"flex"} flexDirection={"column"}>
          <Grid
            item
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"80vw"}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid item display={"Flex"} flexDirection={"column"}>
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: { xs: "100%", md: "130%", md: "160%" } }}
                >
                  {props.sloganOwner}
                </Typography>
              </Grid>

              <Grid item>
                <Typography>{props.clientName}</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Input
                placeholder="Producto"
                sx={{ height: 30, mr:3 }}
                type="text"
                inputRef={inputRef}
                onChange={handleInput}
              ></Input>
              <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={40}
                height={40}
                border={1}
                borderColor={"gray"}
                borderRadius={"50%"}
              >
                <SearchIcon 
                sx={{color: "gray"}} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
