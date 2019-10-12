const isSquare = function(n){
    let isSq = false;
     if(n === 0) {
       isSq = true;
     }
     
     let max = n / 2;
     while(max){
       if((max*max) == n)
         isSq = true;
      max -= 1 ;
      }
    return isSq;
}

export default isSquare;