import { useState } from "react";
import style from "./card.module.css";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';

function Card(props) {
  const [fliped, setFliped] = useState(false);

  const PB = props.precio_base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const PT = props.precio_total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleClick = () => {
    setFliped(!fliped);
  };

  let cat = props.categoria.toString().split("/")[3];

  //------------------------RENDER---------------------------
  return (
    <Box
      sx={{
        width: "25vw",
        minWidth: "320px",
        // borderColor: "red",
        // borderStyle: "solid",
      }}
    >
      {fliped ? (
        // ------------------------CARD BACK---------------------

        <Grid
          container
          onMouseLeave={handleClick}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          width={"85%"}
          height={"70vh"}
          className={fliped ? style.backCard : style.frontCard}
          sx={{}}
        >
          <Grid item>{`Codigo: ${props.codigo}`}</Grid>

          <hr className={style.line}></hr>

          <Grid item>
            <Typography
              marginRight={"1vw"}
              marginLeft={"1vw"}
              display="block"
              textAlign={"center"}
            >
              El alimento natural mas saludable que puede encontrar en el
              mercado al mejor precio y cerca de usted!
            </Typography>
          </Grid>

          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            maxWidth={"90%"}
            maxHeight={"45%"}
          >
            <Avatar src={props.prodImg} alt="producto"
            variant="square"
            sx={{ width: 200, height: 200 }}
            />
          </Grid>

          <Typography variant="h6">🅺🅴 • 🅅🄰 • 🅳🅱</Typography>
          <Typography variant="h6">🄶🄻 • 🅅🄴 • 🅿🆁</Typography>
        </Grid>
      ) : (
        // ------------------------CARD FRONT---------------------
        <Grid
          container
          onClick={handleClick}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          width={"85%"}
          height={"70vh"}
          className={fliped ? style.backCard : style.frontCard}
        >
          <Grid item>
            <Typography>{`Codigo: ${props.codigo}`}</Typography>
            <Divider />
          </Grid>

          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            width={"30%"}
            maxHeight={"45%"}
          >
            <Avatar src={props.prodImg} alt="producto"
            variant="square"
            sx={{ width: 200, height: 200 }}
            />
          </Grid>

          <Grid item
          textAlign={"center"}
          paddingLeft={1}
          paddingRight={1}
          >
            <Typography>{props.nombre}</Typography>
            <Divider />
          </Grid>

          <Grid item
          textAlign={"center"}
          >
            <Typography>
              {/* {`precio sin IVA: $ ${props.precio_base}`} */}
              {`Precio sin IVA: $ ${PB}`}
            </Typography>
            <Typography>{`Precio con IVA: $ ${PT}`}</Typography>
            <Typography>{cat}</Typography>
          </Grid>
          <Grid 
          item
          width={"80%"}
          textAlign={"right"}
          >
          
            <Typography 
            fontSize={10}
            >🔴 🟡 🟢</Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
export default Card;
