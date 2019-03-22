require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

//crear nuevos registros,mandar información
app.post('/usuario', function(req, res) {

    let body = req.body; //aparece cuando bodyparser funcione
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })

    }


})

//actualizar data
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id; //recibir parametro de id
    res.json({
        id
    }); //retorna lo que manda en url
})

//borrar
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);
});