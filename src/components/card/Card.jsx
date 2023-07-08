import { useState } from "react";
import {
  useMediaQuery,
  Typography,
  Divider
} from "@mui/material";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront"
import CardBack from "./CardBack"
import { Dialog, DialogContent, TextField, DialogTitle, Button } from "@mui/material";

//-------------------------COMPONENT------------------------
function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const [openAddCart, setOpenAddCart] = useState(false)


  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleAddToCart = () => {
    setOpenAddCart(true)
  }

  const modalCart = (
    <Dialog
    open = {openAddCart}
    onClose={()=>setOpenAddCart(false)}
    >
        <Typography
        sx={{margin:2}}
        >{props.nombre}</Typography>
        <Divider />
      <DialogTitle>Cantidad:</DialogTitle>
      <DialogContent>
        
        <TextField 
        sx={{margin:1}}
        autoFocus
        id="cant"
        label="cuantos?"
        type="number"
        variant="outlined"
        // fullWidth
        />
        <Button
        variant="outlined"
        sx={{margin:1}}
        onClick={()=>setOpenAddCart(false)}
        >Cancelar</Button>
        <Button
        variant="outlined"
        sx={{margin:1}}
        onClick={()=>setOpenAddCart(false)}
        >OK</Button>
      </DialogContent>
    </Dialog>
  )

  //-------------------------Render---------------------

  return (
    <>
    {modalCart}
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal"
    flipSpeedBackToFront={0.8}
    flipSpeedFrontToBack={0.8}
    >
      <CardFront 
      handleAddToCart = {handleAddToCart}
      onClick={handleClick} 
      precio_base={props.precio_base}
      iva={props.iva}
      ind={props.ind}
      id={props.id}
      prodImg={props.prodImg}
      nombre={props.nombre}
      categoria={props.categoria}
      estado={props.estado}
      />
      <CardBack
      onClick={()=>handleClick()} 
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
