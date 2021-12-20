let panier = require('../models/panierModel');
let session = require('express-session');


let panierlist= [];

var mysql = require("mysql");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'formations'
});
connection.connect(function(error){ if (error) console.log(error);})
exports.formationslist = function(req,res){
    connection.query("select * from formation;" ,function(error, result){
        if (error) console.log(error); 
        res.render('formations.ejs', {formations: result});
    console.log(req.session);
})
};

exports.panierlist = function(req, res){
    
    let user = req.session;
    res.render('panier.ejs', {inscriptions : panierlist});
};
exports.login = function(req, res){

    req.session.pseudo = req.query.pseudo;
    console.log(req.session);
    res.redirect('/');

};
exports.connection = function(req, res){

    res.render('connection.ejs');

};

exports.inscription = function(req,res){
    let user = req.session;
    let id = req.body.id;
    let Nom = req.body.Nom;
    let Prix = req.body.Prix;
    let Début = req.body.Début;
    let Fin = req.body.Fin;

    let inscription = new panier(id,Nom,Prix,Début,Fin);
    panierlist.push(inscription);
    res.redirect('/');

}

exports.supression = function(req,res){
    let id = req.params.id
    panierlist.splice(id, 1);
    res.redirect('/utilisateur/panier/:user');

}

exports.finaliser = function(req,res){
    if(req.session == null || req.session.pseudo == null )
    {
        res.render('connectionfinal.ejs');


    }
    else
    {
        for (let i = 0; i < panierlist.length; i++) {
        let inscription = {"pseudo":req.session.pseudo ,"formation":panierlist[i]["id"]};
        connection.query("INSERT INTO inscription SET ?", inscription,function(error, result){
        if (error) console.log(error); 
        })
        }
    res.redirect('/utilisateur/panier/:user');
        
    }

}

exports.logout = function (req,res) {
panierlist = [];
req.session.pseudo = null;
req.session = null;
res.send('logout success');
console.log(req.session);
}

exports.terminer = function(req,res){
    req.session.pseudo = req.query.pseudo;
    console.log(req.session);
    for (let i = 0; i < panierlist.length; i++) {
    let inscription = {"pseudo":req.session.pseudo ,"formation":panierlist[i]["id"]};
    connection.query("INSERT INTO inscription SET ?", inscription,function(error, result){
    if (error) console.log(error); 
    })
    }
    panierlist = [];
    res.send('Inscription terminée');

}




