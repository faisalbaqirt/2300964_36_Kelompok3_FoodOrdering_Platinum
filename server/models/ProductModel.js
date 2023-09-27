const db = require('../db/db');

class ProductModel {
    async getAllProducts() {
        try {
            const data = await db.select('*').from('products');
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getProductById(id) {
        try {
            const data = await db.select('*').from('products').where('id', id).first();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async createProduct(name, description, price) {
        try {
            await db('products').insert({
                name: name,
                description: description,
                price: price
            });
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id, name, description, price) {
        try {
            await db('products').where('id', id).update({
                name: name,
                description: description,
                price: price
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const result = await db('products').where('id', id).delete().returning('id');
            return result[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductModel();
