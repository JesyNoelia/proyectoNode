
const router = require('express').Router();

const { createUser } = require('../../models/usuarios.model');

//POST localhost:3000/api/usuarios/registro
router.post('/registro', (req, res) => {
    console.log(req.body);
    createUser(req.body)

        .then(result => { res.json(result) })
        .catch(error => { console.log(error); })
})


module.exports = router;