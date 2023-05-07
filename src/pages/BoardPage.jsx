import { useEffect } from "react";
import Board from "../board/Board";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import style from "./boardPage.module.css";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";

const handleEnter = () => {
  Navigate("./product");
};

function BoardPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SideBar />
      <div className={style.data}>
        <Board />
        {/* <SideBar /> */}
      </div>
    </div>
  );
}
export default BoardPage;
