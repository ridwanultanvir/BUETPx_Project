import React from 'react';
import { Grid} from "@mui/material";
import Header from '../../Static/Header';
import Body from '../../Static/Body';

function Homefeed(props) {
  return (
   
      <Grid container direction='column'>
      <Grid item>
      <Header/>
      </Grid>


      <Grid item container>
        <Grid item xs={0} sm={1}>

        

        </Grid>

        <Grid item xs={12} sm={10} >
                
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ImageList variant="masonry" cols={3} gap={20}>
            {posts.map((post) => (
              <ImgPost {...post}/>
                  
            ))}
          </ImageList>
        </Box>
        </Grid>

        <Grid item xs={0} sm={1} >

        </Grid>
      

        </Grid>
      </Grid>
                        
    
    );
    }

    export default Homefeed;