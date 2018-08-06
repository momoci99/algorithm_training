class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        length = len(prices)
        if length < 2:
            return 0
        isUp = False
        money = 0
        downPrice = None
        for i in range(length - 1):
            nextIsUp = prices[i] < prices[i + 1]
            if isUp and not nextIsUp:
                money += prices[i] - downPrice
            elif not isUp and nextIsUp:
                downPrice = prices[i]
            isUp = nextIsUp
        if downPrice != None and isUp:
            money += prices[length - 1] - downPrice
        
        return money

import unittest

class Test(unittest.TestCase):
    def test_maxProfit(self):
        self.assertEqual(Solution().maxProfit([1,8,1,8,9]), 8 - 1 + 9 - 1)
        self.assertEqual(Solution().maxProfit([1,1,1,1]), 0)
        self.assertEqual(Solution().maxProfit([9,8,7,6,5,10]), 5)
        self.assertEqual(Solution().maxProfit([0,1,2,3,4,5,6,7]), 7)

unittest.main()