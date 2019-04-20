'use strict';

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');

// Create app instance
const app = dialogflow();

// /**
//  * Make an external API call to get weather data.
//  * @return {Promise<string>}
//  */
// const forecast = () => {
//     // ...
//   };

// app.intent('Default Welcome Intent', (conv:any) => {
//     return forecast().then((weather:any) => {
//         conv.ask('How are you?');
//         conv.ask(`Today's weather is ${weather}.`);
//     });
// });

app.intent('to find me x bikes', (conv: any, params: any) => {
  // extract the num parameter as a local string variable
  conv.close(`You said this many bikes: ${params.bike_count}`);
});

// Export app within Cloud Functions for Firebase
exports.fulfillment = functions.https.onRequest(app);
