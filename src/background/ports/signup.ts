import type { PlasmoMessaging } from "@plasmohq/messaging"
import {
  collection,
  addDoc,
  Timestamp
} from "firebase/firestore"
import { firestore } from "../index";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  
  try {
    const docData = {
      username: req.body.username,
      password: req.body.password,
    };
    
    const docRef = await addDoc(collection(firestore, "users"), docData);
    console.log("Document written with ID: ", docRef.id)
    res.send("Document written with ID: " + docRef.id)
  }
  catch (error) {
    console.error(error)
    res.send(error)
  }
};
 
export default handler;
