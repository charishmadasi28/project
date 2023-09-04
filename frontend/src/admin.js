import React, { useState } from 'react';
import axios from 'axios';


const Adminlogin = () => {
  const [mail, setmail] = useState('');
  const [password, setpassword] = useState('');

  const Submit=async() =>{
    try{
     const result = await axios.post("http://localhost:8000/admin/"+mail+'/'+password);
     console.log(result.data)
        if(result.data)
        {
            alert("Successfully logged in");
            nav('/pv')
          
        }
        else{
            alert("USER NOT FOUND");
            
        }
    }
    catch(e)
    {
     console.log(e);
    }
    
 }
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log('Login clicked');
  };

  return (
    <div className='div6' >
      
          <h1>Admin Login</h1>
          
          <form onSubmit={handleSubmit}>
            
            <label>mail:<input required type="mail" value={mail} onChange={(e) => setmail(e.target.value)} />
              </label><br/>
            
            
            <label>Password: <input required type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
              </label>
            
            <button onClick={Submit}>LOGIN</button>
            
          </form>
        
    </div>
  );
};

export default Adminlogin;