import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProdsUser, getAuthUser } from "../../redux/actions";
import Login from "../../components/login/Login"
// import {dataDb} from "../../dataDb"

const styles = {
  principal: {
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    fontWeight: "bold",
    border: "1px solid",
    width: "100vw",
    height: "100vh",
  },
  secondary: {
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    fontWeight: "bold",
    border: "1px solid",
    width: "100vw",
    height: "100vh",
  }
}

// //===========================COMPONENT=============================
function LoginPage() {

  return (
    <Box>
      <Grid container sx={styles.principal}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Aquí va lo decorativo/visual de la landing</Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Login />
        </Grid>
      </Grid>
      <Box sx={styles.secondary}>
        <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}>Resto de lo decorativo/informacional</Typography>
      </Box>
    </Box>
  )



//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [idError, setIdError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     setId(localStorage.getItem("User"));
//   },[])


//   //---------------------------HANDLES------------------------------

//   // const handleLoadDb = async () => {
//   //   try {
//   //     await axios.post("/load", dataDb);
//   //   } catch (err) {
//   //     alert(err.message);
//   //   }
//   // };

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     dispatch(getAuthUser(id));  //brings the authUser to the state
//     dispatch(getProdsUser(id)); //brings products and providers of that user to the state
//     // dispatch(getProvidersOfProducts);
//     navigate("/products");
//   };

//   const handleIdChange = (event) => {
//     setId(event.target.value);
//     validateForm(event.target.value, password);
//   };
//   const handlePswChange = (event) => {
//     setPassword(event.target.value);
//     validateForm(id, event.target.value);
//   };

//   const validateForm = (id, psw) => {
//     if (id == "") {
//       setIdError(true);
//     } else setIdError(false);
//     if (psw == "") {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }
//   };

//   //--------------------------RENDER----------------------------
//   return (
//     <Grid container justifyContent={"center"} height={"100vh"} border={1}>
//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={6}
//         lg={4}
//         p={5}
//         mt={5}
//         border={1}
//         height={"55vh"}
//         sx={{ boxShadow: 10 }}
//       >
//         {/* <Button onClick={handleLoadDb}>Load DB</Button> */}

//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <Typography textAlign={"center"} variant="h5" margin={2}>
//             Ingreso a Calixto
//           </Typography>

//           <TextField
//             label="Usuario"
//             onChange={handleIdChange}
//             required
//             variant="outlined"
//             color="secondary"
//             type="text"
//             sx={{ mb: 3 }}
//             fullWidth
//             value={id}
//             error={idError}
//           />

//           <TextField
//             label="Contraseña"
//             onChange={handlePswChange}
//             required
//             variant="outlined"
//             color="secondary"
//             type="password"
//             value={password}
//             autoFocus
//             error={passwordError}
//             fullWidth
//             sx={{ mb: 3 }}
//           />

//           <Grid display={"flex"} justifyContent={"center"} item>
//             <Button
//               variant="outlined"
//               color="secondary"
//               type="submit"
//               disabled={id === "" || password === "" ? true : false}
//             >
//               Ingresar
//             </Button>
//           </Grid>
//         </form>
      
//       </Grid>
//     </Grid>
//   );
}
export default LoginPage;
