const createUser = ({ nombre, apellidos, telefono, password, email, fk_colegio }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, telefono, password, email, fk_colegio) values (?,?,?,?,?,?)', [nombre, apellidos, telefono, password, email, fk_colegio], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
};

module.exports = { createUser }