import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDaXmECRx2Bgny1-W3vGds4-lXwwmHHjnw",
	authDomain: "react-firebase-example-c9d92.firebaseapp.com",
	databaseURL: "https://react-firebase-example-c9d92.firebaseio.com",
	storageBucket: "react-firebase-example-c9d92.appspot.com",
	messagingSenderId: "205125215271"
};
firebase.initializeApp(config);

export const db_ref = firebase.database().ref();
export const auth = firebase.auth();
