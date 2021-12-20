const { query, urlencoded } = require('express');
let express = require('express');
let app = express();

app.use(express.urlencoded());
let tasklist = ['Nourir le chat', 'Faire les courses']
app.get('/', (req,res) =>{
    res.render('site.ejs',{ list: tasklist, commentaire: "complétez la tâche." });
  
  });
  
  
  
  app.post('/', (req,res) =>{
    if (req.body.tache == "" ){
      res.render('site.ejs',{ list: tasklist, commentaire: "complétez la tâche." });
    }
    else {
      tasklist.push(req.body.tache);
      res.render('site.ejs',{ list: tasklist, commentaire: "Ajout réussi." });
  
    }
  
    
  });
      
  
  app.get('/delete', (req, res) =>{ 
    for (var n = 0; n < tasklist.length; n++) {
      if(tasklist[n] == req.query.tache) {
        tasklist.splice(n, 1);
      }
      res.render('site.ejs',{ list: tasklist, commentaire: "complétez la tâche." });
      
    }
  })
  
  
  
  
  
  app.listen(3000)