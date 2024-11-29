export class Node {
	private _next: Node | null = null; // Use a private property to avoid recursion

	constructor(
		public key: string,
		private _value: (key: string) => Promise<string | void>, // _value is a function that returns a Promise<string>
	) {}

	// Getter for value that resolves the promise returned by _value
	get value(): (key: string) => Promise<string | void> {
		return this._value; // Return the function itself
	}

	// Setter to update the _value function
	set value(newValue: (key: string) => Promise<string | void>) {
		this._value = newValue;
	}

	// Getter for next node
	get next(): Node | null {
		return this._next;
	}

	// Setter for next node
	set next(node: Node | null) {
		this._next = node;
	}
}
