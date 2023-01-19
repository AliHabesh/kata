console.log(["1a", "a", "2b", "b"].filter(word => {
    for(let i = 0; i < word.length; i++){
        if(!isNaN(word.charAt(i))){
            return word;
        }
    }
})); 