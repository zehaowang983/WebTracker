import type { PlasmoMessaging } from "@plasmohq/messaging"
import { useFirebase } from "~firebase/hook"
import {
  DocumentData,
  DocumentSnapshot,
  doc,
  getDoc,
  onSnapshot,
  setDoc
} from "firebase/firestore"
import { firestore } from "../index";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {

    const docRef = doc(firestore, "histories", "history");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    res.send(req)
};
 
export default handler;
