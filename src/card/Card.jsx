import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { margin } from "@mui/system";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const colorDot = "red";
// const colorDot = "orange"
// const colorDot = "green";
// const colorDot = '#44b700'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: colorDot,
    color: colorDot,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

//-------------------------COMPONENT------------------------
function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const PB = props.precio_base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const PT = props.precio_total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const cat = props.categoria.toString().split("/")[3];

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      margin={1}
      sx={{
        width: isMobile ? "80vw" : "20vw",
        minWidth: isMobile ? "260px" : "270px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
      }}
    >
      {flipped ? (
        //-------------------------------BACK CARD-----------------------------------
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          onMouseLeave={handleClick}
          className={flipped ? "backCard" : "frontCard"}
          sx={{
            minHeight: "50vh",
          }}
        >
          <Typography variant="body1">{`Codigo: ${props.codigo}`}</Typography>
          <Divider sx={{ width: "80%" }} />
          <Typography variant="body2" textAlign="center" p={1}
          borderRadius={1}
          border={1}
          // boxShadow={1}
          // sx={{backgroundColor: "lightgray", width: "100%", textAlign: "center" }}
          >
            El alimento natural más saludable que puede encontrar en el mercado
            al mejor precio y cerca de usted!
          </Typography>

          <StyledBadge>
            <Avatar
              src={props.prodImg}
              alt="producto"
              variant="square"
              sx={{ width: "100%", height: 180, marginBottom: 2 }}
            />
          </StyledBadge>

          <Divider sx={{ width: "80%" }} />
          <Grid item marginTop={2} borderRadius={2} boxShadow={1}
          // sx={{backgroundColor: "lightgreen", width: "100%", textAlign: "center"}}
          >
            <Typography variant="h6">🅺🅴 • 🅅🄰 • 🅳🅱</Typography>
            <Typography variant="h6">🄶🄻 • 🅅🄴 • 🅿🆁</Typography>
          </Grid>
        </Grid>
      ) : (
        //-------------------------------FRONT CARD-----------------------------------
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          onClick={handleClick}
          className={flipped ? "backCard" : "frontCard"}
          sx={{
            minHeight: "65vh",
            // borderColor: 'orange',
            // borderWidth: 2,
            // borderStyle: 'solid'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              textAlign: "center",
              //border: 3, borderColor: 'orange',
            }}
          >
            {`Codigo: ${props.codigo}`}
          </Typography>
          <Divider sx={{ width: "80%" }} />

          <StyledBadge>
            <Avatar
              src={props.prodImg}
              alt="producto"
              variant="square"
              sx={{
                height: 180,
                width: "100%",
                // border: 1,
                // borderColor: "orange",
              }}
            />
          </StyledBadge>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              //border: 3,
              //borderColor: 'red',
              p: 1,
            }}
          >
            {props.nombre}
          </Typography>
          <Divider sx={{ width: "80%" }} />
          <Typography variant="body2">{`Precio sin IVA: $ ${PB}`}</Typography>
          <Typography variant="body2">{`Precio con IVA: $ ${PT}`}</Typography>

          <StyledBadge
            overlap="rectangular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Grid item width={200} textAlign={"center"}>
              <Typography variant="body2">{cat}</Typography>
            </Grid>
          </StyledBadge>

          {/* <Box
            sx={{
              width: "80%",
              textAlign: "right",
              pt: 1,
            }}
          >
            <Typography variant="body2" fontSize={10}>
              🔴 🟡 🟢
            </Typography>
          </Box> */}
        </Grid>
      )}
    </Box>
  );
}

export default Card;
