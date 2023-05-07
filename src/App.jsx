import { Route, Routes } from "react-router-dom";
import BoardPage from "../src/pages/BoardPage";
import SplashPage from "../src/pages/SplashPage";

function App() {
  //const url = useLocation().pathname;
  return (
    <div>
      <Routes>
        {/* <Route  exact path={"/"} element={<Landing />}> </Route> */}
        <Route  exact path={"/"} element={<SplashPage />}> </Route>
        <Route  exact path={"/product"} element={<BoardPage />}> </Route>
      </Routes>
    </div>

    // <div className="App">
    //   {url === "/" ? <SplashPage /> : null}
    //   {url === "/pokemon" ? <BoardPage /> : null}
    //   {url === "/detail" ? <DetailPage /> : null}
    // </div>
  );
}

export default App;