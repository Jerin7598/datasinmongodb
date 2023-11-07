
import React, { useEffect, useState } from "react";



function User(){


    const[images,setImages]=useState([]);

async function fetchImages() {
      try{
        const response=await fetch("http://localhost:5000/users");
        const data=await response.json();
        console.log("test")

     let m=data.filter(x=>x!==null)
        
          setImages(m);
console.log(m)
      }
      catch(error){
console.error("something wrong",error);
      }
    }

    useEffect(()=>{
    
        fetchImages();
      },[]);


    

    return(
        <div>

{images.map((data,key)=>
  <p>Name : {data.name}<br></br>
  Address : {data.Address}<br></br>
  Profession : {data.profession}<br></br>
  Mobile Number : {data.Mobilenumber}<br></br>
  User Id: {data._id}
  </p>
  
  )}
        </div>
    )
}
export default User;