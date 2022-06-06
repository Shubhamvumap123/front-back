import React, {useState,useEffect} from "react"
import axios from 'axios'

const Cardata = () => {
const [data,setdata] = useState([]);
console.log("startdata");
useEffect(() =>{
    axios.get(`http://localhost:5000/fb`)
    .then(res =>{
        console.log(res)
        setdata(res.data)
    })
},[])
console.log("lastdata");
  return (
    <div>
<h1>Hallo</h1>
    </div>
  )
}

export default Cardata