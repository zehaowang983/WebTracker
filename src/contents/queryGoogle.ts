import type { PlasmoCSConfig } from "plasmo"
import { getPort } from "@plasmohq/messaging/port"
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"] // Only relay messages from this domain
}

async function getCurrentTab() {
  try {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url);
    const query = urlParams.get('oq');
    console.log(query);

    const setQueryActionPort = await getPort("setQueryAction");
    setQueryActionPort.postMessage({
      body: {
        url: url, 
        query:query
      }
    })
    setQueryActionPort.onMessage.addListener(function(res) {
      console.log(res)
    });
    
  }
  catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener("load", getCurrentTab);
