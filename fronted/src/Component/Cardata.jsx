import React, {useState,useEffect} from "react"
import axios from 'axios'

const Cardata = () => {
const [data,setdata] = useState([]);
console.log("startdata");
useEffect(() =>{
    axios.get(`http://localhost:5000/fb`)
    .then(res =>{
        console.log(res)
        setdata(res.data.posts)
    })
},[])
console.log("lastdata",data.posts);
  return (
    <div>
{
    data.map(e => <div key={e.id}>
        <div>{e.id}</div>
        <img src={e.image} />
        <div>{e.brand}</div>
        <div>{e.color}</div>
        </div>)
    }
    </div>
  )
}

export default Cardata