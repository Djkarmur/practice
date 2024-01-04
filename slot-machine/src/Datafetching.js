import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Datafetching = () => {
    const [posts,setposts]=useState([]);
    const [num,setnum]=useState(1);
    const [click,setclick]=useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)
        .then(res=> setposts(res.data))
        .catch(err=>{
            console.log(err);
        })
        
    },[click])

    const changenum =(ev)=>{
        setnum(ev.target.value);
    }
    const submit=()=>{
        setclick(num);
    }
  return (
    <div>
        <input type="number" value={num} onChange={changenum} />
        <button onClick={submit}>submit</button>
       
      <ul>
        {/* {posts.map(post=> (<li key={post.id}>{post.title}</li>))} */}
        {posts.title}
      </ul>
    </div>
  )
}

export default Datafetching
