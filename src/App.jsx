import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import Test from "./pages/drawer/Test"
import axios from 'axios';
import ResponsiveDrawer from "../src/pages/drawer/Drawer"

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {

    //-------------------------------------------------------------------------------

  return (
      <Routes>
        {/* <Route  exact path={"/"} element={<SplashPage />}> </Route> */}
        <Route  exact path={"/"} element={<LoginPage />}> </Route>
        <Route  exact path={"/products"} element={<ResponsiveDrawer />}> </Route>
        <Route  exact path={"/test"} element={<Test />}> </Route>
      </Routes>
  );
}

export default App;