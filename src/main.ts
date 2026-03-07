export class Solution {
	minEatingSpeed(piles: number[], hours: number) {
		let optimalSpeed = Math.max(...piles)

		let minSpeed = 1
		let maxSpeed = optimalSpeed

		while (minSpeed <= maxSpeed) {
			let avgSpeed = (minSpeed + maxSpeed) >> 1
			let time = 0

			for (let pile of piles) {
				time += Math.ceil(pile / avgSpeed)
			}

			if (time <= hours) {
				optimalSpeed = Math.min(optimalSpeed, avgSpeed)
				maxSpeed = avgSpeed - 1
			} else {
				minSpeed = avgSpeed + 1
			}
		}
		return optimalSpeed
	}
}
