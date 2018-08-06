#Rotate Array
#nums를 k만큼 회전
class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        if length < 2: return
        k = k % length
        nums[:k], nums[k:] = nums[(length-k):], nums[:(length-k)]

import unittest

class Test(unittest.TestCase):
    def test_rotate(self):
        nums = []
        Solution().rotate([], 1)
        self.assertEqual(nums, [])
        nums = [1]
        Solution().rotate(nums, 100)
        self.assertEqual(nums, [1])
        nums = [1,2]
        Solution().rotate(nums, 1)
        self.assertEqual(nums, [2,1])
        nums = [1,2,3]
        Solution().rotate(nums, 0)
        self.assertEqual(nums, [1,2,3])
        nums = [1,2,3,4]
        Solution().rotate(nums, 1)
        self.assertEqual(nums, [4,1,2,3])
        nums = [1,2,3,4]
        Solution().rotate(nums, 6)
        self.assertEqual(nums, [3,4,1,2])
        # self.assertEqual(Solution().rotate([1,2,3], 0), [1,2,3])
        # self.assertEqual(Solution().rotate([1,2,3], 1), [3,1,2])
        # self.assertEqual(Solution().rotate([1,2,3,4], 2), [3,4,1,2])
        # self.assertEqual(Solution().rotate([1,2,3,4], 5), [4,1,2,3])

unittest.main()