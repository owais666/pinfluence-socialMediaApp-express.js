//For storing Images and given them unique id
const multer = require('multer');
const {v4: uuidv4} = require('uuid');  

const path = require('path')    //provides extension of any file


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      const unique = uuidv4()
      cb(null, unique + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;