const router = require('express').Router();
const { getColegioByWord } = require('../../models/colegio.model');


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


module.exports = router;