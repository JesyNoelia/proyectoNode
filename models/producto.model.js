
// --> TODOS LOS PRODUCTOS
const getAllProductos = (limit = 12, page = 1) => {
    return new Promise((resolve, reject) => {
        db.query('select * from articulos where disponible =1 limit ?, ?', [limit * (page - 1), limit], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });

}


// --> PRODUCTO POR ID
const getById = (pProductoId) => {

    return new Promise((resolve, reject) => {
        db.query('select * from articulos where id = ?', [pProductoId], (err, rows) => {

            if (err) reject(err);
            if (rows.length !== 1) resolve(null);

            resolve(rows[0]);
        })
    });
}


// --> CREAR NUEVO PRODUCTO
const create = ({ titulo, precio, descripcion, talla, curso, estado, imagen, fk_usuario, fk_categoria, fk_colegio }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into articulos (titulo, precio, descripcion, talla, curso, estado, imagen, fk_usuario, fk_categoria, fk_colegio) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [titulo, precio, descripcion, talla, curso, estado, imagen, fk_usuario, fk_categoria, fk_colegio], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}


// --> MODIFICAR PRODUCTO POR ID
const update = (pProductoId, { titulo, precio, descripcion, talla, curso, estado, fk_categoria, fk_colegio }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update articulos set titulo = ?, precio = ?, descripcion = ?, talla = ?, curso = ?, estado = ?, fk_categoria = ?, fk_colegio = ? where id = ?',

            [titulo, precio, descripcion, talla, curso, estado, fk_categoria, fk_colegio, pProductoId],
            (err, result) => {

                if (err) reject(err);
                resolve(result);
            });
    });
}

// MODIFICAR DISPONIBILIDAD DE PRODUCTO
const updateDisponibilidad = (pProductoId, { disponible }) => {
    console.log(disponible);
    return new Promise((resolve, reject) => {
        db.query('UPDATE articulos SET disponible= ?  WHERE id=?;', [disponible, pProductoId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    })

}


// --> BORRAR PRODUCTO POR ID
const deleteById = (pProductoId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from articulos where id= ?', [pProductoId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}

// --> BUSCAR por palabra
const getByWord = (pSearch) => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM articulos WHERE articulos.titulo LIKE "%${pSearch}%" OR articulos.descripcion LIKE "%${pSearch}%"`, (err, result) => {
            if (err) reject(err);
            console.log(result);
            resolve(result);
        });
    });
}

// --> BUSCAR POR CATEGORIA
const getByCategoria = (pCategoria) => {
    return new Promise((resolve, reject) => {
        db.query('select * from articulos where fk_categoria = (select id from categorias where nombre = ?)', [pCategoria], (err, rows) => {
            console.log(err);
            if (err) reject(err);
            resolve(rows);
        });
    })
}

// --> OBTENER ARTICULOS SEGUN ID DE USUARIO
const getAllByIdUsuario = (pIdUsuario) => {
    return new Promise((resolve, reject) => {
        db.query('select * from articulos where fk_usuario=?', [pIdUsuario], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};





module.exports = { getAllProductos, getById, create, update, deleteById, getByWord, getByCategoria, updateDisponibilidad, getAllByIdUsuario }