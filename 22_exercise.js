function checkEven(element) {
  return element % 2 == 0;
}

function allEvens(nums) {
  var ans = nums.every(checkEven);

  return ans;
}
