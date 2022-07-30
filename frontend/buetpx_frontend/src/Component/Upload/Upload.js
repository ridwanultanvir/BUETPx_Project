
import React, { Component } from 'react'
import { Grid,TextField} from "@mui/material";
import Header from '../../Static/Header';


class Upload extends Component {
  render() {
    return ( //flexGrow={1} display="flex"
    <div>
    <Header/>
      <Grid container>
        <Grid item container xs={6} >
            
        </Grid>
{/* style={{overflowY: 'auto'}} */}
        <Grid item container xs={6} >
            <Grid item container direction="column" >
                <TextField id="demo-helper-text-misaligned-no-helper" label="Post Title" sx={{
                    marginBottom:4,
                    marginRight:4,
                    
                }}
            
                />
                <TextField
                    multiline
                    rows={2}
                    maxRows={5}
                    label="Post Description"
                    sx={{
                        marginBottom:4,
                        marginRight:4,
                        
                    }}
                    />
                    <label>Location</label><br></br>
                    <TextField
                    multiline
       
                    label="Area"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    />
                    <TextField
                    multiline

                    label="City"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    />
                    <TextField
                    multiline
             
                    label="Country"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    />
                
            </Grid>
        </Grid>


      </Grid>
      </div>
    )
  }
}

export default Upload