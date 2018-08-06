class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for i in range(len(nums)):
            n = nums[i]
            if n in dic:
                dic[n].append(i)
            else:
                dic[n] = [i]
        
        for n in dic:
            diff = target - n
            if n == diff:
                if len(dic[n]) == 2: return dic[n]
            else:
                if diff in dic: return [dic[n][0], dic[diff][0]]

import unittest

class Test_Solution(unittest.TestCase):
    def test_twoSum(self):
        s = Solution()
        self.assertEqual(s.twoSum([3,2], 5), [0,1])
        self.assertEqual(s.twoSum([1,2,3,4,5], 9), [3,4])
        self.assertEqual(s.twoSum([1,9,9,2], 18), [1,2])

unittest.main()
#es = Solution().twoSum([1,2], 3)
#print(res)
            


