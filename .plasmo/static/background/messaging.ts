// @ts-nocheck
globalThis.__plasmoInternalPortMap = new Map()

import { default as messagesGetCurrentTab } from "~background/messages/getCurrentTab"
import { default as messagesGetQueryAction } from "~background/messages/getQueryAction"
import { default as messagesSetQueryAction } from "~background/messages/setQueryAction"

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.name) {
    case "getCurrentTab":
  messagesGetCurrentTab({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "getQueryAction":
  messagesGetQueryAction({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
case "setQueryAction":
  messagesSetQueryAction({
    sender,
    ...request
  }, {
    send: (p) => sendResponse(p)
  })
  break
    default:
      break
  }

  return true
})

chrome.runtime.onConnect.addListener(function(port) {
  globalThis.__plasmoInternalPortMap.set(port.name, port)
  port.onMessage.addListener(function(request) {
    switch (port.name) {
      
      default:
        break
    }
  })
})

