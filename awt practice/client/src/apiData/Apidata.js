import axios from "axios";

const url = 'http://localhost:5000'

export const createUser = async (user) =>{
 return await axios.post(`${url}/enter`, user);
}

export const showUser = async () =>{
    return await axios.get(`${url}/show`);
}

export const getUser = async (id) =>{
    return await  axios.get(`${url}/${id}`);
}

export const updateUser = async(data,id)=>{
    return await axios.put(`${url}/${id}`,data);
}
export const deleteUser = async(id) =>{
    return await axios.delete(`${url}/${id}`);
}