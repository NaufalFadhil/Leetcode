# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root:
            queue = collections.deque([root])
            while queue:
                currentNode = queue.popleft()
                currentNode.left, currentNode.right = currentNode.right, currentNode.left

                if currentNode.left:
                    queue.append(currentNode.left)
            
                if currentNode.right:
                    queue.append(currentNode.right)
            
        return root

# Runtime: 28 ms (92.06%), Memory: 16.59 MB (34.26%)
