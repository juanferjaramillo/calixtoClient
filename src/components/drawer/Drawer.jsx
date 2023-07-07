import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from '@mui/icons-material/Logout';
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import { FormControlLabel, fabClasses } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { logout } from "../../redux/actions";

import {
  filterByProvider,
  filterByName,
  resetBoard,
  filterByCategory,
  filterByDisponibility,
  filterByProperty,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

//======================Component===============
export default function DrawerContent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [FBP, setFBP] = useState(""); //provider
  const [FBC, setFBC] = useState(""); //category
  const [FBD, setFBD] = useState(""); //disponibility
  const [FBPP, setFBPP] = useState([false, false, false, false, false, false]); //property
  const [selectProv, setSelectProv] = useState(false);
  const [searchProd, setSearchProd] = useState(false);
  const [selectCateg, setSelectCateg] = useState(false);
  const [selectDisp, setSelectDisp] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [selectPro, setSelectPro] = useState(false);
  const [render, setRender] = useState(true);
  const [initCard, setInitCard] = useState(0);

  const providers = useSelector((state) => state.product.providers);
  const categories = useSelector((state) => state.product.categories);
  const logoOwner = useSelector(
    (state) => state.users.authUser?.owner?.logoOwner
  );
  const colorPrimario = `#${useSelector(
    (state) => state.users?.authUser?.owner?.colorPrimario
  )}`;

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterProviderChange = (event) => {
    dispatch(filterByProvider(event.target.value));
    //to keep the selection box updated
    document.documentElement.scrollTop = 0;
    setFBP(event.target.value);
    setRender((r) => !r);
  };

  const handleInput = (event) => {
    inputRef.current.value = event.target.value.trim().toLowerCase();
  };

  const handleBuscarClick = () => {
    dispatch(filterByName(inputRef.current.value));
    document.documentElement.scrollTop = 0;
    setRender((r) => !r);
  };

  const handleResetClick = () => {
    inputRef.current ? (inputRef.current.value = "") : null;
    setFBP("");
    setFBC("");
    setFBD("");
    setFBPP([false, false, false, false, false, false]);
    dispatch(resetBoard());
    document.documentElement.scrollTop = 0;
    setInitCard((init) => 0);
    setRender((r) => !r);
  };

  const handleFilterCategChange = (event) => {
    dispatch(filterByCategory(event.target.value));
    //to keep the selection box updated
    document.documentElement.scrollTop = 0;
    setFBC(event.target.value);
    setRender((r) => !r);
  };
  const handleFilterDispChange = (event) => {
    dispatch(filterByDisponibility(event.target.value));
    document.documentElement.scrollTop = 0;
    setFBD(event.target.value);
    setRender((r) => !r);
  };

  const handleCheckChange = (event) => {
    dispatch(filterByProperty(event.target.value));
    let checks = FBPP;
    checks[event.target.value - 1] = true;
    setFBPP(checks);
    setRender((r) => !r);
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/");
  };

  //---------------------Render-----------------
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid item>
        <img
          height="55vh"
          width="180vh"
          alt="Logo Cliente"
          src={logoOwner}
          style={{ objectFit: "contain" }}
        ></img>
      </Grid>
      <Divider />
      <List>
        <ListItem>
          <Button
            variant="outlined"
            color="success"
            sx={{ width: "100%" }}
            // sx={{ backgroundColor: "black" }}
            onClick={handleResetClick}
          >
            todos
          </Button>
        </ListItem>

        <ListItem key={"proveedor"}>
          <ListItemButton
            onClick={() => {
              setSelectProv(!selectProv);
              setSelectCateg(false);
              setSelectPro(false);
              setSelectDisp(false);
              setSearchProd(false);
            }}
          >
            <WorkIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Proveedor" />
          </ListItemButton>
        </ListItem>

        {!selectProv ? null : (
          <>
            <ListItem key={"provList"} disablePadding>
              <Select
                name="filterProvider"
                onChange={handleFilterProviderChange}
                sx={{
                  backgroundColor: "whiteSmoke",
                  width: "90%",
                  height: 30,
                  mb: 2,
                  ml: 1,
                  mr: 1,
                }}
                value={FBP}
              >
                {providers?.map((p, i) => {
                  return (
                    <MenuItem key={i} value={p}>
                      {p}
                    </MenuItem>
                  );
                })}
              </Select>
            </ListItem>
          </>
        )}
        <Divider />

        <ListItem key={"disponibilidad"}>
          <ListItemButton
            onClick={() => {
              setSelectDisp(!selectDisp);
              setSelectProv(false);
              setSelectCateg(false);
              setSelectPro(false);
              setSearchProd(false);
            }}
          >
            <InventoryIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Disponibilidad" />
          </ListItemButton>
        </ListItem>

        {!selectDisp ? null : (
          <ListItem key={"dispList"} disablePadding>
            <Select
              name="filterDisp"
              onChange={handleFilterDispChange}
              sx={{
                backgroundColor: "whiteSmoke",
                width: "90%",
                height: 30,
                mb: 2,
                ml: 1,
                mr: 1,
              }}
              value={FBD}
            >
              {["Llegado", "Agotado", "limitado"].map((d, i) => (
                <MenuItem key={i} value={i + 2}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </ListItem>
        )}

        <Divider />

        <ListItem key={"categoria"}>
          <ListItemButton
            onClick={() => {
              setSelectCateg(!selectCateg);
              setSelectDisp(false);
              setSelectProv(false);
              setSelectPro(false);
              setSearchProd(false);
            }}
          >
            <CategoryIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Categoria" />
          </ListItemButton>
        </ListItem>

        {!selectCateg ? null : (
          <>
            <Select
              name="filtercateg"
              onChange={handleFilterCategChange}
              sx={{
                backgroundColor: "whiteSmoke",
                width: "90%",
                height: 30,
                mb: 2,
                ml: 1,
                mr: 1,
              }}
              value={FBC}
            >
              {categories?.map((e, i) => {
                return (
                  <MenuItem key={i} value={e}>
                    {e}
                  </MenuItem>
                );
              })}
            </Select>
          </>
        )}

        <Divider />

        <ListItem key={"atributos"}>
          <ListItemButton
            onClick={() => {
              setSelectPro(!selectPro);
              setSelectDisp(false);
              setSelectProv(false);
              setSelectCateg(false);
              setSearchProd(false);
            }}
          >
            <ClassIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Atributos" />
          </ListItemButton>
        </ListItem>

        <FormGroup sx={{ ml: 2 }}>
          {!selectPro ? null : (
            <Grid container>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[0]}
                    onChange={handleCheckChange}
                    value="1"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Keto"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[1]}
                    onChange={handleCheckChange}
                    value="2"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Vegano"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[2]}
                    onChange={handleCheckChange}
                    value="3"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Vegetariano"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[3]}
                    onChange={handleCheckChange}
                    value="4"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Apto Diabéticos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[4]}
                    onChange={handleCheckChange}
                    value="5"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Alto Proteína"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FBPP[5]}
                    onChange={handleCheckChange}
                    value="6"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Gluten Free"
              />
              {/* <Button
            variant="outlined"
            color="success"
            sx={{ width: "90%", mb:2 }}
            // o  nClick={handleFiltrarPropiedad}
          >
            Filtrar
          </Button> */}
            </Grid>
          )}
        </FormGroup>

        <Divider />

        <ListItem key={"Nproducto"}>
          <ListItemButton
            onClick={() => {
              setSearchProd(!searchProd);
              setSelectDisp(false);
              setSelectProv(false);
              setSelectCateg(false);
              setSelectPro(false);
            }}
          >
            <LocalGroceryStoreIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Producto" />
          </ListItemButton>
        </ListItem>

        {!searchProd ? null : (
          <Grid item display={"flex"}>
            {/* <ListItem disablePadding> */}
            <Input
              placeholder="Producto"
              sx={{ marginLeft: 1, height: 30 }}
              type="text"
              inputRef={inputRef}
              onChange={handleInput}
            ></Input>

            <Button
              // variant="outlined"
              sx={{ color: "black", p: 0 }}
              onClick={handleBuscarClick}
            >
              <SearchIcon fontSize="small" />
            </Button>
          </Grid>
        )}
        {/* <Divider sx={{ mb: 3 }} /> */}
        <Divider sx={{ mb: 3 }} />

        <ListItem key={"Salir"}>
          <ListItemButton onClick={handleLogout}>
            <LogoutIcon sx={{ color: colorPrimario }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Logout" />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ mb: 3 }} />
      </List>

      {/* <Grid
        item
        display={"flex"}
        alignItems={"center"}
        border={1}
        height={20}
        width={"70%"}
        borderRadius={"10%"}
        backgroundColor={palette.appBar}
        color={"white"}
        sx={{ position: "flexEnd" }}
      >
        <Typography width={"100%"} textAlign={"center"} fontSize={10}>
          Made by Sthemma
        </Typography>
      </Grid> */}
    </Box>
  );
}
