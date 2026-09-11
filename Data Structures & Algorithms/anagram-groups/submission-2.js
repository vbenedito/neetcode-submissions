class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for (const char of strs) {
            const sortedStr = [...char].sort((a, b) => a.localeCompare(b)).join("");

            if (!map[sortedStr]) {
                map[sortedStr] = []
            }

            map[sortedStr].push(char)
        }

        return Object.values(map)
    }
}
