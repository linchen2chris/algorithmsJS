const lengthOfLongestSubstring = s => {
  // let charactersDict = {};
  // let results = [];
  // let head = 0;
  // let tail = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (charactersDict[s[i]] !== undefined) {
  //     results.push(tail - charactersDict[s[i]]);
  //     results.push(charactersDict[s[i]]);
  //     head = charactersDict[s[i]] + 1;
  //     // delete all before head
  //     // for (var j = 0; j < head; j++) {
  //     //   delete charactersDict[s[j]];
  //     // }
  //     charactersDict[s[i]] = i;
  //   } else {
  //     charactersDict[s[i]] = i;
  //     tail++;
  //   }
  // }
  // results.push(tail - head);
  // return Math.max(...results);

  const map = {};
  let currStart = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (map.hasOwnProperty(letter) && map[letter] >= currStart) {
      currStart = map[letter] + 1;
    }
    map[letter] = i;
    max = Math.max(i - currStart + 1, max);
  }
  return max;
};

export default lengthOfLongestSubstring;
