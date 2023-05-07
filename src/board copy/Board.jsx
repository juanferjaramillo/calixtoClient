import { useSelector } from "react-redux";
import style from "./board.module.css"
import Card from "../card/Card.jsx";

function Board() {
  const FiltProds = useSelector((state) => state.filteredProducts);

  return (
    <div className={style.container}>
      {FiltProds.length > 0
        ? FiltProds.map((prod) => {
          console.log(prod);
            return (
                <Card
                  codigo={prod.codigo}
                  prodImg={prod.prodImg}
                  nombre={prod.nombre}
                  precio_base={prod.precio_base}
                  precio_total={prod.precio_total}
                  provider={prod.providers[0].nombre}
                />
            );
          })
        : null}
    </div>
  );
}

export default Board;