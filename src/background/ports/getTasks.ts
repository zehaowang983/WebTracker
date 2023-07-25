import type { PlasmoMessaging } from "@plasmohq/messaging";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../index";

const getCollectionData = async (collectionName: string) => {
  return new Promise((resolve, reject) => {
    const unsub = onSnapshot(collection(firestore, collectionName), (col) => {
      const colData = col.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      resolve(colData);
    }, (error) => {
      reject(error);
    });
    return unsub;
  });
};

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const taskData = await getCollectionData("tasks");

    res.send(taskData);
  } catch (error) {
    console.error("Error reading document:", error);
    res.send("Error reading document: " + error);
  }
};

export default handler;
