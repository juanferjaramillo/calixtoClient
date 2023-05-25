import { useEffect, useState } from "react";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "../../components/card/Card";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {
  filterByProvider,
  filterByName,
  resetBoard,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../../redux/actions";

const drawerWidth = 180;

//------------------------------COMPONENT-------------------------
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [FBP, setFBP] = useState("TODOS");
  const [nombre, setNombre] = useState("");

  const filtProds = useSelector((state) => state.product.filteredProducts);
  const providers = useSelector((state) => state.product.providers);
  const logoOwner = useSelector((state) => state.users.authUser.logoowner);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //---------------------HANDLES----------------------

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const handlelogout = () => {
    dispatch(getAuthUser());
    navigate("/");
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid item
      >
        <img
        width={"100%"}
          alt="Logo SF"
          src={logoOwner}
          sx={{objectFit:"contain"}}
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
            {providers.map((p, i) => {
              return (
                <MenuItem key={i} value={p}>
                  {p}
                </MenuItem>
              );
            })}
          </Select>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"producto"} disablePadding>
          <Input
            placeholder="Producto"
            sx={{ width: "100%" }}
            onChange={handleInput}
            value={nombre}
          ></Input>
        </ListItem>
        <ListItem key={"buscar"} disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              sx={{ width: "50%", marginLeft: "25%" }}
              onClick={handleBuscarClick}
            >
              Buscar
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"reset"} disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "50%", marginLeft: "25%" }}
              onClick={handleResetClick}
            >
              Reset
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        variant="outlined"
        color="error"
        sx={{
          width: "50%",
          position: "absolute",
          marginTop: "85vh",
          marginLeft: "25%",
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //-----------------------RENDER-----------------------
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
        <Toolbar>
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
            Catálogo de Productos
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        border={3}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        {/* -------------------------------MOBILE DRAWER------------------------- */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* -------------------------------DESKTOP DRAWER------------------------- */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
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
          {filtProds.length > 0
            ? filtProds.map((prod, index) => {
                return (
                  <Card
                    key={index}
                    codigo={prod.codigo}
                    nombre={prod.nombre}
                    Barras={prod.codigoBarras}
                    precio_base={prod.precioBase}
                    prodImg={prod.prodUrl}
                    descripcion={prod.descripcion}
                    categoria={prod.category.name}
                    iva={prod.tax.tax}
                    class={prod.classes}
                    //clases [{iconUrl:"http"},]
                    // provider={prod.providers[0].nombre}
                  />
                );
              })
            : null}
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
