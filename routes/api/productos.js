const router = require('express').Router();

const { getAllProductos, getById, create, update, deleteById, getByWord } = require('../../models/producto.model');


//----> Llamada a model para visualizar todos los productos
// GET localhost:3000/api/productos

router.get('/', async (req, rest) => {
    try {
        const limit = req.query.limit || 12;
        const page = req.query.page || 1;
        const rows = await getAllProductos(parseInt(limit), parseInt(page));
        rest.json(rows);
    } catch (err) {
        rest.json({ error: 'error' });
    }
})

// --> OBTENER por palabra
router.get('/search/:word', async (req, rest) => {

    try {

        const rows = await getByWord(req.params.word);
        rest.json(rows);
    } catch {
        rest.json({ error: 'error' });
    }
})





// --> producto ID
//GET http://localhost:3000/api/productos/34

router.get('/:productoId', async (req, res) => {
    try {
        const producto = await getById(req.params.productoId)
        if (producto) {
            res.json(producto);
        } else {
            res.json({ message: 'el id del producto no existe' });
        }

    } catch (error) {
        res.json({ error: 'no funciona' });
    }

});

// --> CREAR nuevo producto
/// POST http://localhost:3000/api/productos. 

router.post('/', (req, res) => {
    create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log(error);
        })

});

// --> MODIFICAR articulos
//PUT http://localhost:3000/api/productos/5
router.put('/:productoId', async (req, res) => {
    try {
        const result = await update(req.params.productoId, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }


});


// --> BORRAR productos
//// DELETE http://localhost:3000/api/productos/5

router.delete('/:productoId', async (req, res) => {
    try {
        const result = await deleteById(req.params.productoId);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
});




module.exports = router;