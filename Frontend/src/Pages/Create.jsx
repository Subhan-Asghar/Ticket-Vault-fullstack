import React,{useEffect,useState} from 'react'
import {Link} from'react-router-dom'
import axios from 'axios'
const Create = () => {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [createdBy,setCreatedBy]=useState('')
    const [priority,setPriority]=useState('')
    const create=()=>{
        try{
            const data={
                title,
                description,
                createdBy,
                priority
            }
            axios.post('http://localhost:3000/create',data)
            .then((res)=>{
                
                    setTitle('')
                    setDescription('')
                    setCreatedBy('')
                    setPriority('')
                
            })
        }
        catch(err){
            console.log("Error",err)
        }
    }
  return (
    <>
     <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 p-4 ">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-3xl font-extrabold tracking-wide">
    Ticket Vault
    </div>
    <Link to={'/'}> 
    <button 
    className="h-10 px-6 bg-white text-purple-800 font-semibold rounded-lg shadow-md hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105">
      Home
    </button></Link>
  </div>
</nav>
<div className=" bg-indigo-500 p-4 h-10 shadow-lg flex justify-center items-center">
    <h3 className="text-white text-xl font-extrabold tracking-wide">Create Ticket</h3>
</div>


<div className="container mx-auto my-8 max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <form >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter ticket title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter ticket description"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Created By</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Priority</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              onClick={create}
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Create Ticket
            </button>
          </div>
        </form>
      </div>

    
    </>
)
}

export default Create