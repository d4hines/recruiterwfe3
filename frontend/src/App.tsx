// tslint:disable:import-name
import Engine from 'json-rules-engine-simplified';
import * as React from 'react';
import Form from 'react-jsonschema-form';
import applyRules from 'react-jsonschema-form-conditionals';
import './App.css';
import metadata from './metadata/index';

import { CustomFieldTemplate, fields } from './field-overrides';
import widgets from './widgets';

const { schema, uiSchema, rules } = metadata;

// const initialState = {
//   demographics: {
//     address: {
//       outside_country: false,
//     },
//   },
// };

const log = (type: string) => console.log.bind(console, type);

// const FORM = applyRules(schema, uiSchema, rules, Engine)(Form);

class App extends React.Component {
  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        liveValidate={true}
        widgets={widgets}
        fields={fields}
        FieldTemplate={CustomFieldTemplate}
        // formData={initialState}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
      />
    );
  }
}

export default App;
