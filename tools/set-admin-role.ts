/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import * as admin from 'firebase-admin';
import * as optimist from 'optimist';
import { environment } from '../src/environments/environment';

async function main() {

    const {'service-account-path': serviceAccountPath, emails} = optimist
        .usage(`
        Usage:
            yarn set-admin-role \\
                --service-account-path ~/somewhere/firebase-adminsdk.json \\
                --emails user1@wishtack.com,user2@wishtack.com
        `)
        .demand(['service-account-path', 'emails'])
        .describe('service-account-path', `Firebase admin sdk json file can be found here: \
https://console.firebase.google.com/project/YOUR_PROJECTS_NAME_HERE/settings/serviceaccounts/adminsdk`)
        .argv;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
        databaseURL: environment.firebase.databaseURL
    });

    const emailList = emails.split(',');

    const promiseList = emailList.map(async email => {

        const user = await admin.auth().getUserByEmail(email);

        await admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });

    });

    await Promise.all(promiseList);

    /* Disconnect current firebase admin connection. */
    await admin.app().delete();

}

main();
