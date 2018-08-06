class Solution:
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        l = len(haystack)
        nLen = len(needle)
        if nLen == 0:
            return 0
        nIdx = 0

        while nIdx
        
        return -1

import unittest

class TestSolution(unittest.TestCase):
    def test_strStr(self):
        s = Solution()
        self.assertEqual(s.strStr("asdf", "fe"), -1)
        self.assertEqual(s.strStr("asdf", "as"), 0)
        self.assertEqual(s.strStr("", ""), 0)
        self.assertEqual(s.strStr("hello", "ll"), 2)
        self.assertEqual(s.strStr("aaaaa", "bba"), -1)
        self.assertEqual(s.strStr("a", ""), 0)
        self.assertEqual(s.strStr("mississippi", "issip"), 4)

unittest.main()
