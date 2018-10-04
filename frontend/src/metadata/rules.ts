/* tslint:disable: object-literal-sort-keys */

const rules = [
  {
    conditions: {
      'demographics.address.outside_country': { is: false },
    },
    event: {
      type: 'remove',
      params: {
        field: ['demographics.address.country', 'demographics.address.province'],
      },
    },
  },
  {
    conditions: {
      'demographics.address.outside_country': { is: true },
    },
    event: {
      type: 'remove',
      params: {
        field: ['demographics.address.state', 'demographics.address.zip'],
      },
    },
  },
  {
    conditions: {
      'demographics.citizenship.citizenship_status': {
        or: [
          { equal: 'someguid1' },
          'falsey',
        ],
      },
    },
    event: {
      type: 'remove',
      params: {
        field: [
          'demographics.citizenship.current_visa_type',
          'demographics.citizenship.living_in_us',
        ],
      },
    },
  },
  {
    conditions: {
      'demographics.citizenship.citizenship_status': {
        not: { equal: 'someguid1' },
      },
    },
    event: {
      type: 'remove',
      params: {
        field: [
          'demographics.citizenship.ssn',
          'demographics.citizenship.applying_fa',
        ],
      },
    },
  },
  {
    conditions: {
      'demographics.citizenship.applying_fa': 'truthy'
    },
    event: {
      type: 'require',
      params: {
        field: 'demographics.citizenship.ssn',
      },
    },
  },
];

export default rules;
