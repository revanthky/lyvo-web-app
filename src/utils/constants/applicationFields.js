export const Rules = Object.freeze({
  required: label => [v => (!!v && v.length !== 0) || `${label} is required`],
  emailRules: [v => /.+@.+/.test(v) || 'E-mail must be valid'],
  phoneRules: [
    v =>
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v) ||
      'Phone must be valid'
  ]
})

export const APPLICATION_FIELDS = [
  {
    name: 'first_name',
    label: 'First Name',
    type: 'textField',
    rules: Rules.required('First Name'),
    md: '6'
  },
  {
    name: 'last_name',
    label: 'Last Name',
    type: 'textField',
    rules: Rules.required('Last Name'),
    md: '6'
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'textField',
    rules: [...Rules.required('E-mail'), ...Rules.emailRules],
    md: '4'
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'textField',
    rules: [...Rules.required('Phone'), ...Rules.phoneRules],
    md: '4'
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    rules: Rules.required('Gender'),
    md: '4',
    items: ['Male', 'Female', 'Other']
  },
  {
    name: 'diet_restrictions',
    label: 'Dietary Resctrictions',
    type: 'combobox',
    rules: Rules.required('Dietary Resctrictions'),
    md: '4',
    items: ['None', 'Vegetarian', 'Vegan', 'Gluten Free', 'Halal']
  },
  {
    name: 'major',
    label: 'Major',
    type: 'combobox',
    rules: Rules.required('Major'),
    md: '4',
    items: [
      'Material Science Engineering',
      'Bio Medical Engineering',
      'Electrical Engineering',
      'Computer Engineering',
      'Computer Science'
    ]
  },
  {
    name: 'class',
    label: 'Class',
    type: 'select',
    rules: Rules.required('Class'),
    md: '4',
    items: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super-Senior']
  },
  {
    name: 'resume',
    label: 'Resume',
    type: 'fileInput',
    accept: 'image/*',
    icon: 'mdi-file-upload',
    rules: Rules.required('Resume'),
    md: '4'
  }
]
