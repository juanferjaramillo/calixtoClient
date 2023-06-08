import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Card from "../../components/card/Card";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  filterByProvider,
  filterByName,
  resetBoard,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../../redux/actions";

const drawerWidth = 180;
const maxCards = 6; //number of cards to render at a time
//------------------------------COMPONENT-------------------------
function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [FBP, setFBP] = useState("TODOS");
  const [initCard, setInitCard] = useState(0);
  const [render, setRender] = useState(true);
  const [cardsOnDisplay, setCardsOnDisplay] = useState([]);

  //const filtProds = JSON.parse(sessionStorage.getItem("allProducts"));

  // const prodInit = filtProds.slice(initCard, initCard + maxCards)
  const filtProds = useSelector((state) => state.product.filteredProducts);
  const providers = JSON.parse(sessionStorage.getItem("providers"));
  // const providers = useSelector((state) => state.product.providers);
  // const logoOwner = useSelector(
  //   (state) => state.users.authUser?.owner?.logoOwner
  // );
  const logoOwner = JSON.parse(sessionStorage.getItem("AuthUsr")).owner
    .logoOwner;
  // const nameOwner = useSelector((state) => state.users.authUser?.owner?.name);
  const nameOwner = JSON.parse(sessionStorage.getItem("AuthUsr")).owner.name;
  // const sloganOwner = useSelector(
  //   (state) => state.users.authUser?.owner?.sloganOwner
  // );
  const sloganOwner = JSON.parse(sessionStorage.getItem("AuthUsr")).owner
    .sloganOwner;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  let data = [];

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      document.documentElement.scroll;
      setInitCard((init) => init + maxCards);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCardsOnDisplay(filtProds.slice(0, initCard + maxCards));
  }, [initCard, render]);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFilterProviderChange = (event) => {
    dispatch(filterByProvider(event.target.value));
    //to keep the selection box updated
    document.documentElement.scrollTop = 0;
    setFBP(event.target.value);
    setRender(r=>!r);
  };

  const handleInput = (event) => {
    inputRef.current.value = event.target.value.trim().toLowerCase();
  };

  const handleBuscarClick = () => {
    dispatch(filterByName(inputRef.current.value));
    document.documentElement.scrollTop = 0;
    setRender(r=>!r);
  };

  const handleResetClick = () => {
    inputRef.current.value = "";
    setFBP("TODOS");
    dispatch(resetBoard());
    document.documentElement.scrollTop = 0;
    setInitCard(init => 0);
    setRender(r=>!r);
  };

  const handlelogout = () => {
    dispatch(getAuthUser());
    sessionStorage.clear();
    navigate("/");
  };

  //------------------------DRAWER FUNCTION------------------------------

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        <ListItem key={"proveedor"} disablePadding>
          <ListItemText primary={"Proveedor:"} />
        </ListItem>

        <ListItem key={"provList"} disablePadding>
          <Select
            name="filterProvider"
            onChange={handleFilterProviderChange}
            sx={{
              backgroundColor: "whiteSmoke",
              width: "100%",
              height: "5vh",
            }}
            value={FBP}
          >
            <MenuItem key={0} value="TODOS">
              Todos
            </MenuItem>
            {providers?.map((p, i) => {
              return (
                <MenuItem key={i + 1} value={p}>
                  {p}
                </MenuItem>
              );
            })}
          </Select>
        </ListItem>
      </List>

      <Divider sx={{ marginTop: 10 }} />

      <Input
        placeholder="Producto"
        sx={{ width: "100%" }}
        type="text"
        inputRef={inputRef}
        onChange={handleInput}
      ></Input>

      <Button
        variant="contained"
        sx={{ width: "50%", ml: 5, mt: 1, backgroundColor: "purple" }}
        onClick={handleBuscarClick}
      >
        Buscar
      </Button>

      <Divider sx={{ marginTop: 5, marginBottom: 3 }} />

      <Button
        variant="contained"
        color="error"
        sx={{ width: "50%", ml: 5, backgroundColor: "black" }}
        onClick={handleResetClick}
      >
        Reset
      </Button>

      <Button
        variant="outlined"
        color="error"
        sx={{
          width: "50%",
          position: "absolute",
          marginTop: "85vh",
          marginLeft: "25%",
          color: "black",
          borderColor: "purple",
        }}
        onClick={handlelogout}
      >
        Logout
      </Button>
      <Typography
        width={"100%"}
        textAlign={"center"}
        sx={{ position: "absolute", marginTop: "95vh" }}
        border={1}
      >
        Made by Sthemma
      </Typography>
    </Box>
  );

  //==================================RENDER======================================
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* ---------------------------------APP BAR----------------------------     */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "purple" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {nameOwner}: {sloganOwner}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* -------------------------DRAWER------------------------ */}
      <Box
        border={3}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          open={isSmallScreen ? mobileOpen : true}
          onClose={isSmallScreen ? handleDrawerToggle : null}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          // open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* -------------------------------BOARD------------------------- */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Grid item display={"flex"} sx={{ flexWrap: "wrap" }}>
          {cardsOnDisplay.length > 0
            ? cardsOnDisplay.map((prod, index) => {
                return (
                  <Card
                    key={index}
                    ind={index}
                    codigo={prod.codigo}
                    nombre={prod.nombre}
                    Barras={prod.codigoBarras}
                    precio_base={prod.precioBase}
                    prodImg={prod.prodUrl}
                    descripcion={prod.descripcion}
                    categorias={prod.categories} //array of objects with name:""
                    iva={prod.tax?.tax}
                    icons={prod.icons} //array of objects with iconUrl
                  />
                );
              })
            : null}
          {/* </InfiniteScroll> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
