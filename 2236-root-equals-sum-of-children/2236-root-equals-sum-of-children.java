/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
  public boolean checkTree(TreeNode root) {
      root.left.val += root.right.val;
      return root.val == root.left.val;
  }
}

// Runtime: 0 ms (100.00%), Memory: 41.10 MB (49.14%)
