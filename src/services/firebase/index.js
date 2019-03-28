import firebaseApp from "./firebase";

export const db = firebaseApp.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export const auth = firebaseApp.auth();
