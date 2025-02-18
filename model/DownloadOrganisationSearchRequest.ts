import { isly } from "isly"
import { DownloadFileFormat } from "./DownloadFileFormat"
import { OrganisationSearchRequest } from "./OrganisationSearchRequest"

export interface DownloadOrganisationSearchRequest extends OrganisationSearchRequest {
	fileFormat: DownloadFileFormat
	locale?: string
}

export namespace DownloadOrganisationSearchRequest {
	export const type = OrganisationSearchRequest.type
		.extend<DownloadOrganisationSearchRequest>({
			fileFormat: DownloadFileFormat.type,
			locale: isly.string().optional(),
		})
		.extend(OrganisationSearchRequest.type)
	export const is = type.is
}
