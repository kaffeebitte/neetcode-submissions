class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if ( intervals.length === 1) return intervals;
        const result = [];

        intervals.sort((a,b) => a[0] - b[0]);
        for(let i = 0; i < intervals.length; i++){
            if(i + 1 === intervals.length){
                result.push(intervals[i]);
                continue;
            }
            
            if(intervals[i + 1][0] <= intervals[i][1]){
                intervals[i + 1] = [Math.min(intervals[i][0], intervals[i + 1][0]), Math.max(intervals[i][1], intervals[i + 1][1])];
            } else{
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
