class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const valuesIterator = map.values();

        for (const role of valuesIterator) {
            if (role > 1) return true;
        }

        return false;
    }
}
