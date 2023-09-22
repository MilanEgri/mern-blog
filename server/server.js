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
app.use('/uploads',express.static(__dirname+'/uploads'))

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
        const { token } = req.cookies
        jwt.verify(token, secret, {},async (err, info) => {
            if (err) throw err;
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
                author:info.id,
            })
            
            res.json({ postData })
        })
  

})

app.get('/post-main', async (req, res) => {
   const posts = await Post.find({ isMain: true },['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
   res.json(posts)

})
app.get('/post-gastro', async (req, res) => {
   const posts = await Post.find({ isGastro: true },['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
   res.json(posts)

})
app.get('/post-gaming', async (req, res) => {
   const posts = await Post.find({ isGaming: true },['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
   res.json(posts)

})
app.get('/post-sport', async (req, res) => {
   const posts = await Post.find({ isSport: true },['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
   res.json(posts)

})
app.get('/post-finance', async (req, res) => {
   const posts = await Post.find({ isFinance: true },['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
   res.json(posts)

})
app.get('/post/:id',async(req,res) =>{
    const {id} =req.params;
    const post = await Post.findById( id ,['title','summary','content','file','createdAt']).populate('author',['name']).sort({createdAt: -1}).limit(50);
    res.json(post);
})
app.get('/edit/:id',async(req,res) =>{
    const {id} =req.params;
    const post = await Post.findById( id ).populate('author',['name']).sort({createdAt: -1}).limit(50);
    res.json(post);
})

app.put('/post',upload.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      
    const {id,title,summary,content,isMain,isSport,isGastro,isGaming,isFinance} = req.body;
    console.log(req.body)
      let postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
       postDoc =  await Post.findByIdAndUpdate(id,{
        title,summary,content,isMain,isSport,isGastro,isGaming,isFinance,
        file: newPath ? newPath : postDoc.file,
      });
  
      res.json(postDoc);
    });
  
  });

app.listen(4400, () => {
    console.log('Server is running on port 4400');
});
