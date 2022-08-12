import { Grid, Typography,TextField,Checkbox,TextareaAutosize, Button} from '@mui/material';
import React from 'react';
import useStyles from './ImageStyle';
import Autocomplete from '@mui/material/Autocomplete';

function ImageDetail() {
    const classes = useStyles();
    const privacy=['public','only me']
    return (
        <div className={classes.root} >
        <Grid container>
            <Grid item lg={9} xs={12} md={8}>
                <div className={classes.btn}>
                    <Button style={{marginRight:'10px'}} variant="outlined">Add</Button>
                    <Button variant="outlined">Remove</Button>
                </div>
                <img className={classes.Img}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
            </Grid>
            <Grid item lg={3} xs={12} md={4} className={classes.rightSidebar}>
            <Typography>1 photo selected</Typography>
                <div>
                <Checkbox
                color="primary"
                />
                License the photo 
            </div>

            <TextField id="outlined-basic" className={classes.textFieldInput} label="Title*" variant="outlined" />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={privacy}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            <TextareaAutosize
            className={classes.textFieldInput}
                aria-label="minimum height"
                minRows={3}
                placeholder="Description"
                style={{ width: 300 }}
            />
            <TextField className={classes.textFieldInput} id="outlined-basic" label="Location*" variant="outlined" />


            </Grid>

        </Grid>
           
        </div>
    );
}

export default ImageDetail;