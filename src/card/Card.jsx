import { useState } from "react";
import style from "./card.module.css";
import { Box, Grid, Typography } from "@mui/material";

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

  return (
    <Box>
      <Grid container
        margin={"auto"}
        sx={{
          width: "25vw",
          minWidth: "320px",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap"
          // borderColor: "red",
          // borderStyle: "solid",
        }}>
    
        {fliped ? (
          // ------------------------CARD BACK---------------------
  
             <Grid container
            onMouseLeave={handleClick}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            width={"85%"}
            height={"70vh"}
            className={fliped ? style.backCard : style.frontCard}
            sx={{
          }}
          >
            <Grid item className={style.codigo}>{`Codigo: ${props.codigo}`}</Grid>
            
            <hr className={style.line}></hr>

            <Grid item>
              <Typography
              marginRight={"1vw"} marginLeft={"1vw"} display="block" textAlign={"center"}>
                El alimento natural mas saludable que puede encontrar en el
                mercado al mejor precio y cerca de usted!
              </Typography>
            </Grid>

            <Grid item className={style.image}>
              <img
                className={style.img}
                src={props.prodImg}
                alt="producto"
              ></img>
            </Grid>
            
            <Typography variant="h6">🅺🅴  •  🅅🄰  •  🅳🅱</Typography>
            <Typography variant="h6">🄶🄻  •  🅅🄴  •  🅿🆁</Typography>
          </Grid>
        ) : (
          // ------------------------CARD FRONT---------------------
          <Grid container
            onClick={handleClick}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            width={"85%"}
            height={"70vh"}
            className={fliped ? style.backCard : style.frontCard}
            sx={{
          }}
          >
            <Typography className={style.codigo}>{`Codigo: ${props.codigo}`}</Typography>
            <hr className={style.line}></hr>

            <div className={style.image}>
              <img
                className={style.img}
                src={props.prodImg}
                alt="producto"
              ></img>
            </div>

            <Typography className={style.nombre}>{props.nombre}</Typography>

            <hr className={style.line}></hr>

            <Typography className={style.precio}>
              {/* {`precio sin IVA: $ ${props.precio_base}`} */}
              {`Precio sin IVA: $ ${PB}`}
            </Typography>
            <Typography className={style.precio}>{`Precio con IVA: $ ${PT}`}</Typography>
            <Typography className={style.proveedor}>{cat}</Typography>
            <Typography variant="h7" className={style.lights}>🔴 🟡 🟢</Typography>
          </Grid>
        )}
  
      </Grid>
    </Box>
  );
}
export default Card;
