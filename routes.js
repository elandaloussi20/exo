let express = require('express');
let router = express.Router();

let paniercontroller = require ('./controllers/paniercontroller');

router.get('/formation', paniercontroller.formationslist);
router.post('/inscription/:user', paniercontroller.inscription);
router.get('/connection', paniercontroller.connection);
router.get('/login', paniercontroller.login);
router.get('/utilisateur/panier/:user', paniercontroller.panierlist);
router.get('/suppression/:id', paniercontroller.supression);
router.get('/retour', paniercontroller.formationslist);
router.get('/finaliser', paniercontroller.finaliser);
router.get('/logout', paniercontroller.logout);
router.get('/inscriptionfinal', paniercontroller.terminer);







module.exports = router;