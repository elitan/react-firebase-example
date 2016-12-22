// rename me from index-example.js to index.js
// add correct apiKey, authDomain etc to the config object below
import * as firebase from 'firebase';

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
	messagingSenderId: ""
};
firebase.initializeApp(config);

export const db_ref = firebase.database().ref();
export const auth = firebase.auth();
