const mongoose = require('mongoose');
const ticketSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
    
            type:String,
            required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})
const Ticket= mongoose.model('Ticket',ticketSchema)
module.exports=Ticket