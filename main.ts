import { Node } from "./node.ts";

const helloWorld = async (_key: string): Promise<string> =>
	await Promise.resolve("Hello, World!");

const randomNumber = async (key: string): Promise<string> =>
	await Promise.resolve(Math.floor(Math.random() * key.length).toString());

const bukaBrowser = async (_key: string): Promise<void> => {
	const argument = { args: ["https://musaki.pages.dev"] };
	// Example for Linux:
	if (Deno.build.os === "linux") {
		await new Deno.Command("xdg-open", argument).output();
	}
	// Example for Windows:
	else if (Deno.build.os === "windows") {
		await new Deno.Command("start", argument).output();
	}
	// For macOS, you can use 'open':
	else if (Deno.build.os === "darwin") {
		await new Deno.Command("open", argument).output();
	}
};

const node1 = new Node("hello", helloWorld);
const node2 = new Node("User2", randomNumber);
const node3 = new Node("User3", bukaBrowser);

node1.value(node1.key).then(console.log); // Output: Hello, World!
node2.value(node2.key).then(console.log); // Output: Random number, e.g., "57"
node3.value(node3.key).then(console.log);
