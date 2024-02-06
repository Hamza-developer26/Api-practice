import React from 'react'
import { Link } from 'react-router-dom';

const Github = ({user}) => {
  return (
    <div className="gradient">
        <h2 className="font-poppins font-semibold text-4xl flex justify-center text-white py-10 underline underline-offset-[12px] decoration-gray-600">List of api data</h2>
        <div className="flex flex-wrap justify-between">
  {user.map((current) => {
    return (
      <section
        className="glass text-white  flex-col inline-flex border-xl m-4 item-center border-gray-500 rounded p-4 mb-4 font-poppins w-[400px] cursor-pointer"
        key={current.id}
      >
        
        <div className="flex-row mb-2 text-2xl">{current.name}</div>
        <div className=" mb-2">{current.username}</div>
        <div className="">{current.address.street}</div>

        
        <div></div>
      </section>
    );
})}
  </div>
</div>
  )
}

export default Github