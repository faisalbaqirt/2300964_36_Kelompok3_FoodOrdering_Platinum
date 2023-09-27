const ProductModel = require('../models/ProductModel');

class ProductController {
    async getAllProducts(req, res) {
        try {
            const data = await ProductModel.getAllProducts();
            res.json({ status: 200, data });
        } catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const data = await ProductModel.getProductById(req.params.id);
            if (!data) {
                res.json({ status: 404, message: 'Produk tidak ditemukan!' });
            }
            res.json({ status: 200, data });
        } catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }

    async createProduct(req, res) {
        try {
            const { name, description, price } = req.body;
            await ProductModel.createProduct(name, description, price);
            res.status(201).json({ status: 201, message: 'Produk berhasil ditambahkan!' });
        } catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { name, description, price } = req.body;
            await ProductModel.updateProduct(req.params.id, name, description, price);
            res.status(201).json({ status: 201, message: 'Produk berhasil diperbarui!' });
        } catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = await ProductModel.deleteProduct(req.params.id);
            res.status(201).json({ status: 201, message: 'Produk berhasil dihapus!' });
        } catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }
}

module.exports = new ProductController();
