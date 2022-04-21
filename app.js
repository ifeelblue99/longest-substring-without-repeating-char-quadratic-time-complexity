const data = "pwwkew"

const lengthOfLongestSubstring = function(str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    const helperArr = [str[i]]
    for (let j = i+1; j < str.length; j++) {
      if (!helperArr.includes(str[j])) {
        helperArr.push(str[j])
      }
      else {
        break
      }
    }
    result.push(helperArr)
  }
  let maxLen = 0
  result =  result.filter(arr => {
    if(arr.length >= maxLen) {
      maxLen = Math.max(maxLen, arr.length)
      return true
    }
  })
  return result[result.length-1]
};
//
console.log("answer.",lengthOfLongestSubstring(data));
