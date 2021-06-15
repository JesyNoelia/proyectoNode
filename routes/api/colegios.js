const router = require('express').Router();
const { getColegioByWord, getProductosColegio } = require('../../models/colegio.model');


// --> OBTENER COLEGIO por PALABRA
// GET http://localhost:3000/api/colegios/search/merced
router.get('/search/:word', async (req, rest) => {

    try {

        const rows = await getColegioByWord(req.params.word);
        rest.json(rows);
    } catch {
        rest.json({ error: 'error' });
    }
})

//--> Obtener los productos de cada cole
// GET http://localhost:3000/api/colegios/articulos/:cole
router.get('/articulos/:cole', async (req, rest) => {
    try {

        const rows = await getProductosColegio(req.params.cole);
        rest.json(rows);
    } catch {
        rest.json({ error: 'error' });
    }
})


module.exports = router;