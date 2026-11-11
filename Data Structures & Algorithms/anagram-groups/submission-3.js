class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};

        for (const str of strs) {
            const sorted = [...str].sort().join("");
            count[sorted] = [];
        }

        for (const str of strs) {
            const sorted = [...str].sort().join("");

            if (count[sorted]) {
                count[sorted].push(str);
            }
        }

        return Object.values(count);
    }
}
