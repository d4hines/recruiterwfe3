import { JSONSchema6, JSONSchema6Definition } from 'json-schema';

const schema: JSONSchema6 = {
  type: 'object',
  required: ['demographics'],
  properties: {
    demographics: {
      type: 'object',
      title: 'Demographics',
      properties: {
        personal_information: {
          type: 'object',
          title: 'Personal Information',
          required: ['ops_firstname', 'lastname', 'homephone'],
          properties: {
            ops_firstname: {
              type: 'string',
              title: 'First Name',
              maxLength: 10,
            },
            middlename: {
              type: 'string',
              title: 'Middle Name',
            },
            lastname: {
              type: 'string',
              title: 'Last Name',
            },
            homephone: {
              type: 'string',
              title: 'Home Phone',
            },
          },
        },
        address: {
          type: 'object',
          title: 'Mailing Address',
          required: ['street_address', 'city', 'state', 'zip', 'province', 'country'],
          properties: {
            outside_country: {
              // format: 'radio',
              type: 'boolean',
              title: 'Is your address outside the U.S or Canada?',
              enumNames: ['Yes', 'No'],
            },
            street_address: {
              type: 'string',
              title: 'Street Address',
            },
            apt: {
              type: 'string',
              title: 'Apt/Suite',
            },
            city: {
              type: 'string',
              title: 'City',
            },
            state: {
              type: 'string',
              title: 'State',
              enum: [
                'SOME_GUID1',
                'SOME_GUID2',
              ],
              enumNames: [
                'North Carolina',
                'Virginia',
              ],
            },
            zip: {
              type: 'string',
              title: 'Zip Code',
            },
            province: {
              type: 'string',
              title: 'Province and Postal Code',
            },
            country: {
              type: 'string',
              title: 'Country',
              enum: [
                'someguid1',
                'someguid2',
              ],
              enumNames: [
                'Albania',
                'Algeria',
              ],
            },
          },
        },
        citizenship: {
          type: 'object',
          title: 'Citizenship',
          required: ['citizenship_status'],
          properties: {
            definitions: {
              type: 'string',
              title: 'Definitions',
            },
            citizenship_status: {
              type: 'string',
              title: 'Citizenship Status',
              enum: [
                'someguid1',
                'someguid2',
                'someguid3',
              ],
              enumNames: [
                'U.S Citizen',
                'Non-Citizen',
                'Permanent Resident',
              ],
            },
            applying_fa: {
              type: 'boolean',
              title: 'Are you planning to apply for financial aid?',
              enumNames: ['Yes', 'No'],
            },
            ssn: {
              type: 'string',
              title: 'Social Security Number',
            },
            current_visa_type: {
              title: 'Current Visa Type',
              type: 'number',
              enum: [1, 2, 3],
              enumNames: ['R-1 Religious Worker', 'B-1 Visitor for Business', 'E-3 Treaty Trader Visa'],
            },
            living_in_us: {
              type: 'boolean',
              title: 'Currently living in the U.S',
              enumNames: ['Yes', 'No'],
            },
          },
        },
        ethnicity: {
          type: 'object',
          title: 'Ethnicity',
          required: ['ethnicity'],
          properties: {
            native_american: {
              type: 'boolean',
              title: 'American Indian or Alaska Native',
            },
            asian: {
              type: 'boolean',
              title: 'Asian',
            },
            black: {
              type: 'boolean',
              title: 'Black or African American',
            },
            islander: {
              type: 'boolean',
              title: 'Native Hawaiian or Other Pacific Islander',
            },
            white: {
              type: 'boolean',
              title: 'White',
            },
            ethnicity: {
              type: 'string',
              title: 'Ethnicity',
              enum: [
                'someguid1',
                'someguid2',
                'someguid3',
              ],
              enumNames: [
                'Hispanic/Latino',
                'Non-Hispanic/Latino',
              ],
            },
          },
        },
        other_info: {
          type: 'object',
          title: 'Other Information',
          required: ['birthdate', 'gender'],
          properties: {
            former_name: {
              type: 'string',
              title: 'Former Last Name (if applicable)',
            },
            birthdate: {
              type: 'string',
              title: 'Birth Date',
            },
            gender: {
              type: 'string',
              title: 'Gender',
              enum: ['male', 'female'],
              enumNames: [
                'Male', 'Female',
              ],
            },
            marital_status: {
              type: 'string',
              title: 'Marital Status',
              enum: ['1', '2', '3', '4'],
              enumNames: [
                'Single', 'Married',
                'Widowed', 'Divorced',
              ],
            },
          },
        },
        military_affiliation: {
          type: 'object',
          title: 'Military Affiliation',
          required: [
            'military_affiliation',
            'military_branch',
            'gi_funding',
            'current_pay_grade',
            'current_duty_rate',
            'current_duty_station',
            'family_member',
          ],
          properties: {
            affiliated_with_military: {
              type: 'boolean',
              title: 'Are you affiliated with the U.S Military?',
              enumNames: ['Yes', 'No'],
            },
            military_affiliation: {
              type: 'number',
              title: 'Military Affiliation',
              enum: [1, 2, 3, 4, 5, 6, 7, 8, 9],
              enumNames: ['Active Duty', 'ROTC', 'Veteran',
                'Reserve', 'National Guard', 'Dependant of Active Duty', 'Spouse of Active Duty',
                'Spouse/Dependant of Reservist', 'Spouse/Dependant of National Guard',
              ],
            },
            military_branch: {
              type: 'number',
              title: 'Military Branch',
              enum: [1, 2, 3, 4, 5],
              enumNames: ['Army', 'Navy', 'Air Force', 'Marine Corps', 'Coast Guard'],
            },
            gi_funding: {
              type: 'boolean',
              title: 'Do you intend to use GI funding from the Department of Veterans Affairs',
              enumNames: ['Yes', 'No'],
            },
            current_pay_grade: {
              type: 'string',
              title: 'Current Pay Grade',
            },
            current_rate: {
              type: 'string',
              title: 'Current Rate/MOS',
            },
            current_duty_station: {
              type: 'string',
              title: 'Current Duty Station',
            },
            family_member: {
              type: 'number',
              title: 'The family member is my',
              enum: [1, 2, 3 /*etc.*/],
              enumNames: ['Spouse', 'Son or Daughter', 'Father or Mother' /*etc*/],
            },
          },
        },
      },
    },
    academic_plans: {
      type: 'object',
      title: ' Academic Plans',
      required: [
        'location',
        'degree_type',
        'program',
        'start_term',
        'full_or_part_time',
      ],
      properties: {
        program_location_term: {
          type: 'object',
          title: 'Program, Location, and Term',
          properties: {

            location: {
              type: 'string',
              title: 'On Campus or Online?',
              enum: ['1', '2'],
              enumNames: ['On Campus', 'Online'],
            },
            degree_type: {
              type: 'string',
              title: 'Degree Type',
              enum: ['1', '2', '3', '4'],
              enumNames: ['Associate (On Campus)', 'Bachelor\'s (On Campus)',
                'Certificate or Non-Degree (On Campus)', 'Law (On Campus)'],
            },
            program: {
              type: 'string',
              title: 'Program of Interest',
              enum: ['1', '2', '3', '4'],
              enumNames: ['B.A in Animation', 'B.A in Biblical & Theological Studies',
                'B.A in Christian Ministry', 'B.A in Cinema-Television'],
            },
            concentration: {
              type: 'string',
              title: 'Concentration',
              enum: ['1', '2'],
              enumNames: ['Biblical Studies', 'Theological/Historical Studies'],
            },
            session: {
              type: 'string',
              title: 'When would you like to start?',
              enum: ['1', '2'],
              enumNames: ['September 24th, 2018', 'October 29th, 2018'],
            },
            start_term: {
              type: 'string',
              title: 'Start Term',
              enum: ['1', '2', '3'],
              enumNames: ['Fall 2018', 'Spring 2019', 'Summer 2019'],
            },
            full_or_part_time: {
              type: 'number',
              title: 'Full Time or Part Time?',
              enum: [1, 2],
              enumNames: ['Full Time', 'Part Time'],
            },
          },
        },
        nursing_requirments: {
          type: 'object',
          title: 'Nursing Requirements',
          required: [
            'currently_registered_nurse',
            'in_what_state_licensed',
            'registered_for_rn_exam',
            'rn_exam_date',
          ],
          properties: {
            currently_registered_nurse: {
              type: 'boolean',
              title: 'Are you currently a Registered Nurse?',
              enumNames: ['Yes', 'No'],
            },
            in_what_state_licensed: {
              type: 'string',
              title: 'In what state are you currently licensed?',
              enum: [
                'SOME_GUID1',
                'SOME_GUID2',
              ],
              enumNames: [
                'North Carolina',
                'Virginia',
              ],
            },
            registered_for_rn_exam: {
              type: 'boolean',
              title: 'Are you currently registered to take the licensure exam?',
              enumNames: ['Yes', 'No'],
            },
            active_rn_required: {
              type: 'string',
              title: 'An active RN License is required before this program....etc.',
            },
            rn_exam_date: {
              type: 'string',
              title: 'At what date is your exam?',
            },
          },
        },
      },
    },
    academic_history: {
      title: 'Academic History',
      type: 'object',
      properties: {
        high_school_info: {
          type: 'object',
          title: 'High School Credit Information',
          properties: {
            highschool_grades: {
              type: 'number',
              title: 'During High School',
              enum: [1, 2, 3],
              enumNames: ['I earned A\'s in almost all classes (typically 3.0-4.0 GPA)',
                'I earned mainly B\'s and a few C\'s (typically 2.5-3.0 GPA)',
                'I earned mainly C\'s in my classes (typically 2.0-2.5 GPA)'],
            },
            graduated_highschool: {
              type: 'boolean',
              title: 'Did you or will you graduate from high school?',
              enumNames: ['Graduated or will graduate', 'Did not or will not graduate'],
            },
            received_ged: {
              type: 'boolean',
              title: 'Did you or will you receive a GED?',
              enumNames: ['Did or will', 'No'],
            },
          },
        },
        college_credit: {
          title: 'College Credit',
          type: 'object',
          properties: {
            attended_college: {
              type: 'boolean',
              title: 'Have you attended colleges or universities for credit?',
              enumNames: ['Yes', 'No'],
            },
            previously_enrolled_at_regent: {
              type: 'boolean',
              title: 'Have you previously been enrolled at Regent University?',
              enumNames: ['Yes', 'No'],
            },
            college_grades: {
              type: 'number',
              title: 'During my college courses',
              enum: [1, 2, 3],
              enumNames: ['I earned A\'s in almost all classes (typically 3.0-4.0 GPA)',
                'I earned mainly B\'s and a few C\'s (typically 2.5-3.0 GPA)',
                'I earned mainly C\'s in my classes (typically 2.0-2.5 GPA)'],
            },
            credits_completed: {
              type: 'number',
              title: 'During my college courses',
              enum: [1, 2, 3],
              enumNames: ['0-15 Credits', '16-30 Credits', '31-60 Credits'],
            },
            english_grades: {
              type: 'number',
              title: 'In English I earned',
              enum: [1, 2, 3],
              enumNames: ['A\'s or B\'s (2.5-4.0)', 'C\'s or D\'s (1.0-2.4)'],
            },
            math_grades: {
              type: 'number',
              title: 'In Math I earned',
              enum: [1, 2, 3],
              enumNames: ['A\'s or B\'s (2.5-4.0)', 'C\'s or D\'s (1.0-2.4)'],
            },
          },
        },
        certification: {
          title: 'Certification',
          type: 'object',
          properties: {
            certification_statement: {
              type: 'string',
              title: 'Please review the following and certify that you agree:',
            },
            certify_grades: {
              type: 'boolean',
              title: 'I Agree',
            },
          },
        },
      },
    },
    parent_guardian_info: {
      type: 'object',
      title: 'First Parent/Guardian',
      properties: {
        first_parent: {
          title: 'First Parent/Guardian',
          type: 'object',
          properties: {
            prefix: {
              type: 'string',
              title: 'Prefix',
              enum: [1, 2, 3, 4],
              enumNames: ['Miss', 'Dr.', 'Mr.', 'Ms.'],
            },
            first_name: {
              title: 'First Name',
              type: 'string',
            },
            last_name: {
              title: 'Last Name',
              type: 'string',
            },
            relationship_to_you: {
              type: 'number',
              title: 'Relationship to You',
              enum: [1, 2, 3 /*etc.*/],
              enumNames: ['Mother', 'Father', 'Stepmother' /*etc*/],
            },
            home_phone: {
              title: 'Home Phone',
              type: 'string',
            },
            email: {
              title: 'Email Address',
              type: 'string',
            },
            highest_education: {
              type: 'number',
              title: '',
              enum: [1, 2, 3 /*etc.*/],
              enumNames: [
                'Completed Masters Degree',
                'Some College (30-59 Credits)',
                'Some College (60+ Credits)' /*etc*/],
            },
          },
        },
        second_parent: {
          title: 'Second Parent/Guardian',
          type: 'object',
          properties: {
            prefix: {
              type: 'string',
              title: 'Prefix',
              enum: [1, 2, 3, 4],
              enumNames: ['Miss', 'Dr.', 'Mr.', 'Ms.'],
            },
            first_name: {
              title: 'First Name',
              type: 'string',
            },
            last_name: {
              title: 'Last Name',
              type: 'string',
            },
            relationship_to_you: {
              type: 'number',
              title: 'Relationship to You',
              enum: [1, 2, 3 /*etc.*/],
              enumNames: ['Mother', 'Father', 'Stepmother' /*etc*/],
            },
            home_phone: {
              title: 'Home Phone',
              type: 'string',
            },
            email: {
              title: 'Email Address',
              type: 'string',
            },
            highest_education: {
              type: 'number',
              title: '',
              enum: [1, 2, 3 /*etc.*/],
              enumNames: [
                'Completed Masters Degree',
                'Some College (30-59 Credits)',
                'Some College (60+ Credits)' /*etc*/],
            },
          },
        },
        scholarship_info: {
          type: 'object',
          title: 'For Scholarship Purposes (Optional)',
          properties: {
            phi_theta_kappa: {
              type: 'boolean',
              title: 'Are you a member of the Phi Theta Kappa Honor Society?',
              enumNames: ['Yes', 'No'],
            },
            hslda_dependent: {
              type: 'boolean',
              title: 'Are you a dependent of a member of the Home School Defense Association (HSLDA)?',
              enumNames: ['Yes', 'No'],
            },
            related_to_alum: {
              type: 'boolean',
              title: 'Are you a sibling, child or grandchild of a Regent University or CBN University graduate?',
              enumNames: ['Yes', 'No'],
            },
            national_merit_finalist: {
              type: 'boolean',
              title: 'Are you a National Merit Semifinalist or Finalist?',
              enumNames: ['Yes', 'No'],
            },
            virginia_college_associate: {
              type: 'boolean',
              title: 'Did you graduate from a Virginia Community College or Richard Bland College with an AA or AS degree?',
              enumNames: ['Yes', 'No'],
            },
            north_carolina_college_associate: {
              type: 'boolean',
              title: 'Did you graduate from a North Carolina Community College with AA or AS degree?',
              enumNames: ['Yes', 'No'],
            },
          },
        },
        personal_statement: {
          title: 'Personal Statement',
          type: 'object',
          properties: {
            statement: {
              type: 'string',
              title: 'Statement',
            },
            certify: {
              type: 'boolean',
              title: 'Please check this box if you are planning on submitting your personal statement later',
            },
          },
        },
      },
    },
    certification_and_signature: {
      type: 'object',
      title: 'Certification & Signature',
      properties: {
        disciplinary_history: {
          type: 'object',
          title: 'Disciplinary History',
          properties: {
            convicted: {
              type: 'boolean',
              title: 'Have you ever been convicted of a crime other than a minor/traffic or juvenile offense?',
              enumNames: ['Yes', 'No'],
            },
            explain_conviction: {
              type: 'string',
              title: 'Explanation',
            },
            academic_probation: {
              type: 'boolean',
              title: 'Have you ever been on academic/disciplinary probation or been dismissed from any educational institution?',
              enumNames: ['Yes', 'No'],
            },
            explain_academic_probation: {
              type: 'string',
              title: 'Explanation',
            },
            criminal_charges: {
              type: 'boolean',
              title: 'Are there any criminal charges pending or expected to be brought against you?',
              enumNames: ['Yes', 'No'],
            },
            explain_criminal_charges: {
              type: 'string',
              title: 'Explanation',
            },
            court_martial: {
              type: 'boolean',
              title: 'Have you ever been subject to a court martial or dishonorably discharged from the military?',
              enumNames: ['Yes', 'No'],
            },
            explain_court_martial: {
              type: 'string',
              title: 'Explanation',
            },
          },
        },
        certification: {
          type: 'object',
          title: 'Certification',
          properties: {
            handbook_statement: {
              type: 'string',
              title: 'All Regent University students agree to follow...',
            },
            handbook: {
              type: 'boolean',
              title: 'I Agree',
            },
            transcript_permission_statement: {
              type: 'string',
              title: 'I grant my high school and college(s) permission to release my transcript(s) and appropriate test scores to Regent University',
            },
            transcript_permission: {
              type: 'boolean',
              title: 'I Agree',
            },
            accuracy_statement: {
              type: 'string',
              title: 'I state that the information provided in this application is accurate and complete to the best of my knowledge and I agree to receive communications, including text message, and phone calls at the numbers provided above. I understand that these communications may be generated using an automated technology.',
            },
            accuracy: {
              type: 'boolean',
              title: 'I Agree',
            },
            signature: {
              type: 'string',
              title: 'Signature',
            },
          },
        },
      },
    },
  },
};

const testSchema: JSONSchema6 = {
  type: 'object',
  properties: {
    foo: {
      type: 'object',
      properties: {
        bar: {
          type: 'string',
        },
      },
    },
  },
};

const testAttributeMap = {
  bar: { wing: 'ding' },
};

function traverseSchema(
  node: JSONSchema6,
  cb: (currentProp: string, node: JSONSchema6) => void,
  currentProp: string = '') {
  switch (node.type) {
    case 'object':
      console.log('inside object switch', node);
      if (node.properties) {
        Object.keys(node.properties).forEach(element => {
          traverseSchema(node.properties[element] as JSONSchema6, cb, element);
        });
      }
      break;

    default:
      cb(currentProp, node);
      break;
  }
}

traverseSchema(testSchema, (currentProp, node) =>
  Object.assign(node, testAttributeMap[currentProp]));

console.log(testSchema.properties.foo);

/** Mutates  */
function enrich(
  node: JSONSchema6,
  jsonPointer: string[],
  rootSchema: JSONSchema6,
  parentJSONPointer: string[],
  parentKeyword: string,
  parentSchema: JSONSchema6,
  prop: string): JSONSchema6 {
  const attribute = attributeMap[prop];
  return Object.assign(node, attribute);
}

const attributeMap = {
  ops_addressline2: {
    maxLength: 100,
  },
  ops_certificationstatementoffaith: {
    enumNames: ['Yes', 'No'],
  },
};

const stringSchema: JSONSchema6 = {
  type: 'string',
};

const booleanSchema: JSONSchema6 = {
  type: 'boolean',
};

const s = enrich(stringSchema, [], {}, [], '', {}, 'ops_addressline2');
const b = enrich(booleanSchema, [], {}, [], '', {}, 'ops_certificationstatementoffaith');
