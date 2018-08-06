#
class Solution:
    def getDict(self, arr):
        dic = {}
        for n in arr:
            if n in dic:
                dic[n] += 1
            else:
                dic[n] = 1
        return dic
    
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        dict1, dict2 = self.getDict(nums1), self.getDict(nums2)
        res = []
        for key in dict1:
            if key in dict2:
                c = min(dict1[key], dict2[key])
                res = res + ([key] * c)
        return res

import unittest

class Test_Solution(unittest.TestCase):
    def test_intersect(self):
        s = Solution()
        self.assertEqual(s.intersect([], []), [], "empty arrs")
        self.assertEqual(s.intersect([1], [1]), [1], "one elements")
        self.assertEqual(s.intersect([1,2,3,4],[5,6,7,8]), [], "no results")
        self.assertEqual(s.intersect([1,2,3,4],[1,2,3,4]), [1,2,3,4], "same arrs")
        self.assertEqual(s.intersect([1,1,1,1,2,2,2,2,3,3], [3,3,3,3,2,2,2,2,2]), [2,2,2,2,3,3], "normal")

unittest.main()