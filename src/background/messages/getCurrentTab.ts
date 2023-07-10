import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    const urlParams = new URLSearchParams(currentUrl);
    const query = urlParams.get('oq');

    res.send(currentUrl);
  });
}
 
export default handler