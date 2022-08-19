const express = require('express')
const router = express.Router()
const {matchedData} = require('express-validator')
const {validatorRegisterUser, validatorLoginUser} = require('../validators/auth')
const {usersModel} = require('../models')
const { encrypt, compare } = require('../utils/handlePassword')

//TODO http://localhost:3001/api/login
//TODO http://localhost:3001/api/register
router.post('/register',validatorRegisterUser , async (req,res)=>{
   try {
    req = matchedData(req)
    const password = await encrypt(req.password)  
    const body = {...req, password}
    const data = await usersModel.create(body)
    data.set('password', undefined, {strict: false})
    res.send({data})
   } catch (error) {
       if(error.code === 11000){
           res.send({message: 'user already exist'})
        }
        console.log(error.code)
   }
})


module.exports = router