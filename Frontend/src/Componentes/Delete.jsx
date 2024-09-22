import React from 'react'
import axios from 'axios'

const Delete = ({id}) => {
    const Delete=()=>{
        try{
           
            axios.delete(`http://localhost:3000/delete/${id}`)
            .then((res)=>{
                console.log(res.data.message)
                window.location.reload()
            })
        }
        catch(err){
            console.log("Error",err)
        }
    }

  return (
  <>
  <div>
  <button 
  onClick={Delete}
    className="h-10 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
      Delete
    </button>
  </div>
  </>
  )
}

export default Delete