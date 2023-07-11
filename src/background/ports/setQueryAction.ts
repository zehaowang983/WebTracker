import type { PlasmoMessaging } from "@plasmohq/messaging"
import {
  doc,
  setDoc,
  Timestamp
} from "firebase/firestore"
import { firestore } from "../index";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  
  try {
    const docData = {
      type: "query",
      openat:  Timestamp.fromDate(new Date()),
      url: req.body.url,
      query: req.body.query 
    };
    
    await setDoc(doc(firestore, "histories", "history"), docData);
    console.log("Set successfully")
    res.send("Set successfully")
  }
  catch (error) {
    console.error(error)
    res.send(error)
  }
};
 
export default handler;
