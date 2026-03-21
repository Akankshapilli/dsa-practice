/**
 * Problem: 217. Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=22fmu8yh&
 * Difficulty: Easy
 * Pattern: Arrays
 *
 * Approach (write this BEFORE coding):
 * 1. We take an input array and store it in nums.
 * 2. We use set() to check for duplicates.
 * 3. We compare the lengths of set array and the original array.
 * 4. When the length is same, then we return false.
 * 5. When the length is different, then we return true.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function solution(nums) {
  return new Set(nums).size !== nums.length;
}

// Test cases
console.log(solution([1, 2, 3, 1])); // true
console.log(solution([1, 2, 3, 4])); // false
console.log(solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
