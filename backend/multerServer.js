const express = require('express')
const cors = require('cors')
const multer = require('multer') // STEP_1 :- Import the package multer

const app = express();

// STEP_2 :- create filestorageEngine which is an object
const filestorageEngine = multer.diskStorage({
    destination: (req,file, cb) => {
        // console.log("req:", req);
        // console.log("file:", file);
        cb(null, './images'); // cb(error, path of folder where to store)
    },
    filename: (req, file, cb) => {
        // console.log("req:", req);
        // console.log("file:", file);
        cb(null, Date.now() + file.originalname); // cb(error, path of folder where to store)
    }
})

// Custon middelweare for multer
const upload = multer({storage: filestorageEngine}); // STEP_3 :- create the middelweare

// middelweares
app.use(cors());

// Routes
app.get('/multer', (req, res) => {
    res.send('Welcome to home of multer server')
})
/*
STEP_4 :- FOR SINGLE FILE 
   a) set middelweare in route 
   b) upload.single means only one file can be upload
   c) upload.single('image') here image is the name of field which in form input
*/
app.post('/single', upload.single('image'),(req, res) => {
    // console.log(req.file)
    res.send('Single File uploaded Succesfully...!')
});

/*
STEP_4 :- FOR MULTIPLE FILES
   a) set middelweare in route 
   b) upload.array means only one file can be upload
   c) upload.array('images') here images is the name of field which in form input
   d) here 3 denotes the maxCount or max files can be upload its depend on requirment
*/
app.post('/multiple', upload.array('images', 3),(req,res)=> {
    res.send('Multiple file send Succesfully...!')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...!')
})