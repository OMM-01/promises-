function coinTossed (){
  return new Promise ((resolve, reject)=>{
   const isHead = Math.random()>0.5
   setTimeout(() => {
    if(isHead){
      resolve("you win");
     }else {
      reject("you lose");
     }
    
    }, 1000);
  })
}

coinTossed().then(result =>console.log(result)).catch(Error => console.log(Error));