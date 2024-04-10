export interface SessionVariable<K extends string, V> {
	key: Readonly<K>
	fromString: (v: string | undefined) => V | undefined
	toString: (v: V) => string
}
