import { Issue } from "./Issue"

export interface MPayProcessResponse {
	status: "SUCCESS" | "FAILURE"
	issues?: Issue[]
}
