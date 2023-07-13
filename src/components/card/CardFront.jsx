import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
  const clientValid = useSelector((state) => state.users?.client?.id);
  const sell = useSelector((state)=> state.product.sell)
  const theme = useTheme();

  let PB = Number(props.precio_base).toFixed();
  let PT = ((1 + Number(props.iva) / 100) * Number(PB)).toFixed();
  PB = PB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  PT = PT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  colorsDot(props.estado);
  // console.log("clienteValido", clientValid);
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
        {clientValid ? (
          <Badge
          // badgeContent={props.sell}
          badgeContent={sell[props.id]}
          >
          <Grid
            item
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ ml: 2, cursor: "pointer" }}
            border={1}
            borderColor={"lightgrey"}
            color={"grey"}
            borderRadius={"50%"}
            width="40px"
            height="40px"
            onClick={props.handleAddToCart}
          >
            <AddShoppingCartIcon />
          </Grid>
          </Badge>
        ) : (
          <Grid item width="60px" height="30px"></Grid>
        )}

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
