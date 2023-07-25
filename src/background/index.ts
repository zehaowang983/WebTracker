import { app, auth } from "~firebase"
import { getFirestore } from "firebase/firestore"
import { Routing } from "~routes"

// Create a context menu item
chrome.contextMenus.create({
    id: "webTracker",
    title: "Web Tracker Main Page",
    contexts: ['action'],
});

// Add a listener for when the menu item is clicked
chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === "webTracker") {
        // Handle the menu item click here
        console.log("Menu item clicked!");
        chrome.runtime.openOptionsPage(() => console.log('options page opened'))
    }
});


// export default {}
export const firestore = getFirestore(app)

    