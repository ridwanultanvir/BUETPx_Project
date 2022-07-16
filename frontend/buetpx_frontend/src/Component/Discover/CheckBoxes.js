import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import './Style.css';
import { Button } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));


export default function CheckboxesGroup() {
    const classes = useStyles();

    const [categories, setcategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [checkList, setCheckList] = useState([]);
    
    let  namess = [];
     // get array of category names
     const getCategoryName = (source) => {
        const { name  } = source;
        namess.push(name);
        
    }

    // get array of category ids
   
    const getCategoryId = (source) => {
        const { id } = source;
        return id;
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
    fetch("http://localhost:8000/api/categories")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setcategories(result);
            result.map(getCategoryName);
            setCheckList(namess);

        },
        
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

    // console.log(nameList);
    // console.log(nameList[2]);
   
    // const names = [categories.map(source => getCategoryName(source)+" ")];
    // // seperate   category names by ,  and make an array of category names
    // const nameArr = names[0].split(",");
    // console.log(nameArr);

    

   const [checked, setChecked] = useState([]);
    // const checkList = ["Apple", "Banana", "Tea", "Coffee"];
  
    // Add/Remove checked item from list
    const onClick=(items) => {
        // console.log(checkedItems);
        window.location.href = "/discover/filtered/" + items;
    }
    
    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
      window.location.href = "/discover/filtered/" + updatedList.toString();


    //   onClick(checkedItems);
    };
  
    // Generate string of checked items
    const checkedItems = checked.length
      ? checked.reduce((total, item) => {
          return total + ", " + item;
        })
      : "";
    // 

    
    


    
    // console.log(checkedItems);
    // Return classes based on whether item is checked
    var isChecked = (item) =>
      checked.includes(item) ? "checked-item" : "not-checked-item";
  
    return (
        
    //   <div className="app">
    //     {/* <div className="checkList"> */}
    //       {/* <div className="title">Your CheckList:</div> */}
    //       {/* <div className="list-container"> */}
    //         {checkList.map((item, index) => (
    //           <div key={index}>
    //             <input value={item} type="checkbox" onChange={handleCheck} />
    //             <span className={isChecked(item)}>{item}</span>
    //           </div>
    //         ))}
    //       {/* </div> */}
    //     </div>
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}

        <FormGroup>
        {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}>{item}</span>
              </div>
            ))}
            {/* {checkList.map((item, index) => (
          <FormControlLabel
            control={<Checkbox checked={item} value={item} onChange={handleCheck} name="item" />}
            label={item}
            
          /> */}
        {/* ))} */}
     </FormGroup>
    </FormControl>

    

    {/* <div>
        {`Items checked are: ${checkedItems}`}
      </div> */}
    
    </div>
  
        
    );
  }