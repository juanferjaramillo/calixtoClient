import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByProvider, filterByName, resetBoard } from "../redux/actions";
import {
  Button,
  Typography,
  Input,
  Select,
  MenuItem,
  Box,
  Grid,
  Avatar,
} from "@mui/material";

function SideBar() {
  const dispatch = useDispatch();
  const [FBP, setFBP] = useState("TODOS");
  const [nombre, setNombre] = useState("");
  //creates local state for handling the search input text

  const handleFilterProviderChange = (event) => {
    setNombre("");
    setFBP(event.target.value);
    //to keep the selection box updated
    dispatch(filterByProvider(event.target.value));
  };

  const handleInput = (event) => {
    setNombre(event.target.value.trim().toLowerCase());
    //dispatch(filterByPartialName(event.target.value))
  };

  const handleBuscarClick = () => {
    dispatch(filterByProvider(FBP));
    dispatch(filterByName(nombre));
  };

  const handleResetClick = () => {
    setNombre("");
    setFBP("TODOS");
    dispatch(resetBoard());
  };

  //------------------------------RENDER---------------------------------
  return (
    <Box sx={{ width: "10vw", minWidth: "160px" }}>
      <Grid
        container
        height={"100vh"}
        // maxWidth={"10vw"}
        width={"100%"}
        //minWidth= {"160px"}
        position={"fixed"}
        //md={1.2}  sm={5} xs={5}
      >
        <Grid
          item
          backgroundColor={"rgb(0, 15, 18)"}
          color={"darkolivegreen"}
          // border={1}
          // borderColor={"blue"}
        >
          <Grid
            item
            id="logoSF"
            marginBottom={"5vh"}
            // border={1}
            // borderColor={"yellow"}
          >
            <Avatar
              src={
                "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
              }
              variant="square"
              sx={{ width: "100%", height: "10vh" }}
              // width="100%"
              //src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
              alt="Logo SF"
            ></Avatar>
          </Grid>

          <Grid
            item
            id="filtros"
            marginBottom={"70%"}
            height={"60vh"}
            width={"100%"}
            // border={1}
            // borderColor={"green"}
          >
            <Grid
              item
              id="proveedor"
              textAlign={"center"}
              marginBottom={"2vw"}
              color={"whiteSmoke"}
            >
              <Typography>Proveedor:</Typography>

              <Select
                name="filterProvider"
                onChange={handleFilterProviderChange}
                sx={{
                  backgroundColor: "whiteSmoke",
                  width: "100%",
                  height: "3vw",
                }}
                value={FBP}
              >
                <MenuItem value="TODOS">Todos</MenuItem>
                <MenuItem value="UP NUTRICIONAL FOOD SAS">
                  Nutritional Foods
                </MenuItem>
                <MenuItem value="EL DORADO COMEX SAS">El Dorado</MenuItem>
                <MenuItem value="ALIMENTOS EL DORADO SAS">
                  Alimentos El Dorado
                </MenuItem>
                <MenuItem value="ECOHOME">Ecohome</MenuItem>
                <MenuItem value="AMIRA SAS">Amira</MenuItem>
                <MenuItem value="TERRAFERTIL COLOMBIA SAS">
                  Terrafertil
                </MenuItem>
                <MenuItem value="MONTESOL">Montesol</MenuItem>
                <MenuItem value="SAMANÁ">Samaná</MenuItem>
                <MenuItem value="GRECO">Greco</MenuItem>
              </Select>
            </Grid>
            <hr></hr>

            <Grid
              item
              paddingTop={"4vw"}
              paddingBottom={"2vw"}
              color={"whiteSmoke"}
            >
              <Typography textAlign={"center"}>Producto:</Typography>
              <Input
                placeholder="Nombre"
                type="search"
                variant="filled"
                color="warning"
                sx={{ backgroundColor: "whiteSmoke" }}
                onChange={handleInput}
                value={nombre}
              />

              <br></br>
              <br></br>
              <br></br>
              <Grid item
              display={"flex"}
              width={"100%"}
              justifyContent={"center"}
              
              >
                <Button variant="outlined" onClick={handleBuscarClick}>
                  Buscar
                </Button>
              </Grid>
            </Grid>

            <br></br>
            <hr></hr>
            <br></br>

            <Grid item display={"flex"} justifyContent={"center"}>
              <Button
                variant="outlined"
                color="error"
                onClick={handleResetClick}
              >
                Reset
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            height={"20vh"}
            // border={1}
            // borderColor={"red"}
          >
            <Typography
              textAlign={"center"}
              color={"goldenrod"}
              fontSize={"small"}
              // sx={{ marginBottom: "1vw" }}
            >
              Made by Sthemma
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SideBar;
