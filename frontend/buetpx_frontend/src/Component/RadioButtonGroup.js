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
    <RadioGroup name="use-radio-group" defaultValue="landscape">
      <MyFormControlLabel value="landscape" label="Landscape" control={<Radio />} />
      <MyFormControlLabel value="animal" label="Animal" control={<Radio />} />
      <MyFormControlLabel value="people" label="People" control={<Radio />} />
      <MyFormControlLabel value="transport" label="Transport" control={<Radio />} />
      <MyFormControlLabel value="rain" label="Rain" control={<Radio />} />
      <MyFormControlLabel value="summer" label="Summer" control={<Radio />} />
      <MyFormControlLabel value="art" label="Art" control={<Radio />} />
      <MyFormControlLabel value="citAndArchitecture" label="City and Architecture" control={<Radio />} />
      {/* <MyFormControlLabel value="second" label="Galaxy" control={<Radio />} /> */}

    </RadioGroup>
  );
}
