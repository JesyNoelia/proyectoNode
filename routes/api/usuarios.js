


const { createUser, getByEmail } = require('../../models/usuarios.model');
const { controlToken } = require('../../routes/middlewares')

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

//POST localhost:3000/api/usuarios/registro
router.post('/registro', [body('email', 'El email debe tener un formato correcto').isEmail()], async (req, res) => {

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
    //console.log(usuario);
    if (!usuario) { //no existe el usuario
        return res.json({ error: 'El email y/o password no son correctos' });
    };
    const iguales = bcrypt.compareSync(req.body.password, usuario.password); //devuelve true o false.
    if (iguales) {
        res.json({ success: 'ingreso correcto', token: crearToken(usuario) })
    } else {
        return res.json({ error: 'ERROR en el email y/o password' });
    };
});

//GET localhost:3000/api/usuarios/perfil
router.get('/perfil', controlToken, (req, res) => {
    //console.log(req.user);
    res.json(req.user);
});

function crearToken(pUsuario) {
    const result = {
        usuario_id: pUsuario.id,
        caducidad: dayjs().add(15, 'minutes').unix()
    };
    return jwt.sign(result, 'TokenUsuarios')
};




module.exports = router;