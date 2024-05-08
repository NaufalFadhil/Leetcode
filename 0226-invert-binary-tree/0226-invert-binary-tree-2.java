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
          Queue<TreeNode> queue = new LinkedList<TreeNode>();
          queue.add(root);

          while (!queue.isEmpty()) {
              TreeNode currentNode = queue.poll();
              TreeNode temp = currentNode.right;
              currentNode.right = currentNode.left;
              currentNode.left = temp;

              if (currentNode.left != null) { queue.add(currentNode.left); }
              if (currentNode.right != null) { queue.add(currentNode.right); }

          }
      }

      return root;
      
  }
}

// Runtime: 0 ms (100.00%), Memory: 41.03 MB (43.71%)

// Iterative Approach
// n = number of nodes in the tree
// Time Complexity: O(n)
// Space Complexity: O(n)
// Note: The space complexity is O(n) because of the queue. In the worst case, the queue will have n/2 nodes. This is the case when the binary tree is skewed. For a balanced binary tree, the height of the tree is log(n). So, the space complexity is O(log(n)).