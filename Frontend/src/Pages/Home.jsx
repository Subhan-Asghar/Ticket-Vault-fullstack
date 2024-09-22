import React,{useEffect,useState} from 'react'
import {Link} from'react-router-dom'
import axios from 'axios'
import Delete from '../Componentes/Delete'

const Home = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        try{
            axios.get('http://localhost:3000/')
            .then((res)=>{
                const result=res.data.data;
                console.log(result)
                setdata(result)
            })
        }
        catch(err){
            console.log("Error",err)
        }
    },[])
  return (
    <>
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 p-4 ">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-3xl font-extrabold tracking-wide">
    Ticket Vault
    </div>
    <Link to={'/create'}> 
    <button 
    className="h-10 px-6 bg-white text-purple-800 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105">
      Create
    </button></Link>
  </div>
</nav>
<div className=" bg-indigo-500 p-4 h-10 shadow-lg flex justify-center items-center">
    <h3 className="text-white text-xl font-extrabold tracking-wide">Tickets</h3>
</div>


<div className="container  mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((ticket) => (
            <div key={ticket._id} className="bg-white p-6 rounded-lg shadow-md">
              {/* Ticket Info */}
              <h4 className="text-xl font-bold text-indigo-900 mb-2">{ticket.title}</h4>
              <p className="text-gray-700 tex mb-4">{ticket.description}</p>
              <p className="text-sm text-gray-600">Created By: <span className="font-semibold">{ticket.createdBy}</span></p>
              <p className="text-sm text-gray-600">Priority: <span className={`font-semibold ${ticket.priority === 'High' ? 'text-red-500' : ticket.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{ticket.priority}</span></p>
              <p className="text-sm text-gray-600">Date: {new Date(ticket.date).toLocaleDateString()}</p>

              <div className="mt-4">
                <Delete id={ticket._id} />
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center text-gray-700">No tickets available.</h3>
        )}
      </div>



    </>
  )
}

export default Home