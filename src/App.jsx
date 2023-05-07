import { Route, Routes } from "react-router-dom";
import BoardPage from "../src/pages/BoardPage";
import SplashPage from "../src/pages/SplashPage";
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  //const url = useLocation().pathname;
  return (
      <Routes>
        <Route  exact path={"/"} element={<SplashPage />}> </Route>
        <Route  exact path={"/product"} element={<BoardPage />}> </Route>
      </Routes>
  );
}

export default App;