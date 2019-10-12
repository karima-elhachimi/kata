var isSquare = function(n){
    if(n < 0) {
      return false;
    }
    if(n === 0) 
    return true;
    
    let max = n /2;
    while(max--){
    
    if((max*max) === n) {
      return true;
    }
    
    return false;
    
    }
}