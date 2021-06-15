
// --> BUSCAR COLEGIO por palabra
const getColegioByWord = (pSearch) => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM colegios WHERE colegios.nombre LIKE "%${pSearch}%" OR colegios.direccion LIKE "%${pSearch}%"`, (err, result) => {
            if (err) reject(err);
            console.log(result);
            resolve(result);
        });
    });
}

// --> Obtener los productos de cada colegio
const getProductosColegio = (pColegio) => {
    return new Promise((resolve, reject) => {
        db.query('select * from articulos where fk_colegio = (select id from colegios where nombre = ?)', [pColegio], (err, result) => {
            if (err) reject(err);

            resolve(result);
        })
    })
}


module.exports = { getColegioByWord, getProductosColegio }