const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const Post = require('./models/Post')
const bcrypt = require('bcryptjs')
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs')

require('dotenv').config();
const mongodbPassword = process.env.MONGODB_PASSWORD;
const salt = bcrypt.genSaltSync(10);
const secret = bcrypt.genSaltSync(9);

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(`mongodb+srv://milanegri20:${mongodbPassword}@cluster0.xcvq97x.mongodb.net/`)

app.post('/register', async (req, res) => {
    const { name, password } = req.body

    try {
        const userData = await User.create({
            name,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userData);
    }
    catch (e) {
        res.status(400).json({ error: e })
    }

})
app.post('/login', async (req, res) => {
    const { name, password } = req.body
    const userData = await User.findOne({ name })
    const isPassCorrect = bcrypt.compareSync(password, userData.password);
    if (isPassCorrect) {
        jwt.sign({ name, id: userData._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userData._id,
                name,
            })
        })
    }
    else {

        res.status(400).json("Wrong Password")
    }
});
app.get('/profile', (req, res) => {
    const { token } = req.cookies
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
})
app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})
app.post('/create', upload.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const extension = parts[parts.length - 1]
    const newPath =path + '.' + extension
    fs.renameSync(path,newPath )
    const {title,
        summary,
        content,
        isMain,
        isSport,
        isGastro,
        isGaming,
        isFinance} = req.body;
    const postData =  await Post.create({
        title,
        summary,
        content,
        isMain,
        isSport,
        isGastro,
        isGaming,
        isFinance,
        file:newPath,
    })

    res.json({ postData })
})

app.listen(4400, () => {
    console.log('Server is running on port 4400');
});
