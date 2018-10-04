
const uiSchema = {
  // 'ui:'
  demographics: {
    address: {
      outside_country: {
        'ui:widget': 'radio',
      },
    },
    citizenship: {
      applying_fa: {
        'ui:widget': 'radio',
      },
      living_in_us: {
        'ui:widget': 'radio',
      },
    },
    ethnicity: {
      native_american: {
        'ui:options': {
          label: false,
        },
      },
      asian: {
        'ui:options': {
          label: false,
        },
      },
      black: {
        'ui:options': {
          label: false,
        },
      },
      islander: {
        'ui:options': {
          label: false,
        },
      },
      white: {
        'ui:options': {
          label: false,
        },
      },
    },
    military_affiliation: {
      affiliated_with_military: {
        'ui:widget': 'radio',
      },
      gi_funding: {
        'ui:widget': 'radio',
      },
    },
  },
};

export default uiSchema;
