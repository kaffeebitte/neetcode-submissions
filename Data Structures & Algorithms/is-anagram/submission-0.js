class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const map = new Map();

        for (let x of s){
            if(map.has(x)){
                map.set(x, map.get(x) + 1);
            }
            else{
                map.set(x, 1);
            }
        }

        for (let x of t) {
            if(map.has(x) && map.get(x) > 0){
                map.set(x, map.get(x) - 1);
            }
            else{
                return false;
            }
        }

        return true;
    }
}
