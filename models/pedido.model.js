
// --> Pedidos por Usuario

const getPedidosById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from pedidos where fk_usuario=?', [pUsuarioId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = { getPedidosById }
