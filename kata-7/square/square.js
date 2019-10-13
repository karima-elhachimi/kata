const isSquare = function(n){
    let isSq = false;
     if(n === 0)
       isSq = true;

     let max = n > 0 ? Math.floor(n /2): null;

     while(max){
       if(Number(max*max) === Number(n))
         isSq = true;
      max -= 1 ;
      }

    return isSq;
}

module.exports = isSquare;