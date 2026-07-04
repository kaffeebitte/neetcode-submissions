/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const array = [];
        let i = 0;
        
        while (head) {
            array[i] = head;
            head = head.next; 
            i++;
        }
        // head = new ListNode(null);

        for(let j = array.length - 1; j >= 0; j--){
            if(j > array.length - n){
                head = array[j];
            } else if (j === array.length - n){
                if(j === 0) continue;
                head = array[j];
                j--;
                head.val = array[j].val;
            } else {
                let temp = new ListNode();
                temp.val = head.val;
                temp.next = head.next;

                head = array[j];
                head.next = temp;
            }
        }
    
        return head;
    }
}
