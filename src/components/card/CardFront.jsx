import {
  Box,
  Grid,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

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

//==========================COMPONENT=========================
export default function CardFront(props) {
  const theme = useTheme();

  let PB = Number(props.precio_base).toFixed();
  let PT = ((1 + Number(props.iva) / 100) * Number(PB)).toFixed();
  PB = PB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  PT = PT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  colorsDot(props.estado);

  //------------------------RENDER-------------------------

  return (
    <Box
      key={props.ind}
      margin={1}
      sx={{
        width: "320px",
        height: "530px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 8,
        borderRadius: 2,
        p: 1,
      }}
    >
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        sx={{
          height: "50px",
        }}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ pl: 3, cursor: "pointer" }}
          // border={1}
          width="60px"
          height="30px"
          fontSize={30}
          onClick={props.handleAddToCart}
        >
          🛒
        </Grid>
        <Typography
          variant="body1"
          // border={1}
          sx={{
            width: "200px",
            textAlign: "center",
          }}
        >
          {`Código: ${props.id}`}
        </Typography>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          badgeContent=""
          variant="dot"
        >
          <Grid item sx={{ width: "20px" }}></Grid>
        </StyledBadge>
      </Grid>
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        onClick={props.onClick}
        justifyContent={"space-around"}
        sx={{
          height: "450px",
          cursor: "pointer",
        }}
      >
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
          <Typography variant="body2">{props.categoria}</Typography>
          {/* ); */}
          {/* })} */}
        </Grid>
      </Grid>
    </Box>
  );
}
