const { application } = require("express");
let express =require( 'express');
let app = express();

app.use(express.urlencoded({extended : true }))
let session = require('express-session');
app.use(session(
    
    {secret: 'pseudo',
    resave: false,
    saveUninitialized: true}
)
);

var mysql = require("mysql");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'formations'
});




// connection.connect(function(error){ if (error) console.log(error);})


let router = require('./routes');
app.use('/', router);
app.use(express.static('public'));




// app.get('/formation', (req,res)=>{
//     connection.query("select * from formation;" ,function(error, result){
//         if (error) console.log(error); 
//         res.render('formations.ejs', {formations: result});
//     });

// });

// app.get('/connection', (req,res)=>{
    
//         res.render('connection.ejs');
// });

// app.get('/login',(req, res)=>{
//     req.session.pseudo = req.query.pseudo;
//     console.log(req.session);
//     res.redirect('/formation');
// });

// app.get('/inscription', (req,res)=>{
//     inscriptions.push(req.query.formation);
    


    
        
// res.redirect('/formation');
    
// });
// app.get('/supression', (req,res)=>{
//     inscriptions.pop(req.query.formation);
    


    
        
// res.render('panier.ejs', {tt: result});
    
// });


// app.get('/utilisateur/panier',(req, res)=>{
//     // for (var n = 0; n < inscriptions.length; n++){
//     n = 'Java'
//     connection.query("SELECT * FROM formation WHERE Nom = ? ;",n ,function(error, result){
//         if (error) console.log(error); 
//         res.render('panier.ejs', {tt: result});
        
//     });
//}



    
    
// });


        

app.listen(8000)


  