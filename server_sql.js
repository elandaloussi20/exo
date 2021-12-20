const { application } = require("express");
let express =require( 'express');
let app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'tasks'
});
connection.connect(function(error){ if (error) console.log(error);})

app.get('/task', (req,res)=>{
    connection.query("select * from task;" ,function(error, result){
        if (error) console.log(error); 
        res.render('tasklist.ejs', {tasks: result});
    });

});

// DELETE TACHE
app.get('/task/delete/:i', (req,res)=>{
    let i = req.params.i;
    connection.query("DELETE from task WHERE idtask = ?;", i ,function(error, result){
        if (error) console.log(error);
        res.redirect('/task');
    });
        

})

app.listen(8000, function(){
    console.log('Running on port 8000');
})
