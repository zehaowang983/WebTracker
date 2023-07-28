import type { PlasmoCSConfig } from "plasmo"
import { getPort } from "@plasmohq/messaging/port"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    world: "MAIN"
}

let lastScrollPosition = window.scrollY;

async function getScrollAction() {
  try {
    const url = window.location.href;
    const currentScrollPosition = window.scrollY;
    let scrollDirection;  

    if (currentScrollPosition > lastScrollPosition) {
        scrollDirection = "down";
    } else if (currentScrollPosition < lastScrollPosition) {
        scrollDirection = "up";
    }

    console.log("Scroll direction:", scrollDirection);

    lastScrollPosition = currentScrollPosition;
    const setScrollActionPort = await getPort("setScrollAction");
    setScrollActionPort.postMessage({
        body: {
            url: url, 
            directions: scrollDirection
        }
    })
    setScrollActionPort.onMessage.addListener(function(res) {
        console.log(res)
    });
    
  }
  catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener("scroll", getScrollAction);
