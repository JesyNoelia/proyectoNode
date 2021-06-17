const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/usuarios.model');

const controlToken = async (req, res, next) => {

    //console.log('pasando por el middleware');

    //1 comprobar si el token viene incluido en la cabecera AUTHENTICATION
    if (!req.headers['authorization']) {
        return res.json({ error: 'Se requiere cabecera de autorización' })
    };

    const token = req.headers['authorization'];
    //2 comprobar si el token es correcto
    let obj;
    try {
        obj = jwt.verify(token, 'TokenUsuarios');
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' });
    };

    //3 comprobar si el token esta caducado
    const currentDate = dayjs().unix();
    if (currentDate > obj.caducidad) {
        return res.json({ error: 'El token se encuentra caducado, ingresa nuevamente' });
    };

    //4 recuperar el usuario
    const usuario = await getById(obj.usuario_id);

    req.user = usuario
    next();
};

module.exports = {
    controlToken
};