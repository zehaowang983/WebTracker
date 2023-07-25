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
      task_title: req.body.task_title,
      task_description: req.body.task_description,
      task_conclusion: req.body.task_conclusion,
      created_at:  Timestamp.fromDate(new Date()),
      user_id: req.body.user_id,
      is_solved: false
    };
    
    const docRef = await addDoc(collection(firestore, "tasks"), docData);
    console.log("Document written with ID: ", docRef.id)
    res.send("Document written with ID: " + docRef.id)
  }
  catch (error) {
    console.error(error)
    res.send(error)
  }
};
 
export default handler;
