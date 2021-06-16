


const { createUser, getByEmail } = require('../../models/usuarios.model');

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

//POST localhost:3000/api/usuarios/registro
router.post('/registro', [body('nombre', 'El campo nombre debe ser mayor a 3 caracteres').isLength({ min: 3 }),
body('email', 'El email debe tener un formato correcto').isEmail()], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const usuario = await getByEmail(req.body.email);

    if (usuario) {
        return res.json({ error: 'El usuario ya esta registrado' })
    };
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    //console.log(req.body);
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