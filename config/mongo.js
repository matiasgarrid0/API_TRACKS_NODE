const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },(err, res)=>{
    if(!err){
        console.log('***CONECTION SUCCESS***');
    }else{
        console.log('***ERROR CONECTION***');
    }
  });
};

module.exports = dbConnect;
