export class Node {
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
}
