import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const colorDot = "green";
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

  let PB = Number(props.precio_base).toFixed();
  let PT = ((1+Number(props.iva)/100)* Number(PB)).toFixed();
  PB = PB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  PT = PT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const cat = props.categoria.toString().split("/")[3];

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      margin={1}
      border={1}
      sx={{
        width: isMobile ? "80vw" : "25vw",
        minWidth: isMobile ? "250px" : "290px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 8,
        borderRadius: 2,
        p: 1,
        borderColor: "lightgray"
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
          className={flipped ? "backCard" : "frontCard"}
          sx={{
            minHeight: "65vh",
          }}
        >
          <Typography variant="body1">{`Codigo: ${props.Barras}`}</Typography>
          {/* <Divider sx={{ width: "80%" }} /> */}
          <Typography
            fontSize={11}
            textAlign="center"
            p={1}
            boxShadow={2}
            >
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
          
          {/* <StyledBadge>
            <Avatar
              src={props.prodImg}
              alt="producto"
              variant="square"
              sx={{ width: "100%", height: 180, marginBottom: 2 }}
            />
          </StyledBadge> */}

          <Divider sx={{ width: "80%" }} />
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            marginTop={1}
            // sx={{backgroundColor: "lightgreen", width: "100%", textAlign: "center"}}
          >
            {props.class.map((icon,i)=>{
              return(
                <Avatar
                alt="icon"
                src={icon.iconUrl}
                sx={{width:35, 
                  height:35, 
                  marginRight: 0.5,
                  marginLeft: 0.5}}
                >
                </Avatar>
              )
            })
            }

            {/* <Typography variant="h6">🅺🅴 • 🅅🄰 • 🅳🅱</Typography>
            <Typography variant="h6">🄶🄻 • 🅅🄴 • 🅿🆁</Typography> */}
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
          {/* <Divider sx={{ width: "80%" }} /> */}

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="220vh"
            width="240vh"
            alt="producto"
            // border="1"
          />

          {/* <Avatar
          style={{objectFit: "contain"}}
            src={props.prodImg}
            alt="producto"
            variant="square"
            sx={{ width: 180, height: 180, marginBottom: 2 }}
          /> */}

          <Typography
            variant="body1"
            fontWeight={"500"}
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
