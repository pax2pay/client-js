import { MCC } from "./MCC"
import { MCCRange } from "./MCCRange"

export interface AllowedMccConfig {
	allowedMccs?: Set<MCC>
	allowedRanges?: Set<MCCRange>
}

//TODO is function if Set from mpay can be type checked here
