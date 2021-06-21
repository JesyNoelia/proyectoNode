// Obtener el nombre e Id de las categorias
const getIdCategoria = () => {
    return new Promise((resolve, reject) => {
        db.query('select id, nombre from categorias', (err, result) => {
            if (err) reject(err);
            console.log(resolve);
            resolve(result);
        });
    });
};

module.exports = { getIdCategoria }