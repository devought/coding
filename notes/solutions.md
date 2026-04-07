### Code Solutions of Leetcode / Codeforces / CSAcademy

---

#### [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

```typescript
export const isAnagram = (s: string, t: string): boolean => {
	const lenS = s.length;
	const lenT = t.length;

	if (lenS != lenT) return false;

	const frequencyCount = Array.from({ length: 26 }, () => 0);

	for (let i = 0; i < lenS; i++) {
		frequencyCount[s.charCodeAt(i) - 97]++;
		frequencyCount[t.charCodeAt(i) - 97]--;
	}

	return frequencyCount.every((value) => value === 0);
};
```

---

#### [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

```typescript
export const lengthOfLastWord = (s: string): number => {
	let length = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		const char = s[i];
		if (char == " " && length > 0) break;
		else if (char == " ") continue;
		else length++;
	}

	return length;
};
```

---

#### [String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/description/)

```typescript
export const stringMatching = (strs: string[]): string[] => {
	// 1. Sort strings by their length
	strs.sort((a, b) => a.length - b.length);

	// 2. Collect all strings that could be substring of other strings from incoming array
	const matches = [] as string[];

	for (let i = 0; i < strs.length; i++) {
		// 3. Flag to mark current string as match to push it into result array
		let includes = false;
		for (let j = i + 1; j < strs.length; j++) {
			if (strs[j].includes(strs[i])) {
				includes = true;
				break;
			}
		}
		if (includes) {
			matches.push(strs[i]);
		}
	}

	return matches;
};
```

---

#### [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

```typescript
import { keyBuilder } from "./lib";

export const groupAnagrams = (strs: string[]): string[][] => {
	// Handle edge cases
	if (strs.length === 0) return [];
	if (strs.length === 1) return [strs];

	const groups = new Map<string, string[]>();

	for (const str of strs) {
		// Use keyBuilder utility to get frequency histogram of current string
		const key = keyBuilder(str, 97);

		let group = groups.get(key);

		if (!group) {
			group = [];
			groups.set(key, group);
		}

		group.push(str);
	}

	return Array.from(groups.values());
};
```

---

#### [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

```typescript
export const generate = (n: number): number[][] => {
	if (n === 0) return [];
	if (n === 1) return [[1]];

	const rows: number[][] = [[1]];

	for (let i = 1; i < n; i++) {
		const last = rows[rows.length - 1];
		const current: number[] = [];

		current.push(1);

		for (let j = 1; j < last.length; j++) {
			current.push(last[j] + last[j - 1]);
		}

		current.push(1);
		rows.push(current);
	}

	return rows;
};
```

---

#### [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/)

```typescript
export const canPlaceFlowers = (nums: number[], n: number): boolean => {
	const size = nums.length;

	// We're checking if n is bigger than all plantable positions and all elements are 0
	if (n > Math.ceil(size / 2)) return false;

	// Count how many flowers you can plant
	let count = 0;

	for (let i = 0; i < size; i++) {
		if (nums[i] !== 0) continue;

		const leftEmpty = i === 0 || nums[i - 1] === 0;
		const rightEmpty = i === size - 1 || nums[i + 1] === 0;

		if (leftEmpty && rightEmpty) {
			nums[i] = 1;
			count++;

			if (count >= n) return true;
		}
	}

	return false;
};
```

---

#### [Next Greater Element](https://leetcode.com/problems/next-greater-element-i/description/)

```typescript
export const nextGreaterElement = (
	a_list: number[],
	b_list: number[],
): number[] => {
	const ans = Array.from({ length: a_list.length }, () => -1);

	// save indices to know where to put a next greater element in result array
	const indices_map = new Map<number, number>();
	a_list.forEach((value, index) => indices_map.set(value, index));

	// keep the stack in decreasing order to get it work
	const stack: number[] = [];

	for (let i = 0; i < b_list.length; i++) {
		const b = b_list[i];
		while (stack.length > 0 && stack[stack.length - 1] < b) {
			const value = stack.pop() ?? 0;
			const index = indices_map.get(value) ?? 0;

			ans[index] = b;
		}

		if (indices_map.has(b)) {
			stack.push(b);
		}
	}

	return ans;
};
```

---

#### [Longest Strictly Decreasing or Strictly Increasing Subarray](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/)

```typescript
export const longestMonotonicSubarray = (list: number[]): number => {
	let longest = 1;

	let increasing = 1;
	let decreasing = 1;

	for (let i = 1; i < list.length; i++) {
		const curr = list[i];
		const prev = list[i - 1];

		// you should reset both variables in case of equal elements
		if (curr == prev) {
			increasing = 1;
			decreasing = 1;
		} else if (curr > prev) {
			increasing++;
			decreasing = 1;
		} else {
			decreasing++;
			increasing = 1;
		}

		longest = Math.max(longest, increasing, decreasing);
	}

	return longest;
};
```

---

#### [Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/description/)

```typescript
export const maxAscendingSum = (nums: number[]): number => {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];

	let best = nums[0];
	let curr = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			curr += nums[i];
		} else {
			curr = nums[i];
		}

		best = Math.max(best, curr);
	}

	return best;
};
```

---

#### [Pivot Index](https://leetcode.com/problems/find-pivot-index/description/)

```typescript
export const pivotIndex = (nums: number[]): number => {
	const n = nums.length;

	if (n === 0) return -1;
	if (n === 1) return 0;

	const totalSum = nums.reduce((acc, value) => acc + value, 0);

	let leftSum = 0;

	for (let i = 0; i < n; i++) {
		const difference = totalSum - nums[i];
		const half = difference / 2;

		if (half === leftSum) return i;

		leftSum += nums[i];
	}

	return -1;
};
```

---

#### [Kth Distinct String in an Array](https://leetcode.com/problems/kth-distinct-string-in-an-array/description/)

```typescript
export const kthDistinct = (list: string[], k: number): string => {
	const freqCount = new Map<string, number>();

	for (const str of list) {
		freqCount.set(str, (freqCount.get(str) ?? 0) + 1);
	}

	let count = 0;
	for (const [str, freq] of freqCount) {
		if (freq === 1) {
			count++;
			if (count === k) return str;
		}
	}

	return "";
};
```

---

#### [Find All Numbers Disappeared in Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/)

```typescript
export const findDisappearedNumbers = (list: number[]): number[] => {
	if (list.length === 0) return [];

	const disappeared: number[] = [];

	for (let i = 0; i < list.length; i++) {
		const index = Math.abs(list[i]) - 1;
		if (list[index] > 0) {
			list[index] *= -1;
		}
	}

	for (let i = 0; i < list.length; i++) {
		if (list[i] > 0) {
			disappeared.push(i + 1);
		}
	}

	return disappeared;
};

/* 
Imagine a list [1,1,3]. Since all values are in [1,n] where n the length of the array we can use elements as indexes to mark them as visited and get disappeared ones.

1. First 1 mutates himself -> [-1, 1, 3]
2. Second 1 also mutates first 1 and basically it won't change anything since first 1 already mutated -> [-1, 1, 3]
3. Last 3 points to himself so it will mutate himself -> [-1, 1, -3]

We have second 1 as positive value and we take its index + 1 to find disappeared element -> i + 1 = 2


Same approach works for all other arrays that maintain our conditions

*/
```

---

#### [Find Missing and Repeating Values](https://leetcode.com/problems/find-missing-and-repeated-values/description/)

```typescript
export const findMissingAndRepeatedValues = (grid: number[][]): number[] => {
	const n = grid.length;

	if (n === 0) return [];

	const formula_sum = ((n ** 2 + 1) * n ** 2) / 2;
	const unique = new Set<number>();

	let actual_sum = 0;
	let duplicate = -1;

	for (let i = 0; i < n; i++) {
		if (grid[i].length !== n) throw new Error("Grid is not quadratic");
		for (let j = 0; j < n; j++) {
			const curr = grid[i][j];

			if (unique.has(curr)) {
				duplicate = curr;
			} else {
				actual_sum += curr;
				unique.add(curr);
			}
		}
	}

	return [duplicate, formula_sum - actual_sum];
};
```

---

#### [Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/description/)

```typescript
export const maxNumberOfBalloons = (s: string): number => {
	const charCount = new Map<string, number>();
	const charSet = new Set(["b", "a", "l", "o", "n"]);
	for (let i = 0; i < s.length; i++) {
		if (charSet.has(s[i])) {
			charCount.set(s[i], (charCount.get(s[i]) ?? 0) + 1);
		}
	}

	return Math.min(
		charCount.get("b") ?? 0,
		charCount.get("a") ?? 0,
		(charCount.get("l") ?? 0) >> 1,
		(charCount.get("o") ?? 0) >> 1,
		charCount.get("n") ?? 0,
	);
};
```

---

#### [Design HashSet](https://leetcode.com/problems/design-hashset/description/)

```typescript
import { ListNode } from "./lib";

export class MyHashSet {
	private nodes: ListNode[];
	private readonly SIZE = 1000;
	public constructor() {
		this.nodes = Array.from({ length: this.SIZE }, () => new ListNode());
	}

	public add(key: number) {
		const hash = key % this.SIZE;

		// remember first node is dummy node, we dont consider it
		let node = this.nodes[hash];

		while (node.next) {
			// we're not gonna store duplicates
			if (node.next.val === key) return;

			node = node.next;
		}

		// now we are at the end of current node chain and we can insert the key
		node.next = new ListNode(key);
	}

	public remove(key: number) {
		const hash = key % this.SIZE;

		let node = this.nodes[hash];
		while (node.next) {
			if (node.next.val === key) {
				// once we found the node to delete we just change pointers
				node.next = node.next.next;
				return;
			}
			node = node.next;
		}
	}

	public contains(key: number) {
		const hash = key % this.SIZE;

		let node = this.nodes[hash];

		while (node.next) {
			if (node.next.val === key) return true;
			node = node.next;
		}

		return false;
	}
}

/* 
We use combination of array and linked list to handle collisions.
Since keys are in range [0,1_000_000] we allocate array of 1000 elements
and put dummy list node and distribute collisions in chain of list nodes

Same technique you can use for problem 706. Design HashMap where you use ListNode with additional field key

*/
```

---

#### [Height Checker](https://leetcode.com/problems/height-checker/description/)

```typescript
export const heightChecker = (list: number[]): number => {
	if (list.length === 0) return 0;

	const LIMIT = 100;

	const frequency = Array.from({ length: LIMIT }, () => 0);

	// fill the frequency map
	list.forEach((v) => {
		frequency[v - 1]++;
	});

	let listIndex = 0;
	let mismatches = 0;

	// iterate through all possible heights 1 - 100
	for (let height = 1; height <= LIMIT; height++) {
		let count = frequency[height - 1];

		// while we have student with height `height`
		while (count > 0) {
			// if there is student with different height in that place in incoming array that is mismatch
			if (list[listIndex] !== height) {
				mismatches++;
			}

			listIndex++;
			count--;
		}
	}

	return mismatches;
};

/* 
In this problem the constraints are so small we could just sort the input array and just count the mismatches
But i wanna try out the even optimal solution where we sort the numbers while comparing them with original array

*/
```

```typescript
// Simplified version

export const heightChecker = (list: number[]): number => {
	if (list.length === 0) return 0;

	const sorted = list.slice().sort((a, b) => a - b);

	return sorted.reduce((acc, value, i) => {
		if (value !== list[i]) acc++;
		return acc;
	}, 0);
};
```

---
