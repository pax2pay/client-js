export class Entry<K extends string, V> {
	private constructor(
		private key: K,
		private fromString: (v: string | undefined) => V | undefined,
		private toString: (v: V) => string,
		private storage: Pick<Storage, "getItem" | "setItem" | "removeItem">
	) {}

	private listeners: ((value: V | undefined) => void)[] = []
	listen(callback: (value: V | undefined) => void) {
		callback(this.getItem())
		return this.lazyListen(callback)
	}
	lazyListen(callback: (value: V | undefined) => void) {
		this.listeners.push(callback)
		return callback
	}
	unlisten(callback: (value: V | undefined) => void) {
		const index = this.listeners.indexOf(callback)
		console.log("unlisten", index)
		console.log("before unliustened ", this.listeners)
		if (index > 0)
			this.listeners.splice(index, 1)
		console.log("after unliustened ", this.listeners)
	}

	getItem(): V | undefined {
		return this.fromString(this.storage.getItem(this.key) ?? undefined)
	}
	setItem(value: V | undefined): V | undefined {
		if (value)
			this.storage.setItem(this.key, this.toString(value))
		else
			this.storage.removeItem(this.key)
		this.listeners.forEach(callback => callback(value))
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
		return new Entry(key, setup.fromString, setup.toString, setup.storage)
	}
}
