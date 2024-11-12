import { isly } from "isly"
import { MetadataFieldValidationRequest } from "./MetadataFieldValidationRequest"
import { MetadataValueFieldCategory } from "./MetadataValueFieldCategory"
import { MetadataValueFieldType } from "./MetadataValueFieldType"

export type Field = Field.Base & (Field.Base.Value | Field.Base.Object | Field.Base.List)

export namespace Field {
	export const type = isly.fromIs(
		"MetadataFieldRequest",
		(value: any): value is Field =>
			Base.type.is(value) && (Base.Value.is(value) || Base.Object.is(value) || Base.List.is(value))
	)
	export const is = type.is

	export type Value = Base & Field.Base.Value
	export namespace Value {
		export const type = isly.fromIs(
			"MetadataFieldRequest.Value",
			(value: any): value is Value => Base.is(value) && Base.Value.is(value)
		)
		export const is = type.is
	}
	export type Object = Base & Field.Base.Object
	export namespace Object {
		export const type = isly.fromIs(
			"MetadataFieldRequest.Object",
			(value: any): value is Field.Object => Base.is(value) && Base.Object.is(value)
		)
		export const is = type.is
	}
	export type List = Base & Field.Base.List
	export namespace List {
		export const type = isly.fromIs(
			"MetadataFieldRequest.List",
			(value: any): value is List => Base.is(value) && Base.List.is(value)
		)
		export const is = type.is
	}

	export interface Base {
		name: string
		description?: string
		validation?: MetadataFieldValidationRequest
	}
	export namespace Base {
		export const type = isly.object<Base>({
			name: isly.string(),
			description: isly.string().optional(),
			validation: MetadataFieldValidationRequest.type.optional(),
		})
		export const is = type.is

		export interface Value {
			type: MetadataValueFieldType
			category?: MetadataValueFieldCategory
		}
		export namespace Value {
			export const type = isly.object<Value>({
				type: MetadataValueFieldType.type,
				category: MetadataValueFieldCategory.type.optional(),
			})
			export const is = type.is
		}

		export interface Object {
			fields: Field[]
		}
		export namespace Object {
			export const type = isly.object<Base.Object>({
				fields: isly.array(isly.fromIs("MetadataFieldRequest", Field.is)),
			})
			export const is = type.is
		}

		export interface List {
			contains: Field
		}
		export namespace List {
			export const type = isly.object<List>({
				contains: isly.fromIs("MetadataFieldRequest", Field.is),
			})
			export const is = type.is
		}
	}
}
