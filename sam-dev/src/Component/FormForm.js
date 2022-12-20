import React, { useState } from 'react'

const FormForm = () => {
    let [name,setName]=useState('')
    let [age,setAge]=useState('')
    let [maritialstatus,setMaritialstatus]=useState(false)
    let [gender,setGender]=useState('')
    let [country,setCountry]=useState('')
    let [dob,setDob]=useState(new Date())
     
  return (
    <>
        <form onSubmit={(e)=>{
               e.preventDefault()
               let data ={
                   name:name,
                   age:age,
                   maritialstatus:maritialstatus,
                   gender: gender,
                   country: country,
                   dob:dob
               }
               console.log(data)
        }}>
            <div>
                <label>name :</label>
                <input type='text' placeholder='Enter Name ' value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}></input>
            </div>
            <div>
                <label>age:</label>
                <input type='text' placeholder='Enter Age ' value={age} onChange={(e)=>{
                    setAge(e.target.value)
                }}></input>
            </div>
            <div>
                <label>maritialstatus:</label>
                <input type='checkbox'  checked={maritialstatus===true} onChange={(e)=>{
                    setMaritialstatus(e.target.checked)
                }}></input>

           
            <div>
                
            Male<input type="radio" name="gender" value="male" checked={gender==="male"} onChange={(e)=>{
            setGender(e.target.value)
    }}
    ></input>
    <br></br>
    Female<input type="radio" name="gender" value="female"
    checked ={gender==="female"}
     onChange={(e)=>{
        setGender(e.target.value)
    }}></input>
    <br></br>
    Other<input type="radio" name="gender" value="other"
    checked={gender==="other"}
     onChange={(e)=>{
        setGender(e.target.value)
    }}></input>
            </div>
            </div>
            <div>
                <label>country:</label>
                <select name='country' id='country' value={country} onChange={(e)=>{
                    setCountry(e.target.value)
                }}>
                  <option>Nepal</option>
                  <option>Cadana</option>
                  <option>China</option>
                  <option>India</option>
                  <option>Germany</option>
                  <option>Korea</option>
                </select>
            </div>
            <div>
                <label> Select the DOB</label>
                
                <input type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}}></input>
            </div>
            <button type='submit'>
                   Create 
            </button>
        </form>
    </>
  )
}

export default FormForm