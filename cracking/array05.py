#Given an array of integers, every element appears twice except for one. Find that single one.
#Note:Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0
        for n in nums:
            res ^= n
        return res


import unittest

class test_Solution(unittest.TestCase):
    def test_singleNumber(self):
        s = Solution()
        self.assertEqual(s.singleNumber([1]), 1)
        self.assertEqual(s.singleNumber([3,3,2,4,4]), 2)
        self.assertEqual(s.singleNumber([4,4,3,3,2,2,1]), 1)
        self.assertEqual(s.singleNumber([1,2,3,4,1,2,3]), 4)

unittest.main()