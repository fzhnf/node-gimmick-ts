import { Node } from "./node.ts";

export class LinkedList {
	private head: Node | null = null;

	// Insert a new node
	insert(
		key: string,
		value: string | ((key: string) => Promise<string | void>),
	) {
		// If the value is a string, wrap it in a function that returns a Promise
		const fixValue =
			typeof value === "string"
				? async (_key: string): Promise<string> => await Promise.resolve(value)
				: value;

		// Create the new node with the key and wrapped function value
		const newNode = new Node(key, fixValue);

		// Insert at the beginning (could be adjusted to insert at the end or other position)
		newNode["next"] = this.head; // Link the new node to the previous head
		this.head = newNode; // Make the new node the head of the list
	}

	// Retrieve a node by key
	search(key: string): Promise<string | void> | null {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode.value(key);
			}
			currentNode = currentNode["next"];
		}
		return null;
	}
}
