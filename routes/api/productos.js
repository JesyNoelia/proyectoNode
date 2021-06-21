const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');

const { getAllProductos, getById, create, update, deleteById, getByWord, getByCategoria, updateDisponibilidad, getAllByIdUsuario } = require('../../models/producto.model');


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

// --> OBTENER por PALABRA
router.get('/search/:word', async (req, rest) => {

    try {

        const rows = await getByWord(req.params.word);
        rest.json(rows);
    } catch {
        rest.json({ error: 'error' });
    }
})

// --> OBTENER POR CATEGORIA
//GET http://localhost:3000/api/productos/categorias/uniformes
router.get('/categorias/:categoria', async (req, res) => {
    console.log(req.params.categoria);
    try {
        const categoria = await getByCategoria(req.params.categoria)
        if (categoria) {
            res.json(categoria);
        } else {
            res.json({ message: 'la categoria del producto no existe' });
        }

    } catch (error) {
        res.json({ error: 'no funciona' });
    }

});





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

//--> OBTENER PRODUCTOS SEGUN ID DE USUARIO
router.get('/usuario/:idUsuario', async (req, res) => {
    try {
        const productos = await getAllByIdUsuario(req.params.idUsuario);

        if (productos) {
            res.json(productos);
        } else {
            res.json({ message: 'No tienes Productos en registrados' });
        }
    } catch (error) {
        res.json({ error: 'Hay un error' });
    };
});



// --> CREAR nuevo producto
/// POST http://localhost:3000/api/productos. 

router.post('/', upload.single('imagen'), (req, res) => {
    console.log(req.body);

    create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log(error);
        })

});

// MODIFICAR DISPONIBILIDAD DE PRODUCTO
router.put('/disponibilidad/:productoId', async (req, res) => {
    console.log(req.body);
    try {

        const result = await updateDisponibilidad(req.params.productoId, req.body);
        console.log(req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})

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