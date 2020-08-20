/*Required External Modules
*/
const express= require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { listeners } = require('process');
/**
* App Variables
*/
const app = express();
const port= process.env.PORT|4000;

/**
*  App Configuration
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extends:false}));
app.use(bodyParser.json());
/*
* Routes Definitions
*/
app.get('/',(req,res)=>
    {
         res.render("index")
})

app.route('/supers')
    .get ((req,res)=>
    {
        res.render('notFound')
    })
    .post((req,res)=>{
        res.render("super",
        {
            superhero:
            {
                name: req.body.firstname,
                lastName: req.body.lastname
            }
        })
    })



// app.get('/',(req,res)=>{
//     // res.status(200).send("IM THE QUEEN")
//     res.render("index")
// })
// app.get('/1',(req,res)=>{
//     // res.status(200).send("IM THE QUEEN")
//     res.render("super")
// })

// app.post('/supers',(req,res)=>{
//     res.render("super",{
//         superhero:{
//             name: req.body.firstname,
//             lastName: req.body.lastname
//         }
//     })
// })
/**
* Server Activation
*/
app.listen(port);