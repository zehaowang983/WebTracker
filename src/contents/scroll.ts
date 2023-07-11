import type { PlasmoCSConfig } from "plasmo"
import { getPort } from "@plasmohq/messaging/port"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    world: "MAIN"
}

async function getScrollAction() {
  try {
    // const url = await sendToBackground({ name: "getCurrentTab" });

    const setScrollActionPort = await getPort("setScrollAction");
    setScrollActionPort.postMessage({
      body: {
        url: "111", 
        directions: "222"
      }
    })
    // const resp2 = await sendToBackground({ name: "getQueryAction", body: {url: url, query:query}});
    setScrollActionPort.onMessage.addListener(function(res) {
      console.log(res)
    });
    
  }
  catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener("scroll", getScrollAction);
