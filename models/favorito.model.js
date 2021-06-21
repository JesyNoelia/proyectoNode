
// --> Pedidos por Usuario

const getFavoritosById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from favoritos where fk_usuario=?', [pUsuarioId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

// --> Crear pedido
const createFavorito = ({ fk_usuario, fk_articulo }) => {
    return new Promise((resolve, reject) => {
        // numero_pedido = 'Albaran' + numero_pedido;
        db.query('insert into favoritos (fk_usuario, fk_articulo) values (?, ?)', [fk_usuario, fk_articulo], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = { getFavoritosById, createFavorito }
