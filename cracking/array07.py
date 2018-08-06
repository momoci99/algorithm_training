class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        length = len(digits)
        for i in range(length):
            i = length - i - 1
            if digits[i] == 9:
                digits[i] = 0
                if i == 0: digits = [1] + digits
            else:
                digits[i] = digits[i] + 1
                break;
        return digits

import unittest

class Test_Solution(unittest.TestCase):
    def test_plusOne(self):
        s = Solution()
        self.assertEqual(s.plusOne([]), [])
        self.assertEqual(s.plusOne([1]), [2])
        self.assertEqual(s.plusOne([9,9,9,9]), [1,0,0,0,0])
        self.assertEqual(s.plusOne([9,9,9,8]), [9,9,9,9])

unittest.main()