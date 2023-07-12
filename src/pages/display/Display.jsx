import { useEffect, useRef, useState } from "react";
import Appbar from "./AppBar/";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../../components/card/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProdsUser, logout, getClient } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import DrawerContent from "../../components/drawer/Drawer";
import { resetBoard } from "../../redux/actions";
import { searchClient, exitClient, clearSells } from "../../redux/actions";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
let ss = 0;
const drawerWidth = 180;
const maxCards = 6; //number of cards to render at a time

//===================================COMPONENT=====================================
function Display() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [initCard, setInitCard] = useState(0);
  const [render, setRender] = useState(true);
  const [cardsOnDisplay, setCardsOnDisplay] = useState([]);
  const [open, setOpen] = useState(false);
  const [crearCliente, setCrearCliente] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCell, setClientCell] = useState("");

  const userId = useSelector((state) => state.users.authUser.id);
  const clienteBuscado = useSelector((state) => state.users.client);
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
  const sells = useSelector((state) => state.product.sell);
  console.log("sells at beginning", sells);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
  const isSmallScreen = useMediaQuery(`(max-width: 900px)`);
  let data = [];

  useEffect(() => {
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

  useEffect(() => {
    console.log("clienteBuscado2", clienteBuscado);
    if (clienteBuscado) {
      setClientName(clienteBuscado.name);
      setOpen(false);
    } else {
      toast.error("Este cliente no existe aún 🤨");
    }
  }, [clienteBuscado]);

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

  const handleInicioClick = async () => {
    dispatch(resetBoard());
    setClientId("");
    setClientName("");
    setClientEmail("");
    setClientCell("");
    console.log("userId", userId);
    console.log('clienteBuscado',clienteBuscado);
    await axios.post('/recSell', {userId, clienteBuscado, sells})
    dispatch(exitClient());
    dispatch(clearSells());
    navigate("/starter");
  };

  const handleCloseClient = () => {
    setOpen(false);
  };

  const handleOpenCliente = () => {
    setOpen(true);
  };

  const handleCrearCliente = () => {
    const newClient = {
      id: clientId,
      name: clientName,
      email: clientEmail,
      phone: clientCell,
      userId: userId,
    };
    dispatch(getClient(newClient));
    // await axios.post("/client", newClient);
    setOpen(false);
    setCrearCliente(false);
    toast("Cliente creado 👍🏻");
  };

  const handleBuscarCliente = async () => {
    console.log("cl", clientId);
    dispatch(searchClient(clientId));
  };

  //-------------------------Modal Cliente------------------------------
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
          onChange={() => setClientId(event.target.value)}
          // fullWidth
        />
        {crearCliente ? null : (
          <Button
            variant="outlined"
            sx={{ margin: 1 }}
            onClick={handleBuscarCliente}
          >
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
              onChange={() => setClientName(event.target.value)}
              fullWidth
            />
            <TextField
              id="emailCliente"
              label="email"
              type="text"
              sx={{ margin: 1 }}
              onChange={() => setClientEmail(event.target.value)}
              fullWidth
            />
            <TextField
              id="phoneCliente"
              label="Celular"
              type="text"
              sx={{ margin: 1 }}
              onChange={() => setClientCell(event.target.value)}
              fullWidth
            />
          </>
        ) : (
          <Button
            variant="contained"
            sx={{ margin: 1 }}
            onClick={() => setCrearCliente(true)}
          >
            Crear / Editar
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
          >
            Listo!
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
        // toastOptions={{ style: { background: "gray", color: "white" } }}
        />
        {/* ---------------------------------APP BAR----------------------------     */}
        <Appbar
          drawerWidth={drawerWidth}
          colorPrimario={colorPrimario}
          sloganOwner={sloganOwner}
          handleDrawerToggle={handleDrawerToggle}
          handleCliente={handleOpenCliente}
          handleInicioClick={handleInicioClick}
          clientName={clientName}
        />

        {/* ----------------------------------DRAWER----------------------------- */}
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
          {/* para hacer espacio a la AppBar */}

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

      {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}> */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SearchIcon />}
      >
        <SpeedDialAction
          key="busqueda"
          icon={<SearchIcon />}
          tooltipTitle="Buscar Producto"
        ></SpeedDialAction>
      </SpeedDial>
    </>
  );
}

export default Display;
