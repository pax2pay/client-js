import * as model from "../../../model"
import { Entry } from "./Entry"

// TODO: split Roles, features, AuthData into separate static classes??
// TODO: change authData to something better

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

	export const roles = Entry.create("roles", {
		fromString: (v: string | undefined) => v?.split(","),
		toString: v => v.join(","),
		storage,
	})
	export const features = Entry.create<"features", model.PaxpayFeature[]>("features", {
		fromString: (v: string | undefined) => v?.split(",") as model.PaxpayFeature[],
		toString: (v: model.PaxpayFeature[]) => v.join(","),
		storage,
	})
	export const authentication = Entry.create("authentication", {
		fromString: (v: string | undefined) => (v ? (JSON.parse(v) as Partial<model.LoginResponse>) : undefined),
		toString: (v: Partial<model.LoginResponse>) => JSON.stringify(v),
		storage,
	})
}
