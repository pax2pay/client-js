/**
 * Information about the booker
 */
export interface AgentBookingInfo {
	agentBookingOrgCode?: string
	agentBookingSystemRef?: string
	agentBookingBasketRef?: string
	agentBookingBookingRef?: string
}

export namespace AgentBookingInfo {
	export function is(value: AgentBookingInfo | any): value is AgentBookingInfo {
		return (
			typeof value == "object" &&
			(value.agentBookingOrgCode == undefined || typeof value.agentBookingOrgCode == "string") &&
			(value.agentBookingSystemRef == undefined || typeof value.agentBookingSystemRef == "string") &&
			(value.agentBookingBasketRef == undefined || typeof value.agentBookingBasketRef == "string") &&
			(value.agentBookingBookingRef == undefined || typeof value.agentBookingBookingRef == "string")
		)
	}
}
