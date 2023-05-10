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
    <Box>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <Board />
        </Grid>
      </Grid>
    </Box>
  );
}
export default BoardPage;
