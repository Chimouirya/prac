let fun1=(arr1)=>{
      let arr2 = arr1.map((value,i)=>{
           if(value%2===0){
            return true
           }
           else {
            return false
           }
  
      })
      console.log(arr2);
        
    }

export default fun1