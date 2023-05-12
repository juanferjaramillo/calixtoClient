import { useEffect } from "react";
import Board from "../board/Board";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";
import { Box, Grid } from "@mui/material";

// const handleEnter = () => {
//   Navigate("./product");
// };

function BoardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item 
      flex={9}
      // md={10} sm={9} xs={8}
      >
        <Board />
      </Grid>

      <Grid item
      flex={1} 
      // md={2} sm={3} xs={4}
      >
        <SideBar />
      </Grid>
    </Grid>
  );
}
export default BoardPage;
