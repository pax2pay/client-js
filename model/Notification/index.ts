import { Format as NotificationFormat } from "./Format"
import { InsertRequest as NotificationInsertRequest } from "./InsertRequest"
import { Response as NotificationResponse } from "./Response"
import { Tag as NotificationTag } from "./Tag"
import { Type as NotificationType } from "./Type"

export namespace Notification {
	export import Format = NotificationFormat
	export import InsertRequest = NotificationInsertRequest
	export import Response = NotificationResponse
	export import Tag = NotificationTag
	export import Type = NotificationType
}
