import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3gNYGYdfYtgi7tfi_fim-lbO80zH6JVk",
    authDomain: "entel8-npm.firebaseapp.com",
    projectId: "entel8-npm",
    storageBucket: "entel8-npm.appspot.com",
    messagingSenderId: "95520415232",
    appId: "1:95520415232:web:e17b2d071c14089be3c2e5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FCM
const messaging = getMessaging(app);

const subscribeUser = () => {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        if (permission == 'granted') {
            getToken(messaging, {vapidKey: "BKAE4wLIWKcdmxI0N75s-Mu2X0kBXs282c2EJJfJPRwTZUFehpmR5hKPX79Pjj4Gn81TJ8bZn80Nj5xt1Spe91Y"}).then(currentToken => {
                console.log(currentToken)
                document.getElementById('tokenId').innerHTML = currentToken
            })
        }
    })
}

onMessage(messaging, (res => {
    console.log(res)
}))

const sendNotification = () => {
    const token = document.getElementById('token').value
    const title = document.getElementById('title').value
    const msg = document.getElementById('msg').value

    let body = {
        to: token,
        notification: {
            title: title,
            body: msg
        }
    }

    let options = {
        method: "POST",
        headers: new Headers({
            Authorization: "key=AAAAFj113gA:APA91bHNrFE7xulxfvGll1Y-enAJtmhrYW9uzp8cFw0EbG-RauMA4T6DMKbkoDc6gH7G-zW8lyiVFQ-lAQV2_6aYJ5TShA6kZ11WBabPSGrNgBBbHRcDK4qcfuk5LA8Yb37zz1eYZ2bA",
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
    }

    fetch("https://fcm.googleapis.com/fcm/send", options).then(res => {
        console.log(res)
        // console.log('SENT')
    }).catch(e => console.log(e))

    // console.log(body)
}

document.getElementById('btnSubscribe').addEventListener('click', subscribeUser)
document.getElementById('btnSend').addEventListener('click', sendNotification)