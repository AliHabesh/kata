
function replaceVowel(word){
    let lowerCaseWord = word.toLowerCase(); //converts to lower case
    let resultingWord = "";
    const letterMap = new Map(); //store all the values in a map for fast retrieval
    letterMap.set('a', '1');
    letterMap.set('e', '2');
    letterMap.set('i', '3');
    letterMap.set('o', '4');
    letterMap.set('u', '5');

    for(let i = 0; i < word.length; i++){
        if(letterMap.has(lowerCaseWord.charAt(i))){
            resultingWord += letterMap.get(lowerCaseWord.charAt(i));
        }else{
            resultingWord += lowerCaseWord.charAt(i);
        }
    }
   return resultingWord;
}



console.log(replaceVowel("chEmBur")) //ch2mb5r