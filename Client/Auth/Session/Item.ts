export class Item<K extends string, V> {
	private constructor(
		private key: K,
		private fromString: (v: string | undefined) => V | undefined,
		private toString: (v: V) => string,
		private storage: Pick<Storage, "getItem" | "setItem" | "removeItem">
	) {}
	get(): V | undefined {
		return this.fromString(this.storage.getItem(this.key) ?? undefined)
	}
	set(value: V | undefined): V | undefined {
		if (value != undefined && value != null)
			this.storage.setItem(this.key, this.toString(value))
		else
			this.storage.removeItem(this.key)
		return value
	}

	static create<K extends string, V>(
		key: K,
		setup: {
			fromString: (v: string | undefined) => V | undefined
			toString: (v: V) => string
			storage: Pick<Storage, "getItem" | "setItem" | "removeItem">
		}
	) {
		return new Item(key, setup.fromString, setup.toString, setup.storage)
	}
}
