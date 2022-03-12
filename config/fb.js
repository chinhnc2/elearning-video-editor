const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require("../certs/elearning-a890f-firebase-adminsdk-b7y1b-0024b928e3.json");

initializeApp({
    credential: cert(serviceAccount)
})

module.exports = {
    db: getFirestore()
}