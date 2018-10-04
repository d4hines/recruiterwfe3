import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';

const ERRORS = 'rawErrors';

interface IEnumOption { label: string; value: any; }

function onChangeFactory(props: WidgetProps) {
  return function onChange(event:
    React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const rawVal = event.target.value;
    let val;
    switch (props.schema.type) {
      case 'boolean':
        val = rawVal === 'true';
        break;
      default:
        val = rawVal;
    }
    props.onChange(val);
  };
}

const SingleLineTextField = (props: WidgetProps) =>
  (
    <TextField
      id={props.id}
      value={props.value}
      required={props.required}
      disabled={props.disabled}
      onChange={onChangeFactory(props)}
      label={props.schema.title}
      error={props[ERRORS] && !!props[ERRORS].length}
      margin="normal"
    />
  );

const RadioField = (props: WidgetProps) => {
  const buttons = props.options['enumOptions'].map(({ label, value }: IEnumOption) =>
    (
      <FormControlLabel
        key={`${props.id}_${value}`}
        value={value.toString()}
        control={<Radio />}
        label={label}
      />));
  return (
    <RadioGroup
      aria-label={props.schema.title}
      value={props.value && props.value.toString() || ''}
      onChange={onChangeFactory(props)}
      row={true}
    >
      {buttons}
    </RadioGroup>
  );
};

const SelectField = (props: WidgetProps) => {
  const options = props.options['enumOptions'].map(({ label, value }: IEnumOption) =>
    <MenuItem key={`${props.id}_${value}`} value={value}>{label}</MenuItem>);
  return (
    <Select
      value={props.value || ''}
      onChange={onChangeFactory(props)}
      error={props[ERRORS] && !! props[ERRORS].length}
      inputProps={{ id: props.id }}
    >
      {options}
    </Select>
  )
};

const CheckBoxField = (props: WidgetProps) => {
  const checkbox = (
    <Checkbox
      checked={props.value}
      onChange={onChangeFactory(props)}
      color="primary"
    />
  );
  return (
    <FormControlLabel
      control={checkbox}
      label={props.schema.title}
    />
  );
};

const widgets = {
  checkbox: CheckBoxField,
  radio: RadioField,
  select: SelectField,
  text: SingleLineTextField,
};

export default widgets;
