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
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  filterByProvider,
  filterByName,
  resetBoard,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import WorkIcon from "@mui/icons-material/Work";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import { fabClasses } from "@mui/material";
import palette from "../../css/palette.js"


let ss=0;
const drawerWidth = 180;
const maxCards = 6; //number of cards to render at a time
//------------------------------COMPONENT-------------------------
function Display() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [FBP, setFBP] = useState("TODOS");
  const [FBC, setFBC] = useState("TODOS");
  const [FBD, setFBD] = useState("TODOS");
  const [initCard, setInitCard] = useState(0);
  const [render, setRender] = useState(true);
  const [cardsOnDisplay, setCardsOnDisplay] = useState([]);
  const [selectProv, setSelectProv] = useState(false);
  const [searchProd, setSearchProd] = useState(false);
  const [selectCateg, setSelectCateg] = useState(false);
  const [selectDisp, setSelectDisp] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  // const providers = JSON.parse(sessionStorage.getItem("providers"));
  const providers = useSelector((state) => state.product.providers);
  const logoOwner = useSelector(
    (state) => state.users.authUser?.owner?.logoOwner
  );
  const nameOwner = useSelector((state) => state.users.authUser?.owner?.name);
  const sloganOwner = useSelector(
    (state) => state.users.authUser?.owner?.sloganOwner
  );
  const filtProds = useSelector((state) => state.product.filteredProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  const isSmallScreen = useMediaQuery(`(max-width: 900px)`);
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
    toast.success("Bienvenido!");
    window.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCardsOnDisplay(filtProds.slice(0, initCard + maxCards));
  }, [initCard, render]);

  useEffect(() => {
    setRender((r) => !r);
  }, [filtProds]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
    setFBP("TODOS");
    dispatch(resetBoard());
    document.documentElement.scrollTop = 0;
    setInitCard((init) => 0);
    setRender((r) => !r);
  };

  const handlelogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/");
  };

  const handleFilterDispChange = () => {};
  const handleFilterCategChange = () => {};

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
        <ListItem key={"proveedor"}>
          <ListItemButton onClick={() => setSelectProv(!selectProv)}>
            <WorkIcon sx={{ color: palette.icons }} />
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
          </>
        )}
        <Divider />

        <ListItem key={"categoria"}>
          <ListItemButton onClick={() => setSelectCateg(!selectCateg)}>
            <CategoryIcon sx={{ color: palette.icons }} />
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
              <MenuItem key={0} value="TODOS">
                Todos
              </MenuItem>
              {["Categ1", "Categ1", "Categ1"].map((e, i) => (
                <MenuItem key={i+1} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </>
        )}

        <Divider />

        <ListItem key={"disponibilidad"}>
          <ListItemButton onClick={() => setSelectDisp(!selectDisp)}>
            <InventoryIcon sx={{ color: palette.icons  }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Disponibilidad" />
          </ListItemButton>
        </ListItem>

        {!selectDisp ? null : (
          <>
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
              <MenuItem key={0} value="TODOS">
                Todos
              </MenuItem>
              {["Llegado", "Escaso", "Agotado"].map((e, i) => (
                <MenuItem key={i+1} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </>
        )}

        <Divider />

        <ListItem key={"Nproducto"}>
          <ListItemButton onClick={() => setSearchProd(!searchProd)}>
            <LocalGroceryStoreIcon sx={{ color: palette.icons }} />
            <ListItemText sx={{ marginLeft: 1 }} primary="Producto" />
          </ListItemButton>
        </ListItem>

        {!searchProd ? null : (
          <>
            <ListItem disablePadding>
              <Input
                placeholder="Producto"
                sx={{ marginLeft: 1, height: 30 }}
                type="text"
                inputRef={inputRef}
                onChange={handleInput}
              ></Input>

              <Button
                // variant="outlined"
                disablePadding
                sx={{ color: "black" }}
                onClick={handleBuscarClick}
              >
                <SearchIcon fontSize="small" />
              </Button>
            </ListItem>
          </>
        )}
        <Divider sx={{ mb: 3 }} />

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
      </List>

      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        border={1}
        height={40}
        width={"100%"}
        borderRadius={"10%"}
        backgroundColor={palette.appBar}
        color={"white"}
        sx={{ position: "absolute", marginTop: "92vh" }}
      >
        <Typography width={"100%"} textAlign={"center"}>
          Made by Sthemma
        </Typography>
      </Grid>
    </Box>
  );

  //==================================RENDER======================================
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Toaster
        toastOptions={{ style: { background: "gray", color: "white" } }}
      />
      {/* ---------------------------------APP BAR----------------------------     */}
      <AppBar
        position="fixed"
        sx={{
          width: {md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: palette.appBar }}>
          <Grid
            item
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: { xs: "100%",md: "130%", md: "160%" } }}
              >
                {nameOwner}: {sloganOwner}
              </Typography>
            </Grid>
            <Grid item display={"flex"}>
              <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "gray",
                  color: "white",
                  fontSize: { xs: "80%",md: "90%", md: "100%" },
                }}
                onClick={() => navigate("/starter")}
              >
                Inicio
              </Button>

              <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "gray",
                  color: "white",
                  fontSize: { xs: "80%", md: "90%", md: "100%", marginLeft: 5 },
                }}
                onClick={handlelogout}
              >
                salir
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* -------------------------DRAWER------------------------ */}
      {/* {isSmallScreen ? ss=0 : ss=drawerWidth} */}
      <Box
        component="nav"
        sx={{ width: { md:ss }, flexShrink: { md: 0 } }}
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          open={isSmallScreen ? mobileOpen : true}
          onClose={isSmallScreen ? handleDrawerToggle : null}
          sx={{
            display: { xs: "block", md: "block" },

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
        backgroundColor={palette.backgroundDisplay}
        sx={{ width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Grid item display={"flex"} justifyContent={"center"} sx={{ flexWrap: "wrap" }}>
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
                    categoria={prod.category?.name} //array of objects with name:""
                    iva={prod.tax?.tax}
                    icons={prod.icons} //array of objects with iconUrl
                    estado={prod.state.id}
                  />
                );
              })
            : null}
        </Grid>
      </Box>
    </Box>
  );
}

export default Display;
