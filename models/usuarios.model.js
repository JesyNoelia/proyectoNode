const createUser = ({ nombre, apellidos, telefono, password, email, fk_colegio }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, telefono, password, email, fk_colegio) values (?,?,?,?,?,?)', [nombre, apellidos, telefono, password, email, fk_colegio], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
};

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email=?', [pEmail], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0])
        });
    });
};

const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id= ?', [pUsuarioId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null)
            resolve(rows[0]);
        });
    });
};

module.exports = { createUser, getByEmail, getById }