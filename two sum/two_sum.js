/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        var res = target - nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (res == nums[j]) {
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
        }
    }

};