import type { PlasmoMessaging } from "@plasmohq/messaging"
import {
  doc,
  getDoc
} from "firebase/firestore"
import { firestore } from "../index";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    
    try{
        console.log("get data")
        const docRef = doc(firestore, "histories", "history");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data())
            res.send(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("Document does not exist");
            res.send("Document does not exist")
        }
    }catch (error) {
        console.error("Error reading document:", error);
        res.send("Error reading document:" + error)
    }
};
 
export default handler;
