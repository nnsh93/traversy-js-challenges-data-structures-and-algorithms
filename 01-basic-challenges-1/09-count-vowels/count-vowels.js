function countVowels(value) {
  const checkMatch = value.match(/[aeiou]/gi);
  console.log(checkMatch);

  return checkMatch ? checkMatch.length : 0;
}

module.exports = countVowels;
