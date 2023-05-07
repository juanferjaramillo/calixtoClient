import style from "./sideBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByProvider,
  filterByName,
  resetBoard,
} from "../redux/actions";

function SideBar() {
  const dispatch = useDispatch();
  const [FBP, setFBP] = useState("---");
  const [nombre, setNombre] = useState("");
  //creates local state for handling the search input text

  const handleFilterProviderChange = (event) => {
    setNombre("");
    setFBP(event.target.value);
    //to keep the selection box updated
    dispatch(filterByProvider(event.target.value));
  };

  const handleInput = (event) => {
    setNombre(event.target.value.trim().toLowerCase());
    //dispatch(filterByPartialName(event.target.value))
  };

  const handleGoClick = () => {
    dispatch(filterByName(nombre));
  };

  const handleResetClick = () => {
    setNombre("");
    setFBP("Todos");
    dispatch(resetBoard());
  };

  return (
    <div className={style.container}>
      <div id="logoSF">
        <img
          className={style.logo}
          src="https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg"
          alt="Logo SF"
        ></img>
      </div>

      <div id="filtros" className={style.filterdiv}>
        <div id="proveedor" className={style.proveedor}>
          <label>Proveedor:</label>
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
            className={style.inputSearch}
            placeholder="nombre contiene"
            type="search"
            onChange={handleInput}
            value={nombre}
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

        <br></br>
        <hr></hr>

        <div className={style.reset}>
          <button
            type="button"
            className={style.buttonReset}
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
      <div className={style.logoSthemma}>
        <span>Made by Sthemma</span>
      </div>


    </div>
  );
}
export default SideBar;
