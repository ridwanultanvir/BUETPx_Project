import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography className={classes.typographyStyles}>
                Naeem Ahmed
            </Typography>
            <AcUnitRoundedIcon/>
        </Toolbar>
    </AppBar>
  )
}

export default Header

// import React from "react";
// import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles(() => ({
//   typographyStyles: {
//     flex: 1
//   }
// }));

// const Header = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography className={classes.typographyStyles}>
//           Anthony sistilli
//         </Typography>
//         <AcUnitRoundedIcon />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;