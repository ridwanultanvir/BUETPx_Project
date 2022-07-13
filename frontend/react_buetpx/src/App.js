import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nav from "./sections/Nav";
// import Header from "./sections/Header";
// import { Grid } from '@mui/material';
import { Grid } from "@material-ui/core";
function App() {
  return (
    <Router>
      <Grid container>
        <Grid item>
          <div style={{ backgroundColor: 'red', textAlign: 'center' }}>
            Item 1
          </div>
        </Grid>
        <Grid item>
          <div style={{ backgroundColor: 'blue', textAlign: 'center' }}>
            Item 2
          </div>
        </Grid>
        <Grid item>
          <div style={{ backgroundColor: 'green', textAlign: 'center' }}>
            Item 3
          </div>
        </Grid>
        <Grid item>
          <div style={{ backgroundColor: 'orange', textAlign: 'center' }}>
            Item 4
          </div>
        </Grid>
      </Grid>
      <Routes>
        <Route exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
