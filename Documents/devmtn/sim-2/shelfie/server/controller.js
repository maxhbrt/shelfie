module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(response => {
            res.status(200).send(response);
        }).catch(err => {
            console.log('getALL:', err);
        });  
    },

    newProduct: (req, res) => {
        const {name, price, imgURL} = req.body;
        const db = req.app.get('db');

        db.create_product([name, price, imgURL]).then(response => {
            res.status(200).send('Created Product')
        }).catch(err => {
            console.log('newProduct:', err);
        });
    },

    removeProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.remove_product([id]).then(response => {
            res.status(200).send('benn removed');
        }).catch(err => {
            console.log('removeProduct:', err);
        });
    },

    getProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_product([id]).then(response => {
            res.status(200).send(response[0]);
        }).catch(err => {
            console.log('getProduct:', err);
        });
    }
}