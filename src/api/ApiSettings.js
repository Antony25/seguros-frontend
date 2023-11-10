import axios from 'axios';


export const apiSettings = axios.create({
    baseURL: "http://127.0.0.1:8000", 
    //auth:{
    //      username: ID,
    //      password: PASSWORD
    //    },
    
      
});



