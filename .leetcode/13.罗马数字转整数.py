#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] 罗马数字转整数
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        ROWMAN = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        ans = 0
        for x,y in pairwise(s):
            #处理当前字符和下一字符的关系
            x,y = ROWMAN[x], ROWMAN[y]
            if x>=y:
                ans += x
            else:      #IV=4,处理这类情况
                ans -= x
        ans += ROWMAN[s[-1]]
        return ans
# @lc code=end

