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
      type: "scroll",
      openat:  Timestamp.fromDate(new Date()),
      url: req.body.url,
      directions: req.body.directions
    };
    
    const docRef = await addDoc(collection(firestore, "scroll_actions"), docData);
    console.log("Document written with ID: ", docRef.id)
    res.send("Document written with ID: " + docRef.id)
  }
  catch (error) {
    console.error(error)
    res.send(error)
  }
};
 
export default handler;
