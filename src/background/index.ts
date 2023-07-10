import { app, auth } from "~firebase"
import { getFirestore } from "firebase/firestore"

export {}
export const firestore = getFirestore(app)

