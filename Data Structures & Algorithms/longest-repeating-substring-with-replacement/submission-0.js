class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let maxFrequency = 0;
        let maxLength = 0;
        const frequency = new Map();

        while (right < s.length) {
            frequency.set(s[right], (frequency.get(s[right]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, frequency.get(s[right]));

            const windowSize = right - left + 1;

            if (windowSize - maxFrequency > k) {
                frequency.set(s[left], frequency.get(s[left]) - 1);
                left++;
            } else {
                maxLength = windowSize;
            }
            right++;
        }

        return maxLength;
    }
}
