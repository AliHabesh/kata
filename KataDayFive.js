console.log(["this is a test", "test1"].filter(word => {
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) == ' '){
            continue;
        }
        if(!isNaN(word.charAt(i))){
            return word;
        }
    }
})); 