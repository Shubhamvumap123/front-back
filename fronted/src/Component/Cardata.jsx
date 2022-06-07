import React, {useState,useEffect} from "react"
import axios from 'axios'

const Cdata = () => {
const [data,setdata] = useState([]);
const [page,setpage] = useState(0);
const [count,setcount] = useState(0);
const [query,setQuery] = useState([]);
 let pagescount = new Array(count).fill(null).map((v, i) => i);
console.log("startdata");
useEffect(() =>{
    
      if (query.length === 0 || query.length > 2)
        fetch(`http://localhost:5000/fb?page=${page} ?q=${query}`)
          .then((res) => res.json())
          .then(({ totalPages, posts }) => {
            setdata(posts);
            setcount(totalPages);
            console.log("post", posts, "totalpages", totalPages);
          });
;

},[page,query])
console.log("lastdata",count);
  return (
    <div>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      {data.map((e) => (
        <div key={e.m}>
          <div>{e.id}</div>
          <img src={e.image} />
          <div>{e.brand}</div>
          <div>{e.color}</div>
        </div>
      ))}
      {pagescount.map((e) => {
        return <button onClick={() => setpage(e)}>{e + 1}</button>;
      })}
    </div>
  );
}

export default Cdata