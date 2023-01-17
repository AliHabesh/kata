function bestFriend(sentence, firstLetter, secondLetter) {
  for (let i = 0; i < sentence.length; i++) {
    console.log(!sentence.charAt(i + 1) == secondLetter)
    if (sentence.charAt(i) == firstLetter && sentence.charAt(i + 1) != secondLetter) {
        return false;
    }
  }
  return true;
}

console.log(bestFriend("we found your dynamite", "d", "y")); //false
console.log(bestFriend("he headed to the store", "h", "e")); //true
