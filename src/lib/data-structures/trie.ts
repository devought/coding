class TrieNode {
	public children: (null | TrieNode)[];
	public isEnd: boolean;

	public constructor() {
		this.children = Array.from({ length: 26 }, () => null);
		this.isEnd = false;
	}
}

export class Trie {
	private root: TrieNode;

	public constructor() {
		this.root = new TrieNode(); // dummy node
	}

	public insert(word: string) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			const ascii = word.charCodeAt(i) - 97;
			if (!current.children[ascii]) {
				current.children[ascii] = new TrieNode();
			}
			current = current.children[ascii];
		}

		current.isEnd = true;
	}

	public search(word: string) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			const ascii = word.charCodeAt(i) - 97;
			if (!current.children[ascii]) return false;
			current = current.children[ascii];
		}

		return current.isEnd;
	}

	public startsWith(word: string) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			const ascii = word.charCodeAt(i) - 97;
			if (!current.children[ascii]) return false;
			current = current.children[ascii];
		}
		return true;
	}
}
