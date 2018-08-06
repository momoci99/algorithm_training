class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        count = 0
        for i in range(length):
            if nums[i] == 0:
                count += 1
            else:
                if count > 0: nums[i - count] = nums[i]
        for i in range(count):
            i = length - 1 - i
            nums[i] = 0
        return nums

import unittest

class Test_Solution(unittest.TestCase):
    def test_moveZeroes(self):
        s = Solution()
        self.assertEqual(s.moveZeroes([]), [])
        self.assertEqual(s.moveZeroes([0,1,0,2,3,4]), [1,2,3,4,0,0])
        self.assertEqual(s.moveZeroes([1,2,3,4,0,0]), [1,2,3,4,0,0])
        self.assertEqual(s.moveZeroes([1,2,3,4]), [1,2,3,4])

unittest.main()