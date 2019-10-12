export const isSquare = function(n){
    let isSq = false;
     if(n === 0) {
       isSq = true;
     }
     
     let max = n / 2;
     while(max--){
     
       if((max*max) == n)
         isSq = true;
      
      }
    return isSq;
}