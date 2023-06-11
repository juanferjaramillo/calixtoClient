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

let colorD = "purple";

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
      //agotado
      return (colorD = "red");
      break;
    case 3:
      //llegado
      return (colorD = "blue");
      break;
    case 4:
      //escaso
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

  const cats = props.categorias?.map(
    (cat) => cat.name.toString().split("/")[3]
  );
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      key={props.ind}
      margin={1}
      border={1}
      className={flipped ? style.backCard : style.frontCard}
      sx={{
        width: isMobile ? "80vw" : "25vw",
        minWidth: isMobile ? "250px" : "290px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 8,
        borderRadius: 2,
        p: 1,
        borderColor: "lightgray",
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
            minHeight: "65vh",
            className: "style.turn",
            cursor: "pointer",
          }}
        >
          <Typography variant="body1">{`Codigo: ${props.Barras}`}</Typography>

          <Typography fontSize={11} textAlign="center" p={1} boxShadow={2}>
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
                    width: 35,
                    height: 35,
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
            minHeight: "65vh",
            cursor: "pointer",
          }}

          //border={1}
        >
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {`Codigo: ${props.codigo}`}
          </Typography>

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="220vh"
            width="240vh"
            alt="producto"
          />

          <Typography
            variant="body1"
            fontWeight={"500"}
            sx={{
              textAlign: "center",
              p: 1,
            }}
          >
            {props.nombre}
          </Typography>
          <Divider sx={{ width: "80%" }} />
          <Typography variant="body2">{`Precio sin IVA: $ ${PB}`}</Typography>
          <Typography variant="body2">{`Precio con IVA: $ ${PT}`}</Typography>

          {colorsDot(props.estado)}

          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent=""
            variant="dot"
          >
            <Grid item width={300} textAlign={"center"}>
              {cats?.map((k, i) => {
                return (
                  <Typography key={i} variant="body2">
                    {k}
                  </Typography>
                );
              })}
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
