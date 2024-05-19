/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode middleNode(ListNode head) {
      ListNode middleNode = head;
      ListNode lastNode = head;

      // 1 2 3 4 5
      while (lastNode != null && lastNode.next != null) {
          middleNode = middleNode.next;
          lastNode = lastNode.next.next;
      }

      return middleNode;
  }
}

// Runtime: 0 ms (100.00%), Memory: 40.86 MB (64.98%)
// Time Complexity: O(n), where n is the number of nodes in the linked list.
// Space Complexity: O(1), no extra space used.
