/**
 * Created by enrico.cedri on 05/04/18.
 */

import firebase from '@firebase/app';
import '@firebase/messaging';

firebase.initializeApp({
    messagingSenderId: "840410962035"
});

const messaging = firebase.messaging();
const publicKey = "BIDwohZaStnfk-E7ZYUKeuKUIk5KDeIbjMkazexxz7Yi7lTvwgCYNxLwzxO8rrLCPz-_Nfy1qcxkwZ5aRtTnkXM";

messaging.usePublicVapidKey(publicKey);

messaging
    .requestPermission()
    .then(() => {
        console.log("notification permission granted");
        return messaging.getToken().then( token => console.log("token", token) );
    })
    .catch( err => console.log("Permission denied", err));

messaging.onMessage( payload => {
 console.log("on message", payload)
});