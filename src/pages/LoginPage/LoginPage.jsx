import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts, getAuthUser } from "../../redux/actions";
import axios from "axios";
import {dataDb} from "../../dataDb"

//===========================COMPONENT=============================
function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //---------------------------HANDLES------------------------------

  const handleLoadDb = async () => {
    try {
      console.log(dataDb);
      await axios.post("/load", dataDb);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAuthUser(id));
    dispatch(getAllProducts(id));
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
        sx={{ boxShadow: 10 }}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography textAlign={"center"} variant="h5" margin={2}>
            Ingreso a Calixto
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
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              disabled={id === "" || password === "" ? true : false}
            >
              Ingresar
            </Button>
          </Grid>
        </form>
      </Grid>
      <Button onClick={handleLoadDb}>Load DB</Button>
    </Grid>
  );
}
export default LoginPage;
