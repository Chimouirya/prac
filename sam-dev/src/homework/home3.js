let fun3=(age)=>{
        let age1 = age.map((value,i)=>{
                    if(value>=18){
                        return `you are authorize to  watch this movies`
                    }
                    else{
                        return (`you are not authorize to watch this movies`)
                    }
        }) 
        console.log(age1)
}

export default fun3