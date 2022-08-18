const handleHttpError = (res, message= 'Something went wrong', code = 403) => {
    // res.satus(code)
    res.send({error:message})
}

module.exports = {handleHttpError}