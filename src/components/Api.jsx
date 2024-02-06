import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import Github from "./Github";


const Api = () => {
  





  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  const getuser = async () => {
    try{
      const getdata = await fetch("https://jsonplaceholder.typicode.com/users");
      setLoading(false);
      setUser(await getdata.json());
    }catch(error){
      setLoading(false);
      console.log(error);
    }
    
  };

  useEffect(() => {
    getuser();
  }, []);

  if(loading){
    return <Loading />
  }

  return (
    <>
    <Github user={user} />
    </>
  )
};

export default Api;
