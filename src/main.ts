export class Solution {
	nextGreaterElement(nums1: number[], nums2: number[]): number[] {
		const nextGreater = new Map<number, number>()
		const stack: number[] = []

		for (const num of nums2) {
			while (stack.length > 0 && stack[stack.length - 1] < num) {
				nextGreater.set(stack.pop()!, num)
			}
			stack.push(num)
		}

		return nums1.map((v) => nextGreater.get(v) ?? -1)
	}
}
