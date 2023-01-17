
function testing(n){
    for(i = 0; i < n-1; i++){
        let result = i;
        for(k = i+1; k < n-1; i++){
            result+=k;
            if(result > n){
                break;
            }

            if(result == n){
                return true;
            }
        }
    }
    return false;

}



console.log(testing(64));

function Hello(n){

    for(let i = 1; i < n-1; i++){
        let loop = true;
        let result = i;
        let iteration = 0;
        while(loop){
            result += iteration++;

            if(result === n){
                return true;
            }

            if(result > n) {
                continue;
            }
            
        }


    }

}