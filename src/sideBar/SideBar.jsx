import style from "./sideBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByProvider, filterByName, resetBoard } from "../redux/actions";
import { Button, Typography, Input, Select, MenuItem } from "@mui/material";

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

  return (
    <div className={style.container}>
      <div id="logoSF">
        <img
          className={style.logo}
          src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
          alt="Logo SF"
        ></img>
      </div>

      <div id="filtros" className={style.filterdiv}>
        <div id="proveedor" className={style.proveedor}>
          <Typography>Proveedor:</Typography>

          <Select
            name="filterProvider"
            onChange={handleFilterProviderChange}
            sx={{ backgroundColor: "lightBlue", width: "100%", height: "3vw" }}
            value={FBP}
          >
            <MenuItem value="TODOS">Todos</MenuItem>
            <MenuItem value="UP NUTRICIONAL FOOD SAS">Nutritional Foods</MenuItem>
            <MenuItem value="EL DORADO COMEX SAS">El Dorado</MenuItem>
            <MenuItem value="ALIMENTOS EL DORADO SAS">Alimentos El Dorado</MenuItem>
            <MenuItem value="ECOHOME">Ecohome</MenuItem>
            <MenuItem value="AMIRA SAS">Amira</MenuItem>
            <MenuItem value="TERRAFERTIL COLOMBIA SAS">Terrafertil</MenuItem>
            <MenuItem value="MONTESOL">Montesol</MenuItem>
            <MenuItem value="SAMANÁ">Samaná</MenuItem>
            <MenuItem value="GRECO">Greco</MenuItem>
          </Select>
        </div>
        <hr></hr>

        <div className={style.buscar}>
          <Typography>Producto:</Typography>
          <Input
            placeholder="Nombre"
            type="search"
            variant="filled"
            color="warning"
            sx={{ backgroundColor: "lightBlue" }}
            inputProps="nombre"
            onChange={handleInput}
            value={nombre}
          />

          <br></br>
          <Button 
          variant="outlined"
          onClick={handleBuscarClick}
          >Buscar</Button>
        </div>

        <br></br>
        <hr></hr>

        <div className={style.reset}>
          <Button 
          variant="outlined"
          color="error"
          onClick={handleResetClick}
          >Reset</Button>
        </div>
      </div>

      <Typography
        textAlign={"center"}
        color={"goldenrod"}
        fontSize={"small"}
        sx={{ marginBottom: "1vw" }}
      >
        Made by Sthemma
      </Typography>
    </div>
  );
}
export default SideBar;
