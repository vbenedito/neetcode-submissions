class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let left = 0;
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            while (charSet.has(s[i])) {
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(s[i]);
            res = Math.max(res, i - left + 1);
        }

        return res;
    }
}
