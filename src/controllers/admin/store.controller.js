const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
    const { name, price, discount, category, description } = req.body;
    const image = req.file;
    const products = loadData();
   

    const newID = products[products.length - 1].id + 1;
    const createProduct = {
        id: newID ,
        name:  name.trim() ,
        description:  description.trim() ,
        price: +price,
        discount: +discount,
        image: image ? image.filename :"default-image.png",
        category:  category.trim() ,       
    };
    products.push(createProduct)
    saveData(products)

    res.redirect(`/productos/detalle/${newID}`)
}

