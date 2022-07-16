import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

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

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function RadioButton() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label="Landscape" control={<Radio />} />
      <MyFormControlLabel value="second" label="Animal" control={<Radio />} />
      <MyFormControlLabel value="second" label="People" control={<Radio />} />
      <MyFormControlLabel value="second" label="Transport" control={<Radio />} />
      <MyFormControlLabel value="second" label="Rain" control={<Radio />} />
      <MyFormControlLabel value="second" label="Summer" control={<Radio />} />
      <MyFormControlLabel value="second" label="Art" control={<Radio />} />
      <MyFormControlLabel value="second" label="City & Architecture" control={<Radio />} />
      <MyFormControlLabel value="second" label="Galaxy" control={<Radio />} />

    </RadioGroup>
  );
}
