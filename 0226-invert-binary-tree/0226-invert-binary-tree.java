/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public TreeNode invertTree(TreeNode root) {
      if (root != null) {
          invertTree(root.left);
          invertTree(root.right);

          TreeNode temp = root.right;
          root.right = root.left;
          root.left = temp;
      }

      return root;
  }
}

// Runtime: 0 ms (100.00%), Memory: 41.02 MB (43.98%)

// Recursive Approach
// n = number of nodes in the tree
// Time Complexity: O(n)
// Space Complexity: O(n)
// Note: The space complexity is O(n) because of the recursion stack. In the worst case, the recursion stack will have n/2 nodes. This is the case when the binary tree is skewed. For a balanced binary tree, the height of the tree is log(n). So, the space complexity is O(log(n)).
