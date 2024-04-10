import { isly } from "isly"
import * as model from "../../model"

// TODO: split Roles, features, AuthData into separate static classes??
// TODO: change authData to something better

export namespace Session {
	export const keys = ["roles", "features", "authData"] as const
	export type Key = typeof keys[number]
	export const keyType = isly.string<Key>(keys)
	export const is = keyType.is
	const sessionStorage =
		typeof window == "undefined"
			? (() => {
					const storage: Record<string, string> = {}
					return {
						removeItem: (key: string) => {
							delete storage[key]
						},
						setItem: (key: string, value: string) => {
							storage[key] = value
						},
						getItem: (key: string): string | null => {
							return storage[key] ?? null
						},
					}
			  })()
			: window.sessionStorage

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

	const listeners: { [key in Key]: ((value: Convert[key] | undefined) => void)[] } = {
		roles: [],
		features: [],
		authData: [],
	}

	export function listen<K extends Key>(key: K, callback: (value: Convert[K] | undefined) => void) {
		callback(getItem(key))
		return lazyListen(key, callback)
	}
	export function lazyListen<K extends Key>(key: K, callback: (value: Convert[K] | undefined) => void) {
		listeners[key].push(callback)
		return callback
	}
	export function unlisten<K extends Key>(key: K, callback: (value: Convert[K] | undefined) => void) {
		const index = listeners[key].indexOf(callback)
		if (index > 0)
			listeners[key].splice(index, 1)
	}

	export function setItem<K extends Key>(key: K, value: Convert[K] | undefined) {
		if (value)
			sessionStorage.setItem(key, toString[key](value))
		else
			sessionStorage.removeItem(key)
		listeners[key].forEach(callback => callback(value))
		return value
	}
	export function getItem<K extends Key>(key: K): Convert[K] | undefined {
		return fromString[key](sessionStorage.getItem(key) ?? undefined)
	}
}
