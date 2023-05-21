import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../redux/actions";
import style from "./splashPage.module.css";

function SplashPage() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEnter = () => {
    Navigate("./product");
  };

  return (
    <div className={style.container}>
     
        <h1 className={style.title}>Welcome to Calixto</h1>
        <br></br>
        <button className={style.boton} onClick={handleEnter}>
          click to continue
        </button>
      
    </div>
  );
}
export default SplashPage;
