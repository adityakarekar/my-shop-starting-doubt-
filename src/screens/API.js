const registerAPI="http://localhost:3100/api/register";

export const Function_registerAPI = user =>
{
    return fetch (registerAPI, {
      method:"POST",
      headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
      .then(response=>{
          return response.json();
      })
        .catch(err=>console.log(err));
};

//JSON.stringify(user):used to convert array input to json;
//fetch in react.js is similar to GET in Node.js;