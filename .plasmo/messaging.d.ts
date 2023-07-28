
import "@plasmohq/messaging"

interface MmMetadata {
	"getCurrentTab" : {}
}

interface MpMetadata {
	"getAllActions" : {}
	"getTaskDetail" : {}
	"getTasks" : {}
	"setAskAIAction" : {}
	"setJumpAction" : {}
	"setQueryAction" : {}
	"setQuoteAction" : {}
	"setScrollAction" : {}
	"setTask" : {}
	"signin" : {}
	"signup" : {}
}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
  interface PortsMetadata extends MpMetadata {}
}
