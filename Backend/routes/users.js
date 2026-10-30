var express = require('express');
var router = express.Router();
var validateDataModule = require('../models/ValidateData')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveData', async (req, res)=>{

  try{ 

    const { url, status, latency, cpuUsed, memoryUsed } = req.body;
    
    if(url === undefined || !status || latency === undefined || cpuUsed === undefined || memoryUsed === undefined){
      return res.status(400).json({message: "Please enter the full Details."})
    }
    
    const newValidateData = new validateDataModule({url, status, latency, cpuUsed, memoryUsed});
    await newValidateData.save();
    return res.status(201).json({message: "Data Added Successfully."})

  }catch(err){
    return res.status(500).json({ message: "Server Error", error: err.message });
  }

});

router.get("/getAllData", async(req, res)=>{
  try{
    const allValidateData = await validateDataModule.find().sort({createdAt: -1});
    return res.status(200).json({allValidateData});
  }catch(err){
    return res.status(500).json({message: "Something Wrong :", error: err.message});
  }
})

module.exports = router;
