let fun = (arr)=>{
    let arr1 = arr.map((value,i)=>{
           if(value){
            return value *2
           }
           else{
            return value +1
           }
    })
    console.log(arr1);
}

export default fun