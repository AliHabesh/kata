
function reorder(word){
    let letters = word.split("");
    let capitalLetters = "";
    let smallLetters = "";
    let numbers = "";
    for(i = 0; i < letters.length; i++){
        if(letters[i].match(/[A-Z]/)){
            capitalLetters += letters[i];
        }
        
        if(letters[i].match(/[a-z]/)){
            smallLetters += letters[i];
        }
        
        if(letters[i].match(/[0-9]/)){
            numbers += letters[i];
        }
    }
    return capitalLetters+smallLetters+numbers;
}

console.log(reorder("s9hOrt4CAKE"));
