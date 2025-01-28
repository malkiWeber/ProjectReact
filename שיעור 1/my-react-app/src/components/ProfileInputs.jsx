
import {useState}from "react";
import Profilecard from "./ProfileCard";

function profilelnputs() {
    const [name,setName]=useState(' ')
    const [age,setAge]=useState('0')
    const [hobby,setHobby]=useState(' ')


return (

    
    <>
    
        <input placeholder="Name" value ={name} onChange ={(e) => setName(e.target.value)} ></input>
        <input placeholder="Age" value ={age} onChange ={(e) => setAge(e.target.value)} ></input>
        <input placeholder="Hobby" value ={hobby} onChange ={(e) => setHobby(e.target.value)} ></input>
       
        <Profilecard name ={name} age ={age} hobby ={hobby} > </Profilecard>
      </>
)


};
export default profilelnputs;