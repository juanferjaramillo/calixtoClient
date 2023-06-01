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
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const [provid, setProvid] = useState ([])

  const filtProds = useSelector((state) => state.product.filteredProducts);
  const providers = useSelector((state) => state.product.providers);
  const logoOwner = useSelector((state) => state.users.authUser?.logoOwner);
  const nameOwner = useSelector((state)=>state.users.authUser?.name)
  const sloganOwner = useSelector((state)=>state.users.authUser?.sloganOwner)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);


  //---------------------HANDLES----------------------

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFilterProviderChange = (event) => {
    setFBP(event.target.value);
    //to keep the selection box updated
    dispatch(filterByProvider(event.target.value));
    //textInput.current.reset();
  };

  const handleInput = (event) => {
    inputRef.current.value = event.target.value.trim().toLowerCase();
  };

  const handleBuscarClick = () => {
    dispatch(filterByName(inputRef.current.value));
  };

  const handleResetClick = () => {
    inputRef.current.value = "";
    setFBP("TODOS");
    dispatch(resetBoard());
  };

  const handlelogout = () => {
    dispatch(getAuthUser());
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
                <MenuItem key={i} value={p}>
                  {p.name}
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
          sx={{ width: "50%", ml: 5, mt: 1 }}
          onClick={handleBuscarClick}
        >
          Buscar
        </Button>
     
      <Divider sx={{ marginTop: 5, marginBottom: 3 }} />

      <Button
        variant="contained"
        color="error"
        sx={{ width: "50%", ml: 5 }}
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

  //---------------------------------CONTAINER--------------------------
  const container =
    window !== undefined ? () => window().document.body : undefined;

    const isSmallScreen = useMediaQuery(`(max-width: 600px)`);
    // console.log("isSmallScreen");
    // console.log(isSmallScreen);

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
          open = {isSmallScreen ? mobileOpen : true}
          onClose = {isSmallScreen ? handleDrawerToggle : null}
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
          {filtProds.length > 0
            ? filtProds.map((prod, index) => {
                return (
                  <Card
                    Key={index}
                    codigo={prod.codigo}
                    nombre={prod.nombre}
                    Barras={prod.codigoBarras}
                    precio_base={prod.precioBase}
                    prodImg={prod.prodUrl}
                    descripcion={prod.descripcion}
                    categorias={prod.categories}  //array of objects with name:""
                    iva={prod.tax?.tax}
                    icons={prod.icons} //array of objects with iconUrl
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
