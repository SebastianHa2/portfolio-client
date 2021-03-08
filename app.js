const express = require('express')
const app = express()
const cors = require('cors');
const nodemailer = require('nodemailer');
const { prototype } = require('nodemailer/lib/dkim');

const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'meformat8@gmail.com',
            pass: 'szklanka212'
        }
    })

    const message = req.body.message
    const name = req.body.name 
    const email = req.body.email
    const mailOptions = {
        from: email,
        to: 'meformat8@gmail.com',
        subject: req.body.subject,
        text: `${message} from ${name} at ${email}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.send("Something went wrong!")
        }else{
            console.log(info)
            res.sendS("Message sent!")
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})