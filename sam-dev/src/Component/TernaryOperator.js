import React from 'react'

const TernaryOperator = () => {

    let a =3  

  return (
    <div>
        {
            (a>=3)?<div> I am greater or equal to three</div>
            :(a===3)?<div> I am three</div>
            :(a<3)?<div> I am less than three</div>
            :<div> I am other</div>
        }
        </div>
  )
}

export default TernaryOperator