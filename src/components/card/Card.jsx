import { useState } from "react";
import {
  useMediaQuery,
} from "@mui/material";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront"
import CardBack from "./CardBack"

const handleClick = () => {
  setFlipped((flip) => !flip);
};
//-------------------------COMPONENT------------------------
function Card(props) {
  const [flipped, setFlipped] = useState(false);

  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    setFlipped(!flipped);
  };

  //-------------------------Render---------------------

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal"
    flipSpeedBackToFront={0.8}
    flipSpeedFrontToBack={0.8}
    >
      <CardFront 
      onClick={()=>handleClick()} 
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
      />
    </ReactCardFlip>
  );
}

export default Card;
