import { useEffect, useRef, useState } from "react";
import Appbar from "./AppBar/";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "../../components/card/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProdsUser, logout } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import DrawerContent from "../../components/drawer/Drawer";
import { resetBoard } from "../../redux/actions";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
let ss = 0;
const drawerWidth = 180;
const maxCards = 6; //number of cards to render at a time

//======================COMPONENT=======================
function Display() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [initCard, setInitCard] = useState(0);
  const [render, setRender] = useState(true);
  const [cardsOnDisplay, setCardsOnDisplay] = useState([]);
  const [open, setOpen] = useState(false);
  const [crearCliente, setCrearCliente] = useState(false);

  const userId = useSelector((state) => state.users.authUser.id);
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

  useEffect(() => {
    dispatch(getProdsUser(userId));
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

  const handleCloseClient = () => {};

  const handleCliente = () => {
    setOpen(true);
  };

  const handleCrearCliente = () => {
              setOpen(false);
              setCrearCliente(false);
            }

  const modalCliente = (
    <Dialog open={open} onClose={handleCloseClient}>
      <DialogTitle>Clientes</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="id"
          label="identificacion"
          type="text"
          variant="filled"
          // fullWidth
        />
        {crearCliente ? null : (
          <Button variant="outlined" sx={{ margin: 1 }}>
            Buscar
          </Button>
        )}
  
        <Divider />
  
        {crearCliente ? (
          <>
            <TextField
              id="nombreCliente"
              label="Nombre"
              type="text"
              sx={{ margin: 1 }}
              fullWidth
            />
            <TextField
              id="emailCliente"
              label="email"
              type="text"
              sx={{ margin: 1 }}
              fullWidth
            />
            <TextField
              id="phoneCliente"
              label="Celular"
              type="text"
              sx={{ margin: 1 }}
              fullWidth
            />
          </>
        ) : (
          <Button
            variant="contained"
            sx={{ margin: 1 }}
            onClick={() => setCrearCliente(true)}
          >
            Nuevo
          </Button>
        )}
        <Button
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => {
            setOpen(false);
            setCrearCliente(false);
          }}
        >
          Cancelar
        </Button>
  
        {crearCliente ? (
          <Button
            variant="contained"
            sx={{ margin: 1 }}
            onClick={handleCrearCliente}
            // onClick={() => {
            //   setOpen(false);
            //   setCrearCliente(false);
            // }}
          >
            Crear!
          </Button>
        ) : null}
      </DialogContent>
    </Dialog>
  );

  //==================================RENDER======================================
  return (
    <>
      {modalCliente}
  
      <Box minHeight={"100vh"} sx={{ display: "flex" }}>
        <CssBaseline />
        <Toaster
          toastOptions={{ style: { background: "gray", color: "white" } }}
        />
        {/* ---------------------------------APP BAR----------------------------     */}
        <Appbar
          drawerWidth={drawerWidth}
          colorPrimario={colorPrimario}
          sloganOwner={sloganOwner}
          handleDrawerToggle={handleDrawerToggle}
          handleCliente={handleCliente}
          handleInicioClick={handleInicioClick}
        />

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
    </>
  );
}

export default Display;
