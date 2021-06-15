
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


module.exports = { getColegioByWord }