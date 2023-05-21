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
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { padding } from "@mui/system";
import { useSelector } from "react-redux";

//------------------------------COMPONENT--------------------------
function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //validateAuthUser:
    // const allUsers = useSelector(state=>state.users)
    navigate("/products");
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
    validateForm(event.target.value, password);
  };
  const handlePswChange = (event) => {
    setPassword(event.target.value);
    validateForm(id, event.target.value);
  };

  const validateForm = (id, psw) => {
    if (id == "") {
      setIdError(true);
    } else setIdError(false);
    if (psw == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  //--------------------------RENDER----------------------------
  return (
    <Grid container justifyContent={"center"} height={"100vh"} border={1}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        p={5}
        mt={5}
        border={1}
        height={"55vh"}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography textAlign={"center"} variant="h5" margin={2}>
            Ingreso al Calixto
          </Typography>

          <TextField
            label="Identificación"
            onChange={handleIdChange}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={id}
            error={idError}
          />

          <TextField
            label="Contraseña"
            onChange={handlePswChange}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Grid display={"flex"} justifyContent={"center"} item>
            <Button variant="outlined" color="secondary" type="submit">
              Ingresar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default LoginPage;
