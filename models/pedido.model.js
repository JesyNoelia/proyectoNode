
// --> Pedidos por Usuario

const getPedidosById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from pedidos where fk_usuario=?', [pUsuarioId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

// --> Crear pedido
const createPedido = ({ numero_pedido, fk_usuario, fk_articulo }) => {
    return new Promise((resolve, reject) => {
        // numero_pedido = 'Albaran' + numero_pedido;
        db.query('insert into pedidos (numero_pedido, fk_usuario, fk_articulo) values (?, ?, ?)', [numero_pedido, fk_usuario, fk_articulo], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}







module.exports = { getPedidosById, createPedido }
