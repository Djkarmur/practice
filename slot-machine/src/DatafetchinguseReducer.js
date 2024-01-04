import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialpost={
  loading:true,
  error:'',
  post:{}
};
const reducer = (state,action) =>{
    switch(action.type){
        case 'fetch_success':
          return{
            loading:false,
            error:'',
            post:action.payload
          }

          case 'error_occur':
            return{
              loading:false,
              error:'something went wrong',
              post:{}
            }

            default:
              return state 
              
    }
}

const DatafetchinguseReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialpost);
     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(res=>{
            dispatch({type:'fetch_success',payload:res.data})
         })
         .catch(err =>{
            dispatch({type:'error_occur'})
         })
     },[])
  return (
    <div>
      { 
        state.loading ? 'loading' : state.post.title
      }
      {state.error ? state.error :null}
    </div>
  )
}

export default DatafetchinguseReducer
