import type { PlasmoMessaging } from "@plasmohq/messaging";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../index";

const getTaskById = async (taskId: string) => {
  try {
    const taskDocRef = doc(firestore, "tasks", taskId);
    const taskDoc = await getDoc(taskDocRef);
    
    if (taskDoc.exists()) {
      return {
        id: taskDoc.id,
        ...taskDoc.data(),
      };
    } else {
      throw new Error("Task not found.");
    }
  } catch (error) {
    throw error;
  }
};

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const taskData = await getTaskById(req.body.task_id);

    res.send(taskData);
  } catch (error) {
    console.error("Error getting task:", error);
    res.send("Error getting task: " + error);
  }
};

export default handler;
