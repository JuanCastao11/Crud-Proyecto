const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;

        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.obtenerProductos = async (req,res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.obtenerProducto = async (req,res) =>{
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto)
        {
            res.status(500).send('El producto no existe');
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const {nombre, categoria, ubicacion, precio} = req.body
        let producto = await Producto.findById(req.params.id);

        if(!producto)
        {
            res.status(500).send('El producto no existe');
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate(
            {_id:req.params.id},producto,{new: true})
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}

exports.eliminarProducto = async (req,res) =>{
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto)
        {
            res.status(500).send('El producto no existe');
        }

        await Producto.findByIdAndRemove({_id:req.params.id})

        res.json({msg : "El producto ha sido liminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }
}