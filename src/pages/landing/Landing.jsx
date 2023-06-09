import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Login from "../../components/login/Login";
import { logout } from "../../redux/actions";
import { useDispatch } from "react-redux";
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
  },
};

// //===========================COMPONENT=============================
function LoginPage() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <Box>
      <Grid container sx={styles.principal}>
        <Grid
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}
        >
          <Grid item width={"90%"} sx={{ boxShadow: 10 }}>
            <img
              src="https://res.cloudinary.com/sthemma/calixto/Cover_lrghp5.jpg"
              style={{ objectFit: "contain" }}
              //height={}
              width={"100%"}
              sx={{ boxShadow: "15" }}
            ></img>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          sx={{
            // border: "1px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Login />
        </Grid>
      </Grid>
      {/* <Box sx={styles.secondary}>
        <Typography
          sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          Resto de lo decorativo/informacional
        </Typography>
      </Box> */}
    </Box>
  );
}
export default LoginPage;
