import  React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

let first = "first";
let second = "second";
let clicked = first;
let isClicked = false;
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;
  // let clicked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
    // clicked = (radioGroup.value === props.value);
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

function handleClick(event) {
  console.log(event.target.value);
  isClicked = !isClicked;
  clicked = isClicked ?  first : second;
  
}

const RadioButton2 = props =>  {

  const {id,name, posts} = props;

  return (
    <RadioGroup name="use-radio-group" >
      <MyFormControlLabel value={clicked} label={name} control={<Radio />} onClick={handleClick}/>
    </RadioGroup>
  );
}

export default RadioButton2;
