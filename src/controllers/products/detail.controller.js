const { loadData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const { id } = req.params;
    const products = loadData()
    const productsFind = products.find(p => p.id === +id) 
    if (productsFind) {
    const precioDescuento = productsFind.price - (productsFind.price * (productsFind.discount / 100));
    res.render("products/detail", {product: productsFind, toThousand, precioDescuento  })
    } else {
        res.render("products")
    }
}
//  si llegas a leer esto significa que sos testigo de como odio lo facil es que algo salga mal y que me voy a desquitar con quien hable