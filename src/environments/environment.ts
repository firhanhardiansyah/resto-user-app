// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCnXfl7vpwRr2pzTRNdxgzl91HYdASSTxU",
    authDomain: "foodiesapp-25dad.firebaseapp.com",
    databaseURL: "https://foodiesapp-25dad.firebaseio.com",
    projectId: "foodiesapp-25dad",
    storageBucket: "foodiesapp-25dad.appspot.com",
    messagingSenderId: "135726190054",
    appId: "1:135726190054:web:1ec6e1bf4b0be61e379a27",
    measurementId: "G-L3DW1T1G38"
  },
  onesignal: {
    appId: '511e7a3d-57d7-4385-a4e0-f77e563340c7',
    googleProjectNumber: '135726190054',
    restKey: 'ZjZjYjY1YWItMDBlNC00YjBkLTk5ZjQtODYyZTMyMjAwMTFl'
  },
  stripe: {
    sk: ''
  },
  paypal: {
    sandbox: '',
    production: 'YOUR_PRODUCTION_CLIENT_ID'
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
