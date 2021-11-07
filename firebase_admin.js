module.exports = class FirebaseAdmin {
    constructor() {
        this.admin = require('firebase-admin')
        this.serviceAccount = require('./service-key.json') //json fiile

        // initializeApp just call once time
        if (!this.admin.apps.length)
            this.admin.initializeApp({
                credential: this.admin.credential.cert(this.serviceAccount),
                databaseURL: 'https://aepsmartcontracts.firebaseio.com' //url database
            })

    }

    instance() {
        return this.admin
    }

    firestoreDB() {
        return this.instance().firestore()
    }
}