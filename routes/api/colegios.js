const router = require('express').Router();
const { getColegioByWord, getProductosColegio, getIdNombre, getAllColes } = require('../../models/colegio.model');


// --> OBTENER COLEGIO por PALABRA
// GET http://localhost:3000/api/colegios/search/merced
router.get('/search/:word', async (req, res) => {

    try {

        const rows = await getColegioByWord(req.params.word);
        res.json(rows);
    } catch {
        res.json({ error: 'error' });
    };
});

// OBTENER TODOS LOS COLEGIOS
router.get('/', async (req, res) => {
    try {
        const rows = await getAllColes();
        console.log(rows);
        res.json(rows);
    } catch {
        res.json({ error: 'error' });
    };
})

//--> Obtener los productos de cada cole
// GET http://localhost:3000/api/colegios/articulos/:cole
router.get('/articulos/:cole', async (req, res) => {
    try {

        const rows = await getProductosColegio(req.params.cole);
        res.json(rows);
    } catch {
        res.json({ error: 'error' });
    }
})

//Obtener de los coles: Nombre e Id
//GET http://localhost:3000/api/colegios/buscar

router.get('/buscar', async (req, res) => {
    try {
        const rows = await getIdNombre();
        res.json(rows);
    } catch {
        res.json({ error: 'error' });
    }
})


module.exports = router;