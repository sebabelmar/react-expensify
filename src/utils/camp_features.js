let features = [
  {
    'title': 'Toilet',
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Pets allowed',
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Hike trail',
    'presence': true,
    'subfeatures': [
      {
        'title': 'Kids',
        'presence': true,
        'subfeatures': [
          {
            'title': 'Duck Pond',
            'presence': true,
            'subfeatures': [
              {
                'title': 'Big fishes',
                'presence': true,
                'subfeatures': []
              },
              {
                'title': 'Small fishes',
                'presence': false,
                'subfeatures': []
              }
            ]
          },
          {
            'title': 'Bike routes',
            'presence': true,
            'subfeatures': []
          }
        ]
      },
      {
        'title': 'Adults',
        'presence': true,
        'subfeatures': []
      }
    ]
  },
  {
    'title': 'Shower',
    'presence': false,
    'subfeatures': [
      {
        'title': 'Outdoor shower',
        'presence': true,
        'subfeatures': []
      }
    ]
  },
  {
    'title': 'Trash',
    'presence': true,
    'subfeatures': [
      {
        'title': 'Recycling bin',
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Compost bin',
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Trash bin',
        'presence': false,
        'subfeatures': [
          {
            'title': 'Pack in, pack out',
            'presence': true,
            'subfeatures': []
          }
        ]
      }
    ]
  }
];

export default features
