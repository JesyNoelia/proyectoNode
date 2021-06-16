
const router = require('express').Router();

const { createUser, getByEmail } = require('../../models/usuarios.model');

//POST localhost:3000/api/usuarios/registro
router.post('/registro', (req, res) => {
    console.log(req.body);
    createUser(req.body)

        .then(result => { res.json(result) })
        .catch(error => { console.log(error); })
});


//POST localhost:3000/api/usuarios/login
router.post('/login', async (req, res) => {
    const usuario = await getByEmail(req.body.email);
    console.log(usuario);
    if (!usuario) { //no existe el usuario
        return res.json({ error: 'error en email y/o password 1' });
    };
})

//GET localhost:3000/api/usuarios/perfil
router.get('/perfil', (req, res) => {
    console.log(req.user);
    res.json(req.user);
});



module.exports = router;