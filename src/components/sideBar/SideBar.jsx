import style from "./sideBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByProvider, filterByName } from "../../redux/actions";


function SideBar() {
  const dispatch = useDispatch();
  const [FBP, setFBP] = useState("---");
  const [nombre, setNombre] = useState("");
//creates local state for handling the search input text


  const handleFilterProviderChange = (event) => {
    setFBP(event.target.value);
    //to keep the selection box updated
    dispatch(filterByProvider(event.target.value));
  };

  const handleInput = (event) => {
    setNombre(event.target.value.trim().toLowerCase());
    //dispatch(filterByPartialName(event.target.value))
  };

  const handleGoClick = () => {
    dispatch(filterByName(nombre))
  };

  return (
    <div className={style.container}>
      <div className={style.filterdiv}>
        <br></br>
        <label>Proveedor: </label>
        <select
          name="filterProvider"
          onChange={handleFilterProviderChange}
          className={style.select}
          value={FBP}
        >
          <option value="TODOS">Todos</option>
          <option value="UP NUTRICIONAL FOOD SAS">Nutritional Foods</option>
          <option value="EL DORADO COMEX SAS">El Dorado</option>
          <option value="ALIMENTOS EL DORADO SAS">Alimentos El Dorado</option>
          <option value="ECOHOME">Ecohome</option>
          <option value="AMIRA SAS">Amira</option>
          <option value="TERRAFERTIL COLOMBIA SAS">Terrafertil</option>
          <option value="MONTESOL">Montesol</option>
          <option value="SAMANÁ">Samaná</option>
          <option value="GRECO">Greco</option>
        </select>
      </div>

      <hr></hr>

      <div className={style.buscar}>
        <input
          className={style.inputSarch}
          placeholder="nombre"
          type="search"
          onChange={handleInput}
        />
        <br></br>
        <button
          type="button"
          className={style.buttonGo}
          onClick={handleGoClick}
        >
          Buscar
        </button>
      </div>
      <div className={style.orderdiv}></div>

      <div className={style.logoSF}>
        <img src=""></img>
      </div>

      <div>
        <img
          className={style.logo}
          src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
          alt="Logo SF"
        ></img>
      </div>
      <br></br>
    </div>
  );
}
export default SideBar;
