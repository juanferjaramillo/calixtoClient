import { useState } from "react";
import style from "./card.module.css";

function Card(props) {
  const [fliped, setFliped] = useState(false);

  const PB = props.precio_base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const PT = props.precio_total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleClick = () => {
    setFliped(!fliped);
  };

  let cat = props.categoria.toString().split("/")[3]

  return (
    <>
      <div className={style.container}>
        {fliped ? (
          // ------------------------CARD BACK---------------------
          <div
            // onClick={handleClick}
            onMouseLeave ={handleClick}
            className={fliped ? style.backCard : style.frontCard}
          >
           <div className={style.codigo}>{`Codigo: ${props.codigo}`}</div>
            
            <div>
              <p>El alimento natural mas saludable que puede encontrar en el mercado</p>
              <p>al mejor precio y cerca de usted!</p>
            </div>

            <div className={style.image}>
              <img
                className={style.img}
                src={props.prodImg}
                alt="producto"
              ></img>
            </div>
            <h1>
            🄺 🅅 🅰 🅁
            </h1>
          </div>
        ) : (
          // ------------------------CARD FRONT---------------------
          <div
            // onClick={handleClick}
            onClick ={handleClick}
            className={fliped ? style.backCard : style.frontCard}
          >
            <div className={style.codigo}>{`Codigo: ${props.codigo}`}</div>
            <hr className={style.line}></hr>

            <div className={style.image}>
              <img
                className={style.img}
                src={props.prodImg}
                alt="producto"
              ></img>
            </div>

            <div className={style.nombre}>{props.nombre}</div>

            <hr className={style.line}></hr>

            <div className={style.precio}>
              {/* {`precio sin IVA: $ ${props.precio_base}`} */}
              {`Precio sin IVA: $ ${PB}`}
            </div>
            <div className={style.precio}>{`Precio con IVA: $ ${PT}`}</div>
            <div className={style.proveedor}>{cat}</div>
            <div className={style.lights}>🔴 🟡 🟢</div>
          </div>
        )}
      </div>
    </>
  );
}
export default Card;
