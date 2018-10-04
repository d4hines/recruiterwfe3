import * as React from 'react';
// import { FieldTemplateProps } from 'react-jsonschema-form';

export function CustomFieldTemplate(props: any) {
  const { id, classNames, label, help, required, description, errors, children, schema } = props;
  const uiOptions = props.uiSchema['ui:options'];
  const shouldHaveLabel =
    // Should be enabled
    (!uiOptions|| uiOptions.label !== false)
    // should be an input that needs a label
    && (
      schema.type !== 'object'
      && schema.type !== 'string' || schema.enumNames
    );
  return (
    <div className={classNames}>
      {shouldHaveLabel && <label htmlFor={id}>{label}{required ? '*' : null}</label>}
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}

function CustomTitleField(props: any) {
  const { id, title, required } = props;
  const legend = required ? `${title}*` : title;
  return <legend id={id}><span>{legend}</span></legend>;
}

export const fields = {
  // FieldTemplate: CustomFieldTemplate,
  TitleField: CustomTitleField,
};
