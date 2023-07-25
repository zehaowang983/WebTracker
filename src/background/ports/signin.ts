import type { PlasmoMessaging } from "@plasmohq/messaging"
import {
  collection,
  addDoc,
  doc,
  getDoc
} from "firebase/firestore"
import { firestore } from "../index";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  
  try {
    const docData = {
      username: req.body.username,
      password: req.body.password,
    };
    
    const docRef = doc(firestore, "users", req.body.username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      res.send("Document data:" + docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  catch (error) {
    console.error(error)
    res.send(error)
  }
};
 
export default handler;
