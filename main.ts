import { LinkedList } from "./linkedlist.ts";

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

//const node1 = new Node("hello", helloWorld);
//const node2 = new Node("User2", randomNumber);
//const node3 = new Node("User3", bukaBrowser);
//
//node1.value(node1.key).then(console.log); // Output: Hello, World!
//node2.value(node2.key).then(console.log); // Output: Random number, e.g., "57"
//node3.value(node3.key).then(console.log);
const linkedList = new LinkedList();

// Inserting function-based values
linkedList.insert("hello", helloWorld);
linkedList.insert("random", randomNumber);
linkedList.insert("browser", bukaBrowser);

// Inserting string values, which should be wrapped in a function
linkedList.insert("greeting", "Hello, World!");
linkedList.insert("world", "Hello, Universe!");
linkedList.insert("kelas", "mantap");

const node1 = await linkedList.search("hello");
if (node1) console.log(node1); // "Hello, World!"
const node2 = await linkedList.search("random");
if (node2) console.log(node2); // Random number
const node3 = await linkedList.search("browser");
if (node3) console.log(node3); // undefined (since it returns void)
const node4 = await linkedList.search("greeting");
if (node4) console.log(node4); // "Hello, World!"
const node5 = await linkedList.search("world");
if (node5) console.log(node5); // "Hello, Universe!"
const node6 = await linkedList.search("kelas");
if (node6) console.log(node6); // "mantap"
