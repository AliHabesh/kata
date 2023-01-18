

console.log(testing(64));

function Hello(n){

    for(let i = 1; i < n-1; i++){
        let loop = true;
        let result = i;
        let iteration = 0;
        while(loop){
            result += iteration++;

            if(result == n){
                return true;
            }

            if(result > n) {
                continue;
            }
            
        }


    }

}