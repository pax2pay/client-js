import { Field as MField } from "./Field"
import { Request as MRequest } from "./Request"
import { Response as MResponse } from "./Response"
import { Search as MSearch } from "./Search"
import { SubFormatType as MSubFormatType } from "./SubFormatType"

export namespace MetadataFormat {
	export import Search = MSearch
	export import Request = MRequest
	export import Response = MResponse
	export import SubFormatType = MSubFormatType
	export import Field = MField
}
