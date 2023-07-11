import type { PlasmoCSConfig } from "plasmo"
import { getPort } from "@plasmohq/messaging/port"
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    world: "MAIN"
}

async function getSelectedContent() {
  try {
    // const url = await sendToBackground({ name: "getCurrentTab" });
    
    
    const selectedText = window.getSelection().toString();
    // Send the selected text to the background script or perform any desired actions
    if (selectedText && selectedText.length != 0) {
        console.log("Selected text:", selectedText);
    }

    const setQuoteActionPort = await getPort("setQuoteAction");
    setQuoteActionPort.postMessage({
      body: {
        url: "111", 
        quoted: selectedText
      }
    })
    setQuoteActionPort.onMessage.addListener(function(res) {
      console.log(res)
    });
    
  }
  catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener("mouseup", getSelectedContent);
