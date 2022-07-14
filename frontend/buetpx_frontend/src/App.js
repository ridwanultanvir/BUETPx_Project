import './App.css';
import React from 'react';
import {Grid} from "@mui/material";
import Header from './Contents/Header';
import Body from './Contents/Body';

function App() {
  return (
   
      <Grid container direction='column'>
        <Grid item>
        <Header/>
        </Grid>
        <Grid item>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item container>
          <Grid item xs={0} sm={1}>

          </Grid>

          <Grid item xs={12} sm={10} >
          <Body/>
          </Grid>

          <Grid item xs={0} sm={1} >

          </Grid>
         

        </Grid>
      </Grid>
  
  );
}

export default App;

// import React from "react";
// import { Grid } from "@material-ui/core";
// import Header from "./Header";
// import Body from "./Body";

// const App = () => {
//   return (
//     <Grid container direction="column">
//       <Grid item>
//         <Header />
//       </Grid>
//       <Grid item container>
//         <Grid item xs={false} sm={2} />
//         <Grid item xs={12} sm={8}>
//           <Body />
//         </Grid>
//         <Grid item xs={false} sm={2} />
//       </Grid>
//     </Grid>
//   );
// };

// export default App;
