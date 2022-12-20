import logo from './logo.svg';
import './App.css';
import fun from './homework/home';
import fun1 from './homework/home1';
import TernaryOperator from './Component/TernaryOperator';
import fun2 from './homework/home2';
import fun3 from './homework/home3';
import FormForm from './Component/FormForm';
import React, { Component }  from 'react';

function App() {
  // let fun1 = (fun2)=>{
  //  fun2()
  // }
  // fun1(()=>{
  //   let a =3
  //   if(a%2==0)
  //   console.log(`It is true`);
  //   else 
  //   console.log(`It is false`);
  // })
  // let fun1 = (fun2)=>{
  //  fun2()
   
  // }
  // fun1(()=>{
  //   let a = 12
  //   let b = 14
  //   let c = 15
    
  //   let avg = (a+b+c)/3
  //   console.log(`the average of a, b and c is `,avg);
  //   return avg
  // })
  
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < 5-i; j++) {
//    string +=""
//   }
//   for(let k =0; k=2*i-1;k++){
//   string +="*"
//   }
//   string += "\n";
// }
//console.log(string);
// let saam ={
//   name:`Shyam`,
//   surname:`Chimouriya`,
//   age:23,
//   educationlevel: `BCA_Seventh_Semester`
// }
// console.log(saam.age);
    //  let arr= [1,2,3,4]

    //  fun(arr)
  //    let arr1 =[1,2,5,8,9]
  
  // fun1(arr1)

// const string = `shyam`
// string.split(``)
// console.log(Array.from(string));

// const arry=[
// {
//   name:`shyam`,
//   age:23
// },
// {
//   name:`rishi `,
//   age:25
// },
// {
//   name:`Sandesh`, 
//   age: 22
// },
// {
//   name:`Akshya`,
//   age:55
// }
// ]
// fun1(arry)

//  let a = [1,8,18,19,3]
//  fun2(a)
// let age = 17
// fun3(age)

  return (
    <div>
      <FormForm/>
     {/* <TernaryOperator/>  */}
  
  
    </div>
  );
}

export default App;
