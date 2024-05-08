# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root:
            right = self.invertTree(root.right)
            left = self.invertTree(root.left)

            root.left = right
            root.right = left
            
        return root

# Runtime: 41 ms (16.76%), Memory: 16.49 MB (86.88%)
