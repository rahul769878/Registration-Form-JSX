import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';


const BasicForm = () => {

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    let changeValue=(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
    }

    let submitData=(e)=>{
      e.preventDefault();
      console.log(input);
        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",input)
        .then((value)=>console.log(value))
        .catch((v)=>{
            swal("Hello world!");
            console.log(v);
        }
        )
    }
    return<>
  <h1 className='container mt-5'>My Form</h1>
<form onSubmit={submitData} className="container mt-5">
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">First Name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" name="firstName" onChange={changeValue}/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" name="lastName" onChange={changeValue}/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={changeValue}/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputEmail1" name="password" onChange={changeValue}/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
  <input type="password" className="form-control" id="exampleInputEmail1" name="confirmPassword" onChange={changeValue}/>
</div>

{/* <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" for="exampleCheck1">Check me out</label>
</div> */}
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
    
}

export default BasicForm;