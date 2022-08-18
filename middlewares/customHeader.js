const customHeader = (req, res, next) => {
   try {
    const apiKey = req.headers.api_key
    if(apiKey === 'api_123fasd'){
        next()
    }else{
        res.status(403)
        res.send({error:'api_key error'})
    }
   } catch (err) {
    res.status(403)
    res.send({error:'PROBLEM_IN_CUSTOM_HEADER'})
   }
}
module.exports = customHeader