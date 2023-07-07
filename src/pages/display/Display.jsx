import { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "../../components/card/Card";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProdsUser, logout } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import palette from "../../css/palette.js";
import DrawerContent from "../../components/drawer/Drawer";
import { resetBoard } from "../../redux/actions";
import { lightBlue } from "@mui/material/colors";

let ss = 0;
const drawerWidth = 180;
const maxCards = 6; //number of cards to render at a time
//------------------------------COMPONENT-------------------------
function Display() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [initCard, setInitCard] = useState(0);
  const [render, setRender] = useState(true);
  const [cardsOnDisplay, setCardsOnDisplay] = useState([]);

  const userId = useSelector(state=>state.users.authUser.id)
  const sloganOwner = useSelector(
    (state) => state.users.authUser?.owner?.sloganOwner
  );
  const filtProds = useSelector((state) => state.product.filteredProducts);
  const colorPrimario = `#${useSelector(
    (state) => state.users?.authUser?.owner?.colorPrimario
  )}`;
  const colorSecundario = `#${useSelector(
    (state) => state.users?.authUser?.owner?.colorSecundario
  )}`;
  const colorTerciario = `#${useSelector(
    (state) => state.users?.authUser?.owner?.colorTerciario
  )}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  // const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  const isSmallScreen = useMediaQuery(`(max-width: 900px)`);
  let data = [];

  function handleScroll() {
    // console.log(document.documentElement.scrollTop);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1000
    ) {
      document.documentElement.scroll;
      setInitCard((init) => init + maxCards);
    }
  }

  useEffect(() => {
    dispatch(getProdsUser(userId))
    window.addEventListener("scroll", handleScroll);
    toast.success("Bienvenido!");
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

  // const handlelogout = () => {
  //   dispatch(logout());
  //   sessionStorage.clear();
  //   navigate("/");
  // };

  const handleInicioClick = () => {
    dispatch(resetBoard());
    navigate("/starter");
  };

  const handleCliente = () => {

  }

  //==================================RENDER======================================
  return (
    <Box minHeight={"100vh"} sx={{ display: "flex" }}>
      <CssBaseline />
      <Toaster
        toastOptions={{ style: { background: "gray", color: "white" } }}
      />
      {/* ---------------------------------APP BAR----------------------------     */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          height: "64px",
        }}
      >
        {/* <Toolbar sx={{ backgroundColor: palette.appBar }}> */}
        <Toolbar sx={{ backgroundColor: colorPrimario }}>
          <Grid
            item
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100vw"}
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
                // noWrap
                component="div"
                sx={{ fontSize: { xs: "100%", md: "130%", md: "160%" } }}
              >
                {sloganOwner}
              </Typography>
            </Grid>
            <Grid item display={"flex"}>
              
              <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "gray",
                  color: "white",
                  fontSize: { xs: "80%", md: "90%", md: "100%", marginLeft: 7 },
                }}
                onClick={handleCliente}
              >
                Cliente
              </Button>
              
              <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "gray",
                  color: "white",
                  fontSize: { xs: "80%", md: "90%", md: "100%", marginLeft: 7 },
                }}
                onClick={handleInicioClick}
              >
                Inicio
              </Button>

              {/* <Button
                variant="outlined"
                sx={{
                  // backgroundColor: "gray",
                  color: "white",
                  fontSize: { xs: "80%", md: "90%", md: "100%", marginLeft: 7 },
                }}
                onClick={handlelogout}
              >
                salir
              </Button> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
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
        >
          <DrawerContent />
        </Drawer>
      </Box>

      {/* -------------------------------BOARD------------------------- */}
      <Box
        component="main"
        backgroundColor={colorSecundario}
        sx={{ width: { md: `calc(100% - ${drawerWidth}px)`, sm: "100%" } }}
      >
        <Toolbar />

        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          sx={{ flexWrap: "wrap" }}
        >
          {cardsOnDisplay.length > 0
            ? cardsOnDisplay.map((prod, index) => {
                let estado = 1;
                if (prod.existencia / prod.rotacion <= prod.limitado / 100) {
                  estado = 4;
                }
                if (prod.existencia / prod.rotacion <= prod.agotado / 100) {
                  estado = 3;
                }
                //1-disponible / 2-llegado / 3-agotado / 4-limitado
                return (
                  <Card
                    key={index}
                    ind={index}
                    id={prod.id}
                    nombre={prod.nombre}
                    Barras={prod.codigoBarras}
                    precio_base={prod.precioBase}
                    prodImg={prod.prodUrl}
                    descripcion={prod.descripcion}
                    categoria={prod.category?.name} //array of objects with name:""
                    iva={prod.tax?.tax}
                    icons={prod.icons} //array of objects with iconUrl
                    estado={estado}
                    existencia={prod.existencia}
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
