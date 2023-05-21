import { Route, Routes } from "react-router-dom";
import SplashPage from "../src/pages/SplashPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import axios from 'axios';
import ResponsiveDrawer from "../src/pages/drawer/Drawer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getAllUsers } from "../src/redux/actions";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  //const url = useLocation().pathname;
  const dispatch  = useDispatch();

  //------------------------this info should come from the logged user------------
  const owner = 2;
  //-------------------------------------------------------------------------------

  //--------------------------this useEffect should go after login---------------
  useEffect(() => {
    dispatch(getAllProducts(owner));
    dispatch(getAllUsers());
  }, [dispatch]);
    //-------------------------------------------------------------------------------

  return (
      <Routes>
        {/* <Route  exact path={"/"} element={<SplashPage />}> </Route> */}
        <Route  exact path={"/"} element={<LoginPage />}> </Route>
        <Route  exact path={"/products"} element={<ResponsiveDrawer />}> </Route>
      </Routes>
  );
}

export default App;