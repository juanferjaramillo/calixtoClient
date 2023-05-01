import { useState } from "react";
import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import {filterByProvider} from '../../redux/actions'

function NavBar() {
    const dispatch = useDispatch();
    const [FBP, setFBP] = useState("---");

    const handleFilterProviderChange =(event) => {
        setFBP(event.target.value);
        //to keep the selection box updated
        dispatch(filterByProvider(event.target.value))
    }

  return (
    <div className={style.container}>
      <div className={style.filterdiv}>
        <label>Proveedor: </label>
        <select
          name="filterProvider"
          onChange={handleFilterProviderChange}
          className={style.select}
          value={FBP}
        >
          <option>---</option>
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

      <div className={style.orderdiv}></div>

      <div className={style.logoSF}>
        <img src=""></img>
      </div>
    </div>
  );
}
export default NavBar;
