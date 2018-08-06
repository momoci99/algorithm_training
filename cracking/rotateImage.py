import math
class Solution:
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        m = math.floor(n /2)
        for y in range(m):
            for x in range(0 + y, n - y - 1):
                pass