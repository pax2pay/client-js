import { Issue } from "./Issue"

export interface PasswordResetResponse {
	status: "SUCCESS" | "FAILURE"
	url?: string
	issues?: Issue[]
}
