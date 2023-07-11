
import "@plasmohq/messaging"

interface MmMetadata {
	"getCurrentTab" : {}
	"getQueryAction" : {}
	"setQueryAction" : {}
}

interface MpMetadata {
	
}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
  interface PortsMetadata extends MpMetadata {}
}
