#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]  # 简单的字符串反转
        
# @lc code=end