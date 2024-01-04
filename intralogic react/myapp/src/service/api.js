import axios  from "axios";
async function getPosts(){
    try {
        
        let posts  = await axios.get("https://my-json-server.typicode.com/typicode/demo/post")
        return posts.data;
    } catch (error) {
        console.log(error)
    }
axios.get().then((DATA)=>{

}).catch((ERR)=>{

}).finally

}

export default getPosts