import type { PlasmoCSConfig } from "plasmo"
import { getPort } from "@plasmohq/messaging/port"
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    world: "MAIN"
}

async function getJumpAction() {
  try {

    const sourceUrl = window.location.href;
    const clickedElement = event.target as HTMLElement;
    
    // Perform checks to determine if the click happened on a link
    if (clickedElement.tagName === "A") {
        const destinationUrl = (clickedElement as HTMLAnchorElement).href;
        
        // Do something with the URLs
        console.log("Source URL:", sourceUrl);
        console.log("Destination URL:", destinationUrl);
    }
   
  }
  catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener("click", getJumpAction);
