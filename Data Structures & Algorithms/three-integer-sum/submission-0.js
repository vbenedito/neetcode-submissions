class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-4, -1, -1, 0, 1, 2]
        nums.sort((a, b) => a - b);
        const res = [];
        const seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]];
                        const key = triplet.join(",");
                        if (!seen.has(key)) {
                            seen.add(key);
                            res.push(triplet);
                        }
                    }
                }
            }
        }
        return res;
    }
}
