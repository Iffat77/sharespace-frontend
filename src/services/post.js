import axios from "axios";``
import api from "./apiConfig";

//GET


export const getAllPost = async()=>{ 
try{ 
const data = api.get("/endpoint")
}
catch(err){
    (error=> console.log(error))
    }
}

//get single project

export const getSinglePost = async(id) => { 
    try{ 
        const data = api.get(`endpoint/:${id}`)
        return data
    }
    catch(err){ 
        console.log(err)
    }
}

//POST
export const postPost = function (post) {
try {
  const postPost = {
    post: post.post,
    publish_date: post.publish_date,
 
  };
  const data = await api.post("/endpoint", postPost);
  // console.log(postPost.team); //this is for testing
  return data
}
catch(error){ 
    console.log(error)
    }   
}

//PUT
export const updatePost = async(id, body) => {
try{ 
    const updateData = await api.put(`/endpoint${id}`, body)
    return updateData.data
} 
catch(err){ 
    console.log(err)
}
}
//DELETE
export const deletePost= async(id )=>{ 
try {
    const deleteData = await axios.delete(`/endpoint/${id}`)
    return deleteData
    }
catch(err){ 
    console.log(err)
}
}