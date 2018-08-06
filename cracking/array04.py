#Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        length = len(nums)
        if length < 2: return False
        arr = sorted(nums)
        prev = arr[0]
        for i in range(1, length):
            if arr[i] == prev:
                return True
            prev = nums[i]
        return False

import unittest

class test_solution(unittest.TestCase):
    def test_containsDuplicate(self):
        s = Solution()
        self.assertEqual(s.containsDuplicate([]), False)
        self.assertEqual(s.containsDuplicate([1]), False)
        self.assertEqual(s.containsDuplicate([1,1]), True)
        self.assertEqual(s.containsDuplicate([3,1]), False)
        self.assertEqual(s.containsDuplicate([1,2,3,4,5]), False)
        self.assertEqual(s.containsDuplicate([1,2,3,2,5,1]), True)

unittest.main()
