class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const map = {'act': ['atc'], 'pots': []}
        const map = {}

        for (const char of strs) {
            const sortedStr = [...char].sort((a, b) => a.localeCompare(b)).join("");

            if (!map[sortedStr]) {
                map[sortedStr] = []
            }
        }

        for (const char of strs) {
            const sortedStr = [...char].sort((a, b) => a.localeCompare(b)).join("");

            map[sortedStr].push(char)
        }

        return Object.values(map)
    }
}
