
function replaceVowel(word){
    let lowerCaseWord = word.toLowerCase(); //converts to lower case
    const letterMap = new Map(); //store all the values in a map for fast retrieval
    letterMap.set('a', '1');
    letterMap.set('e', '2');
    letterMap.set('i', '3');
    letterMap.set('o', '4');
    letterMap.set('u', '5');

    for(let i = 0; i < word.length; i++){
        if(letterMap.has(lowerCaseWord.charAt(i))){
            lowerCaseWord = lowerCaseWord.replace(lowerCaseWord.charAt(i), letterMap.get(lowerCaseWord.charAt(i)))
        }
    }
   return lowerCaseWord;
}

console.log(replaceVowel("chEmBur")) //ch2mb5r