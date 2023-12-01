function isPalindrome(value) {
  const trimValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

  return trimValue.split("").reverse().join("") === trimValue;
}

module.exports = isPalindrome;
