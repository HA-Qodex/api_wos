const express = require('express');
const {getUser, setUser, updateUser, deleteUser, userPhoto} = require('../controllers/users.controller')
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + file.originalname;
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

router.get('/',getUser);

router.post('/', setUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/image', upload.single('image'), userPhoto);

module.exports = router;