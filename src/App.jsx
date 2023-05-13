import { Route, Routes } from "react-router-dom";
import BoardPage from "../src/pages/BoardPage";
import SplashPage from "../src/pages/SplashPage";
import axios from 'axios';
import ResponsiveDrawer from "../src/drawer/DrawerTemp"
// import PersistentDrawerRight from "../src/drawer/Drawer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../src/redux/actions";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  //const url = useLocation().pathname;
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
      <Routes>
        <Route  exact path={"/"} element={<SplashPage />}> </Route>
        {/* <Route  exact path={"/product"} element={<PersistentDrawerRight />}> </Route> */}
        <Route  exact path={"/product"} element={<ResponsiveDrawer />}> </Route>
      </Routes>
  );
}

export default App;