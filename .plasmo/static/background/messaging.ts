// @ts-nocheck
globalThis.__plasmoInternalPortMap = new Map()

import { default as messagesGetCurrentTab } from "~background/messages/getCurrentTab"
import { default as portsGetAllActions } from "~background/ports/getAllActions"
import { default as portsGetTaskDetail } from "~background/ports/getTaskDetail"
import { default as portsGetTasks } from "~background/ports/getTasks"
import { default as portsSetAskAiAction } from "~background/ports/setAskAIAction"
import { default as portsSetJumpAction } from "~background/ports/setJumpAction"
import { default as portsSetQueryAction } from "~background/ports/setQueryAction"
import { default as portsSetQuoteAction } from "~background/ports/setQuoteAction"
import { default as portsSetScrollAction } from "~background/ports/setScrollAction"
import { default as portsSetTask } from "~background/ports/setTask"
import { default as portsSignin } from "~background/ports/signin"
import { default as portsSignup } from "~background/ports/signup"

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
    default:
      break
  }

  return true
})

chrome.runtime.onConnect.addListener(function(port) {
  globalThis.__plasmoInternalPortMap.set(port.name, port)
  port.onMessage.addListener(function(request) {
    switch (port.name) {
      case "getAllActions":
  portsGetAllActions({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "getTaskDetail":
  portsGetTaskDetail({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "getTasks":
  portsGetTasks({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setAskAIAction":
  portsSetAskAiAction({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setJumpAction":
  portsSetJumpAction({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setQueryAction":
  portsSetQueryAction({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setQuoteAction":
  portsSetQuoteAction({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setScrollAction":
  portsSetScrollAction({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "setTask":
  portsSetTask({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "signin":
  portsSignin({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
case "signup":
  portsSignup({
    port,
    ...request
  }, {
    send: (p) => port.postMessage(p)
  })
  break
      default:
        break
    }
  })
})

