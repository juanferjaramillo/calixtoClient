import { useState } from "react";
import { useMediaQuery, Typography, Divider, Grid } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogTitle,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sell } from "../../redux/actions";

//-------------------------COMPONENT------------------------
function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const [openAddCart, setOpenAddCart] = useState(false);
  const [sellQtyL, setSellQtyL] = useState(0);

  const dispatch = useDispatch();
  const sellQtyG = useSelector(state=>state.product.sell)

  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleAddToCart = () => {
    setOpenAddCart(true);
  };

  const handleQtyToCart = () => {
    dispatch(sell(props.id, sellQtyL));
    setOpenAddCart(false);
  };

  const modalCart = (
    <Dialog open={openAddCart} onClose={() => setOpenAddCart(false)}>
      <Grid
        item
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography sx={{ margin: 2 }}>{props.nombre}</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setOpenAddCart(false)}>🆇</Button>
        </Grid>
      </Grid>

      <Divider />
      <DialogTitle>Cantidad:</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ margin: 1 }}
          autoFocus
          id="cant"
          label="cuantos?"
          type="text"
          variant="outlined"
          placeholder={sellQtyG[props.id]}
          onChange={() => setSellQtyL(event.target.value)}
          // fullWidth
        />

        <Button variant="outlined" sx={{ margin: 1 }} onClick={handleQtyToCart}>
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );

  //-------------------------Render---------------------

  return (
    <>
      {modalCart}
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.8}
        flipSpeedFrontToBack={0.8}
      >
        <CardFront
          handleAddToCart={handleAddToCart}
          onClick={handleClick}
          precio_base={props.precio_base}
          iva={props.iva}
          ind={props.ind}
          id={props.id}
          prodImg={props.prodImg}
          nombre={props.nombre}
          categoria={props.categoria}
          estado={props.estado}
          // sell={sell}
        />
        <CardBack
          onClick={() => handleClick()}
          ind={props.ind}
          prodImg={props.prodImg}
          descripcion={props.descripcion}
          icons={props.icons}
          Barras={props.Barras}
          existencia={props.existencia}
        />
      </ReactCardFlip>
    </>
  );
}

export default Card;
