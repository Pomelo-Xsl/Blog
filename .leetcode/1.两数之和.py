#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和,两次嵌套遍历暴力解法
#

# @lc code=start
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i]+nums[j] == target:
                    return [i,j]
        return []  # 无解情况
# @lc code=end
