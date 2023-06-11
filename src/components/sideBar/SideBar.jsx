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
import Divider from "@mui/material/Divider";

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
    <Box id="box">
      <Grid
        id="GContainer"
        container
        height={"100vh"}
        //maxWidth={"10vw"}
        backgroundColor={"rgb(0, 15, 18)"}
        color={"darkolivegreen"}
        position={"fixed"}
        // border={3}
        // borderColor={"blue"}
        md={1.2} sm={2} xs={2.5}
      >
        <Grid
          item
          id="logoSF"
          marginBottom={"5vh"}
          //height={"20vh"}
          width={"100%"}
          border={3}
          borderColor={"orange"}
        >
          <Avatar
            variant="square"
            sx={{ width: "100%" }}
            alt="Logo SF"
            src={
              "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
            }
          ></Avatar>
        </Grid>

        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          id="filtro"
          marginBottom={"70%"}
          //height={"60vh"}
          width={"100%"}
          border={3}
          borderColor={"orange"}
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
            <MenuItem value="TERRAFERTIL COLOMBIA SAS">Terrafertil</MenuItem>
            <MenuItem value="MONTESOL">Montesol</MenuItem>
            <MenuItem value="SAMANÁ">Samaná</MenuItem>
            <MenuItem value="GRECO">Greco</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          id="busqueda"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          //marginBottom={"2vw"}
          color={"whiteSmoke"}
          border={3}
          borderColor={"red"}
        >
          <Typography>Producto:</Typography>
          <Input
            placeholder="Nombre"
            type="search"
            variant="filled"
            color="warning"
            sx={{ backgroundColor: "whiteSmoke" }}
            onChange={handleInput}
            value={nombre}
          />
          <Button
            variant="outlined"
            onClick={handleBuscarClick}
            sx={{ width: "80%" }}
          >
            Buscar
          </Button>
        </Grid>

        <Grid
          item
          id="reset"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"whiteSmoke"}
          width={"100%"}
          border={3}
          borderColor={"orange"}
        >
          <Button variant="outlined" color="error" onClick={handleResetClick}>
            Reset
          </Button>
        </Grid>

        <Grid
          item
          id="logoSthemma"
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          border={3}
          borderColor={"red"}
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
    </Box>
  );
}
export default SideBar;
