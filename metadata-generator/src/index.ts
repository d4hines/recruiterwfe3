import { get } from 'request-promise-native';

const apiEndpoint = 'http://localhost:3000/api/data/v8.1/';
const entityId = '86e7164b-72c2-e811-80de-0050569b65f8';

const stringType = 'Microsoft.Dynamics.CRM.AttributeTypeCode%27String%27';
const memoType = 'Microsoft.Dynamics.CRM.AttributeTypeCode%27Memo%27';
const boolType = 'Microsoft.Dynamics.CRM.AttributeTypeCode%27Boolean%27';

const stringAndMemoEndpoint = `EntityDefinitions(${entityId})/Attributes?$filter=AttributeType%20eq%20${stringType}`
  + `%20or%20%20AttributeType%20eq%20${memoType}`;

const boolEndpoint = `EntityDefinitions(${entityId})/Attributes?$filter=AttributeType%20eq%20${boolType}`;

function boolDetails(id: string) {
  return `EntityDefinitions(${entityId})/Attributes(${id})`
    + '/Microsoft.Dynamics.CRM.BooleanAttributeMetadata'
    + '?$expand=OptionSet($select=TrueOption,FalseOption)';
}

function optionSetDetails(id: string) {
  return `EntityDefinitions(${entityId})/Attributes(${id})`
    + '/Microsoft.Dynamics.CRM.PicklistAttributeMetadata'
    + '?$expand=OptionSet,GlobalOptionSet';
}
async function getCrm(url: string) {
  return get({
    url: apiEndpoint + url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
      Prefer: 'odata.include-annotations="*"',
    },
  }).then(JSON.parse);
}

interface IEnrichedSchema {
  maxLength?: number;
  enum?: string[] | number[];
  enumNames?: string[];
}

function stringAttributes(): Promise<{ [key: string]: IEnrichedSchema }> {
  return getCrm(stringAndMemoEndpoint)
    .then(results => results.value as { LogicalName: string, MaxLength: number }[])
    .then(results => results.reduce(
      (prev: { [key: string]: any }, curr) => {
        prev[curr.LogicalName] = {
          maxLength: curr.MaxLength,
        };
        return prev;
      },
      {}));
}

interface CrmLabel {
  Label: {
    UserLocalizedLabel: {
      Label: string,
    },
  };
}

interface CrmOptionSet {
  TrueOption: CrmLabel;
  FalseOption: CrmLabel;
}

function boolAttributes() {
  return getCrm(boolEndpoint)
    .then(results => results.value as { MetadataId: string }[])
    // Map the results to the ID
    .then(results => results.map(x => x.MetadataId))
    // Then map that to a promise containing the results we're after
    .then(ids => ids.map(x => getCrm(boolDetails(x))))
    // Flatten the promises into a single promise containing all the results
    .then(results => Promise.all(results))
    .then(bools =>
      bools.reduce(
        (prev, curr: { LogicalName: string, OptionSet: CrmOptionSet }) => {
          prev[curr.LogicalName] = {
            enumNames: [
              curr.OptionSet.TrueOption.Label.UserLocalizedLabel.Label,
              curr.OptionSet.FalseOption.Label.UserLocalizedLabel.Label,
            ],
          };
          return prev;
        },
        {}));
}

function optionSetAttributes() {
  return getCrm(boolEndpoint)
    .then(results => results.value as { MetadataId: string }[])
    // Map the results to the ID
    .then(results => results.map(x => x.MetadataId))
    // Then map that to a promise containing the results we're after
    .then(ids => ids.map(x => getCrm(optionSetDetails(x))))
    // Flatten the promises into a single promise containing all the results
    .then(results => Promise.all(results))
    .then(bools =>
      bools.reduce(
        (prev, curr: { LogicalName: string, OptionSet: CrmOptionSet }) => {
          prev[curr.LogicalName] = {
            enumNames: [
              curr.OptionSet.TrueOption.Label.UserLocalizedLabel.Label,
              curr.OptionSet.FalseOption.Label.UserLocalizedLabel.Label,
            ],
          };
          return prev;
        },
        {}));
}

async function buildMetadata(): Promise<{ [key: string]: IEnrichedSchema }> {
  const booleans = await boolAttributes();
  const strings = await stringAttributes();
  return Object.assign(booleans, strings);
}

optionSetAttributes().then(console.log);
