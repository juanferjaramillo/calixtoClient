import { Route, Routes } from "react-router-dom";
import BoardPage from "./components/pages/BoardPage";
import SplashPage from "./components/pages/SplashPage.jsx";
function App() {
  //const url = useLocation().pathname;
  return (
    <div>
      <Routes>
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