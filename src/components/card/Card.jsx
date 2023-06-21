import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import style from "./card.module.css";

let colorD = "white";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: colorD,
    color: colorD,
    // width: "1vw",
    // height: "1vw",
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

const colorsDot = (id) => {
  switch (id) {
    case 1:
      //disponible
      return (colorD = "green");
      break;
    case 2:
      //llegado
      return (colorD = "blue");
      break;
    case 3:
      //agotado
      return (colorD = "red");
      break;
    case 4:
      //limitado
      return (colorD = "orange");
      break;
    default:
      break;
  }
};

//-------------------------COMPONENT------------------------
function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let PB = Number(props.precio_base).toFixed();
  let PT = ((1 + Number(props.iva) / 100) * Number(PB)).toFixed();
  PB = PB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  PT = PT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleClick = () => {
    setFlipped(!flipped);
  };

  colorsDot(props.estado)

  return (
    <Box
      key={props.ind}
      margin={1}
      // border={1}
      className={flipped ? style.backCard : style.frontCard}
      sx={{
        // width: isMobile ? "80vw" : "25vw",
        // minWidth: "320px",
        width: "320px",
        // minWidth: isMobile ? "310px" : "310px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 8,
        borderRadius: 2,
        p: 1,
        // borderColor: "purple",
        // borderColor: "lightgray",
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
          onClick={handleClick}
          sx={{
            height: "500px",
            className: "style.turn",
            cursor: "pointer",
          }}
        >
          <Typography variant="body1">{`Codigo: ${props.Barras}`}</Typography>

          {/* EXISTENCIA EN INVENTARIO------------------------------------------------------ */}
          <Typography variant="body2">{`0315`}</Typography>

          <Typography fontSize={13} textAlign="justify" p={1} boxShadow={2}>
            {props.descripcion}
          </Typography>

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="150vh"
            width="240vh"
            alt="producto"
            // border="1"
          />

          <Divider sx={{ width: "80%" }} />
          <Grid item display={"flex"} justifyContent={"center"} marginTop={1}>
            {props.icons?.map((icon, i) => {
              return (
                <Avatar
                  key={i}
                  alt="icon"
                  src={icon.iconUrl}
                  sx={{
                    width: 40,
                    height:40,
                    marginRight: 0.5,
                    marginLeft: 0.5,
                  }}
                ></Avatar>
              );
            })}
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
          sx={{
            height: "500px",
            cursor: "pointer",
          }}

        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent=""
            variant="dot"
          >
  
              <Typography
                variant="body1"
                sx={{
                  width: "310px",
                  textAlign: "center",
                }}
              >
                {`Código: ${props.codigo}`}
              </Typography>
       
          </StyledBadge>

        

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="220vh"
            width="300vh"
            alt="producto"
            // border="1"
          />

          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{
              textAlign: "center",
              width: "310px",
              p: 1,
            }}
          >
            {props.nombre}
          </Typography>
          <Divider sx={{ width: "80%" }} />
          <Typography variant="body2">{`Precio sin IVA: $ ${PB}`}</Typography>
          <Typography variant="body2">{`Precio con IVA: $ ${PT}`}</Typography>

          <Grid item width={300} textAlign={"center"}>
         
            <Typography variant="body2">
              {props.categoria}
              </Typography>
            {/* ); */}
            {/* })} */}
          </Grid>

        </Grid>
      )}
    </Box>
  );
}

export default Card;
