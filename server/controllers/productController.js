module.exports = {
    create: (req, res) => {
        const { product_name, product_description, price, image_url } = req.body;
        req.app.get('db')
        .createProduct([product_name, product_description, price, image_url])
        .then(() => {
            res.status(200).send('created product!');
        }).catch(() => res.status(500).send(`failed to add product`));
    },
    getOne: (req, res) => {
        const { id } = req.params;
        req.app.get('db')
        .readProduct(id)
        .then(product => {
            res.status(200).send(product);
        }).catch(() => res.status(500).send(`failed to get product at id: ${id}`));
    },
    getAll: (req, res) => {
        req.app.get('db')
        .readProducts()
        .then(products => {
            res.status(200).send(products);
        }).catch(() => res.status(500).send(`failed to get products`));
    },
    update: (req, res) => {
        console.log(id);
        console.log(desc);
        req.app.get('db')
        .updateProduct(id, desc)
        .then(product => {
            res.status(200).send('updated product!');
        }).catch(() => res.status(500).send(`failed to update product at id: ${id}`));
    },
    delete: (req, res) => {
        const { id } = req.params
        req.app.get('db')
        .deleteProduct(id)
        .then(() => {
            res.status(200).send('deleted the product!');
        }).catch(() => res.status(500).send(`failed to delete product at id: ${id}`));
    },
};