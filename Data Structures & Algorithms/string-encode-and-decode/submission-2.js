class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";
        for (const str of strs) {
            string += `${str.length}#${str}`;
        }

        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const length = parseInt(str.slice(i, j));
            i = j + 1;

            const word = str.slice(i, i + length);
            res.push(word);

            i = i + length;
        }

        return res;
    }
}
