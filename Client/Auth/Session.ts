import { isly } from "isly"
import * as model from "../../model"

export namespace Session {
	export const keys = ["roles", "features", "authData"] as const
	export type Key = typeof keys[number]
	export const keyType = isly.string<Key>(keys)
	export const is = keyType.is

	type Convert = {
		roles: string[]
		features: model.PaxpayFeature[]
		authData: Partial<model.LoginResponse>
	}
	const fromString: {
		[key in Key]: (stringValue: string | undefined) => Convert[key] | undefined
	} = {
		roles: (v: string | undefined) => v?.split(","),
		features: (v: string | undefined) => v?.split(",") as model.PaxpayFeature[],
		authData: (v: string | undefined) => (v ? JSON.parse(v) : undefined),
	}
	const toString: { [key in Key]: (v: Convert[key]) => string } = {
		roles: v => v.join(","),
		features: v => v.join(","),
		authData: v => JSON.stringify(v),
	}
	export function setItem<K extends Key>(key: K, value: Convert[K] | undefined) {
		if (value)
			window.sessionStorage.setItem(key, toString[key](value))
		else
			window.sessionStorage.removeItem(key)
		return value
	}
	export function getItem<K extends Key>(key: K): Convert[K] | undefined {
		return fromString[key](window.sessionStorage.getItem(key) ?? undefined)
	}
}
