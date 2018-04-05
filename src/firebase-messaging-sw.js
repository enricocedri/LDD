/**
 * Created by enrico.cedri on 05/04/18.
 */
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "840410962035"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(paylod => {
    console.log('[FB messaging] receiving bg message', paylod);
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
});