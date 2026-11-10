import { isly } from "isly"
import { ExtractionSummary } from "./ExtractionSummary"
import { MetadataRequest } from "./MetadataRequest"

export interface DraftAlternative {
	meta: MetadataRequest
	_extraction: ExtractionSummary
}
export namespace DraftAlternative {
	export const type = isly.object<DraftAlternative>({
		meta: MetadataRequest.type,
		_extraction: ExtractionSummary.type,
	})
	export const is = type.is
}
