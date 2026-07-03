class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a,b) => a - b);

        let longestCS = 0;
        let count = 1;

        for(let i = 1; i < nums.length; i++){
            if (nums[i] - nums[i-1] === 1) count++;
            else if (nums[i] === nums[i - 1]) continue;
            else{
                if(count > longestCS) longestCS = count;
                count = 1;
            }
        }

        return Math.max(longestCS, count);
    }
}
