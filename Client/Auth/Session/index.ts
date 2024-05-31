import * as model from "../../../model"
import { Item } from "./Item"

export namespace Session {
	const storage =
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

	export const roles = Item.create("roles", {
		fromString: (v: string | undefined) => v?.split(","),
		toString: v => v.join(","),
		storage,
	})
	export const features = Item.create<"features", model.PaxpayFeature[]>("features", {
		fromString: (v: string | undefined) => v?.split(",") as model.PaxpayFeature[],
		toString: (v: model.PaxpayFeature[]) => v.join(","),
		storage,
	})
	export const login = Item.create("login", {
		fromString: (v: string | undefined) => (v ? (JSON.parse(v) as Partial<model.LoginResponse>) : undefined),
		toString: (v: Partial<model.LoginResponse>) => JSON.stringify(v),
		storage,
	})
}
