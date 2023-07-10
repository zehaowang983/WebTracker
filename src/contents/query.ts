import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"] // Only relay messages from this domain
}
async function getCurrentTab() {
  const url = await sendToBackground({ name: "getCurrentTab" });
  const urlParams = new URLSearchParams(url);
  const query = urlParams.get('oq');
  console.log(query);
  const resp2 = await sendToBackground({ name: "storeCurrentQuery", body: {url: url, query:query}});
  console.log(resp2);

}

window.addEventListener("load", getCurrentTab);
