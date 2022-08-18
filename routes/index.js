const express = require("express");
const fs = require("fs");
const router = express.Router();

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

const PATH_ROUTES = __dirname;
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
        console.log(`loading route ${name}...`);
        router.use(`/${name}`, require(`./${file}`))
    }
});

module.exports = router;
