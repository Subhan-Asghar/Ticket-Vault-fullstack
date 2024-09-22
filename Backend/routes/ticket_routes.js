const Ticket=require('../models/ticket')
const express = require('express')
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        const result =await Ticket.find();
        res.status(200).json({
            data:result
        })
    }
    catch(err){
        res.status(400).json({
            message:'Error'
        })
    }
})
router.post('/create',(req,res)=>{
    try{
        const{title,description,createdBy,priority}=req.body;
        Ticket.create({
            title,
            description,
            createdBy,
            priority
        })
        res.status(200).json({
            message:'Created'
        })
    }
    catch(err){
        res.status(400).json({
            message:'Error'
        })
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const result=await Ticket.findByIdAndDelete(id)
        res.status(200).json({
            message:'Deleted'
        })
    }
    catch(err){
        res.status(400).json({
            message:'Error'
        })
    }
})
module.exports=router