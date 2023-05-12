import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import { Box, Grid, Typography } from "@mui/material";

function Board() {
  const FiltProds = useSelector((state) => state.filteredProducts);

  return (
    <Box>
      <Grid
        container
        paddingTop={"5vw"}
        justifyContent={"center"}
      >
        {FiltProds.length > 0
          ? FiltProds.map((prod, index) => {
              return (
                <Card
                  key={index}
                  codigo={prod.codigo}
                  prodImg={prod.prodImg}
                  nombre={prod.nombre}
                  precio_base={prod.precio_base}
                  precio_total={prod.precio_total}
                  // provider={prod.providers[0].nombre}
                  categoria={prod.category.name}
                />
              );
            })
          : null}
      </Grid>
    </Box>
  );
}

export default Board;
