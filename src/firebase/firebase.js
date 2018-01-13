import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD-PKrK5EJimv2-NfhMpmuSSbIwIVLMas8',
  authDomain: 'expensify-f161a.firebaseapp.com',
  databaseURL: 'https://expensify-f161a.firebaseio.com',
  projectId: 'expensify-f161a',
  storageBucket: 'expensify-f161a.appspot.com',
  messagingSenderId: '445149787452'
};

firebase.initializeApp(config);

firebase.database().ref()
  .set({
    name: 'seba'
  })
  .then(() => {
    console.log('DB Set...');
  })
  .catch((e) => {
    console.log('error:', e);
  });
