import { Format as NotificationFormat } from "./Format"
import { InsertRequest as NotificationInsertRequest } from "./InsertRequest"
import { Response as NotificationResponse } from "./Response"
import { Search as NotificationSearch } from "./Search"
import { Tag as NotificationTag } from "./Tag"
import { Type as NotificationType } from "./Type"

export namespace Notification {
	export type Format = NotificationFormat
	export type InsertRequest = NotificationInsertRequest
	export type Response = NotificationResponse
	export type Search = NotificationSearch
	export type Tag = NotificationTag
	export type Type = NotificationType
}
