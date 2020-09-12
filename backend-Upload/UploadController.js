const express = require("express");
const Router= express.Router();
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, '../Uploadangular/src/assets/upload')
  },
  filename: (req, file, callBack) => {
      callBack(null,file.originalname)
  }
})
const upload = multer({ storage: storage })

Router.post('/uploadfile', upload.single('file'), (req, res, next) => {
 
  const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          res.status(400).send({message:'error'})
        }
        res.status(200).send({message:'success'})
 
  })
  Router.post('/deletefile', (req, res, next) => {
    var filePath = '../Uploadangular/src/assets/upload'+req.body.file;
    console.log(filePath);
    fs.unlinkSync(filePath);
    res.status(200).send({message:'success'})
  })



module.exports = Router;
