//app.js
import './App.css';
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


function App() {
  //add user

  const[a,seta]=useState('');
  const[b,setb]=useState('');
  const[c,setc]=useState('');
  const[d,setd]=useState('');

  const aa=(i)=>{
    seta(i.target.value);

  }

  const ab=(i1)=>{
    setb(i1.target.value);
  }

  const ac=(i2)=>{
    setc(i2.target.value);
  }

  const ad=(i3)=>{
    setd(i3.target.value);
  }


//delete user
  const[del,setdel]=useState('');
  const erase=(i4)=>{
    setdel(i4.target.value);
  }

  //update user

  const[id,setid]=useState('');
  const[av,setav]=useState('');
  const[aw,setaw]=useState('');
  const[ax,setax]=useState('');
  const[ay,setay]=useState('');

  const u=(i5)=>{
    setid(i5.target.value);
  }

  const v=(i6)=>{
    setav(i6.target.value);
  }

  const w=(i7)=>{
    setaw(i7.target.value);
  }

  const x=(i8)=>{
    setax(i8.target.value);
  }

  const y=(i9)=>{
    setay(i9.target.value);
  }



  
  //fetch data




//add user
  function adduser(){
   

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:a, Address:b, profession:c, Mobilenumber:d})
  };
  fetch('http://localhost:5000/users', requestOptions)
      
seta('');
setb('');
setc('');
setd('');

  }

  function deleteuser() {
    const userIdToDelete = del; // Assuming del holds the ID you want to delete

    fetch(`http://localhost:5000/users/${userIdToDelete}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('User deleted successfully.');
          // Handle any additional logic here, such as updating the UI.
        } else if (response.status === 404) {
          console.log('User not found.');
          // Handle the case where the user was not found.
        } else {
          console.error('Error deleting user:', response.status);
          // Handle other error cases as needed.
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle network or other errors.
      })
      .finally(() => {
        // Reset the del state after deletion
        setdel('');
      });
  }
  //update user

  function updateuser() {
      
    
const updatedUserData = ({
  name: av,
  Address: aw,
  profession: ax,
  Mobilenumber: ay
}); 
console.log(id)
fetch(`http://localhost:5000/users/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedUserData),
})
  .then((response) => {
    if (response.status === 200) {
      console.log('User updated successfully.');
      // Handle any additional logic here, such as updating the UI.
    } else if (response.status === 404) {
      console.log('User not found.');
      // Handle the case where the user was not found.
    } else {
      console.error('Error updating user:', response.status);
      // Handle other error cases as needed.
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle network or other errors.
  });

  setid('');
  setav('');
  setaw('');
  setax('');
  setay('');

  }




  return (
   <div className="l">
<Link to={'/User'} state={{}} >
    <button >show users</button>
    </Link>
  
    <div className='a3'>
       <h2 className="head">ADD USER</h2>
    <div className='a2' >
      <div>
        <img src="add.png" width="350px"></img>
      </div>
      <div className='a1'>
      <input type="text" placeholder="Enter your name" value={a} onChange={aa}></input><br></br>
      <input type="text" placeholder='Enter your Address'value={b} onChange={ab} ></input><br></br>
      <input type="text" placeholder='Profession' value={c} onChange={ac}></input><br></br>
      <input type="number" placeholder='Enter your Mobile Number' value={d} onChange={ad}></input><br></br>
      
      </div>
    </div>
   
<button onClick={adduser}>Submit</button>



</div>

<div>

 
 <div className="a3">
  <h2 className="h">Delete User by ID</h2>
  <div>
    <img className="di" src="delete.png" width="350px"></img>
  </div>
 <div className="dm" >
  <input type="text" placeholder='Enter the id' value={del} onChange={erase}></input><br></br>
  <button className="bu" onClick={deleteuser}>Delete user</button></div>
 </div>

    </div>

    <div>
      <div className="a3">

      <h2 className="h1">Update User details by ID</h2>

<div className="a2">
      <div>
        <img className="up" src="update.png" width="270px"></img>
      </div>
      
      <div className="aa1">
        <input placeholder='Enter your old ID' type="text" value={id} onChange={u}></input><br></br>
        <input placeholder='Enter your name' type="text" value={av} onChange={v}></input><br></br>
        <input placeholder='Enter you Address' type="text" value={aw} onChange={w}></input><br></br>
        <input  placeholder='Profession' type="text" value={ax} onChange={x}></input><br></br>
        <input placeholder='Enter your Mobile Number' type="number" value={ay} onChange={y}></input><br></br>
     
      </div>  
     
    </div>  <button className="aa2" onClick={updateuser}>Update</button>
    </div><br></br>
    </div>
<div>

</div>
    

    </div>
  );
}

export default App;
