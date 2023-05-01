import style from "./card.module.css";

function Card(props) {

  const PB = props.precio_base.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const PT = props.precio_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
  return (
    <div className={style.container}>

      <div className={style.product}>

        <div className={style.codigo}>{`Codigo: ${props.codigo}`}</div>
        <hr className={style.line}></hr>

        <div className={style.image}>
          <img className={style.img} src={props.prodImg} alt="producto"></img>
        </div>

        <div className={style.nombre}>{props.nombre}</div>

        <hr className={style.line}></hr>

        <div className={style.precio}>
          {/* {`precio sin IVA: $ ${props.precio_base}`} */}
          {`precio sin IVA: $ ${PB}`}
        </div>
        <div className={style.precio}>
          {`Precio con IVA: $ ${PT}`}
        </div>
        <div className={style.proveedor}>{`Proveedor: ${props.provider}`}</div>
        <div className={style.lights}>
         🔴 🟡 🟢
        </div>
      </div>
    </div>
  );
}
export default Card;
