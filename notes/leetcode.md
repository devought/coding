```ts
// Score of a String

const scoreOfString = function (s: string) {
	let score = 0
	for (let i = 0; i < s.length - 1; i++) {
		score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
	}
	return score
}
```

---

```ts
// Concatenation of Array

const getConatenation = function (nums: number[]): number[] {
	return nums.concat(nums)
}
```

---

```ts
// Contains Duplicate

const containsDuplicate = function (nums: number[]): boolean {
	const set = new Set()
	for (const n of nums) {
		if (set.has(n)) return true
		set.add(n)
	}
	return false
}
```

---

```ts
// Valid Anagram

const isAnagram = function (s: string, t: string) {
	if (s.length !== t.length) return false
	const array = Array(26).fill(0) as number[]
	for (let i = 0; i < s.length; i++) {
		array[s.charCodeAt(i) - 97]++
		array[t.charCodeAt(i) - 97]--
	}
	return array.every((v) => v === 0)
}
```

---

```ts
// Replace Elements with Greatest Element on Right Side

const replaceElements = function (array: number[]) {
	let max = -1

	const n = array.length
	const res = [] as number[]

	for (let i = n - 1; i >= 0; i--) {
		res[i] = max
		max = Math.max(max, array[i])
	}

	return res
}
```

---

```ts
// Is Subsequence

const isSubsequence = function (s: string, t: string) {
	if (s.length > t.length) return false

	let spointer = 0
	let tpointer = 0

	while (spointer < s.length && tpointer < t.length) {
		if (s[spointer] === t[tpointer]) spointer++
		tpointer++
	}

	return spointer === s.length
}
```

---

```ts
// Append Characters to String to Make Subsequence

const appendCharacters = function (s: string, t: string) {
	let spointer = 0
	let tpointer = 0

	while (spointer < s.length && tpointer < t.length) {
		if (s[spointer] === t[tpointer]) tpointer++
		spointer++
	}

	return t.length - tpointer
}
```

---

```ts
// Length of Last Word

const lengthOfLastWord = function (s: string) {
	let length = 0

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === ' ' && length > 0) break
		else if (s[i] === ' ') continue
		else length++
	}
	return length
}
```

---

```ts
// Number of Senior Citizens

function countSeniors(details: string[]): number {
	let ageCount = 0

	for (let i = 0; i < details.length; i++) {
		const arr = details[i].split('')
		if (Number(arr[11]) * 10 + Number(arr[12]) > 60) {
			ageCount++
		}
	}
	return ageCount
}
```

---

```ts
// Two Sum

const twoSum = function (array: number[], target: number) {
	const map = new Map<number, number>()
	for (let i = 0; i < array.length; i++) {
		if (map.has(array[i])) return [i, map.get(array[i])!]
		map.set(target - array[i], i)
	}
	return []
}
```

---

```ts
// Max Consecutive Ones

const findMaxConsecutiveOnes = function (ints: number[]) {
	let longest = 0
	let current = 0

	for (let int of ints) {
		if (int === 1) current++
		else current = 0

		longest = Math.max(longest, current)
	}
	return longest
}
```

---

```ts
// String Matching in an Array

const stringMatching = function (strs: string[]) {
	const array = [] as string[]

	for (let i = 0; i < strs.length; i++) {
		for (let j = 0; j < strs.length; j++) {
			if (i == j) continue
			const str1 = strs[i]
			const str2 = strs[j]
			if (str2.includes(str1)) {
				array.push(str1)
				break
			}
		}
	}
	return array
}
```

---

```ts
// Group Anagrams

const keyBuilder = function (str: string) {
	const array = Array(26).fill(0) as number[]
	for (let char of str) {
		array[char.charCodeAt(0) - 97]++
	}
	return array.join('.')
}

const groupAnagrams = function (strs: string[]) {
	const map = new Map<string, string[]>()

	for (let str of strs) {
		const key = keyBuilder(str)
		if (map.has(key)) map.get(key)!.push(str)
		else map.set(key, [str])
	}

	return Array.from(map.values())
}
```

---

```ts
// Pascal's Triangle

const generate = function (n: number) {
	const array = [[1]] as number[][]
	if (n == 1) return array

	for (let i = 2; i <= n; i++) {
		const current = [1] as number[]
		const previous = array[array.length - 1]

		for (let j = 1; j < previous.length; j++) {
			current[j] = previous[j] + previous[j - 1]
		}

		current.push(1)
		array.push(current)
	}

	return array
}
```

---

```ts
// Remove Element

const removeElement = function (ints: number[], value: number) {
	let index = 0
	for (let i = 0; i < ints.length; i++) {
		if (ints[i] != value) {
			ints[index] = ints[i]
			index++
		}
	}
	return index
}
```

---

```ts
// Unique Email Addresses

const numUniqueEmails = function (emails: string[]) {
	let uniqueEmails = new Set<string>()

	for (let email of emails) {
		let [local, domain] = email.split('@')

		local = local.replaceAll('.', '')
		local = local.split('+')[0]

		uniqueEmails.add(`${local}@${domain}`)
	}

	return uniqueEmails.size
}
```

---

```ts
// Isomorphic Strings

const isIsomorphic = function (s: string, t: string) {
	const map = new Map<string, string>()
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i]) && map.get(s[i])! !== t[i]) return false
		map.set(s[i], t[i])
	}
	map.clear()
	for (let i = 0; i < t.length; i++) {
		if (map.has(t[i]) && map.get(t[i])! !== s[i]) return false
		map.set(t[i], s[i])
	}
	return true
}
```

---

```ts
// Can Place Flowers

const canPlaceFlowers = function (ints: number[], n: number) {
	let count = 0

	for (let i = 0; i < ints.length; i++) {
		if (ints[i] == 0) {
			let leftEmpty = i == 0 || ints[i - 1] == 0
			let rightEmpty = i == ints.length - 1 || ints[i + 1] == 0

			if (leftEmpty && rightEmpty) {
				ints[i] = 1
				count++
			}
		}
	}

	return count >= n
}
```

---

```ts
// Majority Element

const majorityElement = function (ints: number[]) {
	let frequency = 1
	let candidate = ints[0]
	for (let i = 1; i < ints.length; i++) {
		if (ints[i] == candidate) frequency++
		else frequency--

		if (frequency == 0) {
			candidate = ints[i]
			frequency = 1
		}
	}
	return candidate
}
```

---

```ts
// Maximum Difference Between Even and Odd Frequency I

const maxDifference = function (str: string) {
	const map = new Map<string, number>()

	let odd = -Infinity
	let even = Infinity
	for (let char of str) {
		map.set(char, (map.get(char) ?? 0) + 1)
	}

	for (let [_, value] of map) {
		if (value & 1) odd = Math.max(odd, value)
		else even = Math.min(even, value)
	}

	return odd - even
}
```

---

```ts
// Next Greater Element I

const getGreaterElement = function (ints: number[], element: number) {
	const index = ints.findIndex((v) => v == element)
	if (index == -1) return -1
	for (let i = index + 1; i < ints.length; i++) {
		if (ints[i] > element) return ints[i]
	}
	return -1
}

const nextGreaterElement = function (ints1: number[], ints2: number[]) {
	const array = [] as number[]
	for (let int of ints1) {
		array.push(getGreaterElement(ints2, int))
	}
	return array
}
```

---

```ts
// Longest Strictly Increasing or Strictly Decreasing Subarray

const longestMonotonicSubarray = function (ints: number[]) {
	const n = ints.length
	let longest = 1

	for (let i = 0; i < n; i++) {
		let currentLength = 1
		for (let j = i + 1; j < n; j++) {
			if (ints[j - 1] < ints[j]) currentLength++
			else break
		}
		longest = Math.max(longest, currentLength)
	}

	for (let i = 0; i < n; i++) {
		let currentLength = 1
		for (let j = i + 1; j < n; j++) {
			if (ints[j - 1] > ints[j]) currentLength++
			else break
		}
		longest = Math.max(longest, currentLength)
	}

	return longest
}
```

---

```ts
// Maximum Ascending Subarray Sum

const maxAscendingSum = function (ints: number[]) {
	let ans = ints[0]
	let ascending = ints[0]

	for (let i = 1; i < ints.length; i++) {
		if (ints[i] <= ints[i - 1]) {
			ascending = ints[i]
		} else {
			ascending += ints[i]
		}

		ans = Math.max(ans, ascending)
	}
	return ans
}
```

---

```ts
// Find Pivot Index

const pivotIndex = function (ints: number[]) {
	const n = ints.length
	const totalSum = ints.reduce((a, b) => a + b, 0)

	let leftSum = 0

	for (let i = 0; i < n; i++) {
		const rightSum = totalSum - ints[i] - leftSum
		if (rightSum == leftSum) return i
		leftSum += ints[i]
	}

	return -1
}
```

---

```ts
// Kth Distinct String in an Array

const kthDistinct = function (strs: string[], k: number) {
	const map = new Map<string, number>()
	for (let str of strs) {
		map.set(str, (map.get(str) ?? 0) + 1)
	}
	let i = 0
	for (let [key, value] of map) {
		if (value == 1) {
			i++
			if (i == k) return key
		}
	}
	return ''
}
```

---

```ts
// Range Sum Query - Immutable

class NumArray {
	private array: number[]

	public constructor(array: number[]) {
		this.array = []
		for (let i = 0; i < array.length; i++) {
			this.array[i] = (this.array[i - 1] ?? 0) + array[i]
		}
	}

	public sumRange(left: number, right: number) {
		return this.array[right] - (this.array[left - 1] ?? 0)
	}
}
```

---

---

## Find All Numbers Disappeared in an Array

Given an array of `n` integers where each element is in range `[1, n]`, find all numbers that are missing.

### Key Insight

Since values are in `[1, n]` and indices are in `[0, n-1]`, each value can map to an index via `value - 1`. This lets us use the array itself as a visited map — no extra space needed.

### Algorithm

**Pass 1 — mark visited indices:**

For each element, calculate its corresponding index: `index = abs(arr[i]) - 1`.
Negate the value at that index to mark it as "seen". We use `abs()` because the value may have already been negated by a previous iteration.

```
[4, 3, 2, 7, 8, 2, 3, 1] - elements
 ↓
[3, 2, 1, 6, 7, 1, 2, 0] - indices
[0, 1, 2, 3, 4, 5, 6, 7]

The indices that stay negative after pass 1 are the ones with no duplicate — those are the reliably marked ones. The indices that flip back positive due to a duplicate happen to coincide with indices that already have a corresponding value, so they won't be collected as missing anyway in pass 2.

```

**Pass 2 — collect missing numbers:**

Any index whose value is still positive was never visited, meaning `index + 1` never appeared in the array.

```
[-4,-3,-2,-7, 8, 2,-3,-1]
              ↑  ↑
         index 4  index 5  →  missing numbers: 5, 6
```

### Why duplicates reveal the gaps

A duplicate value maps to the same index twice — negating it twice cancels out, but the _first_ negation already marks it visited. The index that the duplicate "should have been" (the missing number) is never visited, so it stays positive.

### Complexity

|       |                                             |
| ----- | ------------------------------------------- |
| Time  | O(n) — two linear passes                    |
| Space | O(1) — mutates input array, output excluded |

```ts
// Find All Numbers Disappeared in an Array

const findDisappearedNumbers = function (ints: number[]) {
	const array = [] as number[]

	for (let i = 0; i < ints.length; i++) {
		const index = Math.abs(ints[i]) - 1
		if (ints[index] > 0) ints[index] *= -1
	}

	for (let i = 0; i < ints.length; i++) {
		if (ints[i] > 0) array.push(i + 1)
	}

	return array
}
```

Good catch — look at the debugger, it shows the state after the full first loop:

ints = [-4, -3, -2, -7, 8, 2, -3, -1]
↑ ↑
index 4 index 5 → still positive

```

**Why 8 and 2 at indices 4 and 5 were never touched:**

To negate `ints[4]`, some element would need to produce `index = 4`, meaning its value must be `5`. But **there is no 5 in the array**.

To negate `ints[5]`, some element would need value `6`. **No 6 in the array either**.

```

[4, 3, 2, 7, 8, 2, 3, 1]
↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
[3, 2, 1, 6, 7, 1, 2, 0] ← indices each element points to

```

Index `4` and `5` never appear in that list — so nobody ever visits them to negate them.

**That's exactly the point** — the values that *are* missing (5 and 6) never get to "check in" at their corresponding indices, leaving those slots positive as a signal that they're absent.

```

---

```ts
// Find Missing and Repeated Values

const findMissingAndRepeatedValues = function (grid: number[][]) {
	const n = grid.length
	const flat = grid.flat()

	let duplicate = 0

	for (let i = 0; i < flat.length; i++) {
		const index = Math.abs(flat[i]) - 1
		if (flat[index] < 0) duplicate = index + 1
		else flat[index] *= -1
	}

	const missing = flat.findIndex((v) => v > 0) + 1

	return [duplicate, missing]
}
```

---

```ts
const maxNumberOfBalloons = function (str: string) {
	const map = new Map<string, number>()
	for (let char of str) map.set(char, (map.get(char) ?? 0) + 1)
	return Math.min(
		map.get('b') ?? 0,
		map.get('a') ?? 0,
		(map.get('l') ?? 0) >> 1,
		(map.get('o') ?? 0) >> 1,
		map.get('n') ?? 0
	)
}
```

---

```ts
const wordPattern = function (pattern: string, str: string) {
	const strs = str.split(' ')
	const map = new Map<string, string>()

	if (pattern.length !== strs.length) return false

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i]
		const str = strs[i]

		if (map.has(char) && map.get(char)! !== str) return false
		else map.set(char, str)
	}

	map.clear()

	for (let i = 0; i < strs.length; i++) {
		const char = pattern[i]
		const str = strs[i]

		if (map.has(str) && map.get(str)! !== char) return false
		else map.set(str, char)
	}

	return true
}
```

---

```ts
const heightChecker = function (heights: number[]) {
	const expected = heights.slice().sort((a, b) => a - b)

	let diff = 0
	for (let i = 0; i < expected.length; i++) {
		if (expected[i] !== heights[i]) diff++
	}

	return diff
}
```

```ts
const findLucky = function (ints: number[]) {
	const map = new Map<number, number>()
	for (let int of ints) {
		map.set(int, (map.get(int) ?? 0) + 1)
	}

	let lucky = -1

	for (let [k, v] of map) {
		if (k == v) lucky = Math.max(lucky, k)
	}

	return lucky
}
```
