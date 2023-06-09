import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Grid item>{children}</Grid>
          </Box>
        )}
      </div>
    );
  }
  export default TabPanel;