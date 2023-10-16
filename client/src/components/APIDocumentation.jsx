// ApiDocumentation.js

import React from 'react';

function ApiDocumentation() {
    return (
        <div>
            <h1>Ayam Geprek Mang Iyok API Documentation</h1>
            <h2>Products</h2>

            <h3>Get All Products</h3>
            <p><strong>Endpoint:</strong> GET /api/products</p>
            <p><strong>Description:</strong> Retrieve a list of all available products.</p>
            <p><strong>Example:</strong> GET /api/products</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 200,
                "data": [
                    {
                        "id": 1,
                        "name": "paket ayam geprek",
                        "description": "ayam geprek beserta nasi",
                        "price": "Rp 15,000"
                    },
                    {
                        "id": 2,
                        "name": "ayam geprek",
                        "description": "ayam geprek",
                        "price": "Rp 12,000"
                    }
                ]
            }
                </pre>
            </p>

            <h3>Get Product by ID</h3>
            <p><strong>Endpoint:</strong> GET /api/products/:id</p>
            <p><strong>Description:</strong> Retrieve a product by its ID.</p>
            <p><strong>Example:</strong> GET /api/products/1</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 200,
                "data": {
                    "id": 1,
                    "name": "paket ayam geprek",
                    "description": "ayam geprek beserta nasi",
                    "price": "Rp 15,000"
                }
            }
                </pre>
            </p>

            <h3>Create Product</h3>
            <p><strong>Endpoint:</strong> POST /api/products</p>
            <p><strong>Description:</strong> Create a new product.</p>
            <p><strong>Example:</strong> POST /api/products</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "name": "paket ayam geprek",
                "description": "ayam geprek beserta nasi",
                "price": "Rp 15,000"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "message": "Produk berhasil ditambahkan!"
            }
                </pre>
            </p>

            <h3>Update Product</h3>
            <p><strong>Endpoint:</strong> PUT /api/products/:id</p>
            <p><strong>Description:</strong> Update an existing product by its ID.</p>
            <p><strong>Example:</strong> PUT /api/products/1</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "name": "paket ayam geprek",
                "description": "ayam geprek beserta nasi",
                "price": "Rp 16,000"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "message": "Produk berhasil diperbarui!"
            }
                </pre>
            </p>

            <h3>Delete Product</h3>
            <p><strong>Endpoint:</strong> DELETE /api/products/:id</p>
            <p><strong>Description:</strong> Delete a product by its ID.</p>
            <p><strong>Example:</strong> DELETE /api/products/1</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "message": "Produk berhasil dihapus!"
            }
                </pre>
            </p>

            <h2>Orders</h2>

            <h3>Get All Orders</h3>
            <p><strong>Endpoint:</strong> GET /api/orders</p>
            <p><strong>Description:</strong> Retrieve a list of all orders.</p>
            <p><strong>Example:</strong> GET /api/orders</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 200,
                "data": [
                    {
                        "order_id": 1,
                        "product_name": "Paket Ayam Geprek",
                        "quantity": 2,
                        "total_amount": "Rp 30,000",
                        "name": "Budi",
                        "telephone": "123-456-7890",
                        "address": "123 Jalan Kenangan, Jakarta"
                    },
                    {
                        "order_id": 2,
                        "product_name": "Ayam Geprek",
                        "quantity": 3,
                        "total_amount": "Rp 36,000",
                        "name": "Siti",
                        "telephone": "987-654-3210",
                        "address": "456 Elm St, Jakarta"
                    }
                ]
            }
                </pre>
            </p>

            <h3>Get Order by ID</h3>
            <p><strong>Endpoint:</strong> GET /api/orders/:id</p>
            <p><strong>Description:</strong> Retrieve an order by its ID.</p>
            <p><strong>Example:</strong> GET /api/orders/1</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 200,
                "data": {
                    "order_id": 1,
                    "product_name": "Paket Ayam Geprek",
                    "quantity": 2,
                    "total_amount": "Rp 30,000",
                    "name": "Budi",
                    "telephone": "123-456-7890",
                    "address": "123 Jalan Kenangan, Jakarta"
                }
            }
                </pre>
            </p>

            <h3>Create Order</h3>
            <p><strong>Endpoint:</strong> POST /api/orders</p>
            <p><strong>Description:</strong> Create a new order.</p>
            <p><strong>Example:</strong> POST /api/orders</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "product_name": "Paket Ayam Geprek",
                "quantity": 2,
                "name": "Budi",
                "telephone": "123-456-7890",
                "address": "123 Jalan Kenangan, Jakarta"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "order_id": 1,
                "message": "Data order berhasil ditambahkan!"
            }
                </pre>
            </p>

            <h3>Update Order</h3>
            <p><strong>Endpoint:</strong> PUT /api/orders/:id</p>
            <p><strong>Description:</strong> Update an existing order by its ID.</p>
            <p><strong>Example:</strong> PUT /api/orders/1</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "product_name": "Paket Ayam Geprek",
                "quantity": 3,
                "name": "Budi",
                "telephone": "123-456-7890",
                "address": "123 Jalan Kenangan, Jakarta"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "message": "Data order berhasil diperbarui!"
            }
                </pre>
            </p>

            <h3>Delete Order</h3>
            <p><strong>Endpoint:</strong> DELETE /api/orders/:id</p>
            <p><strong>Description:</strong> Delete an order by its ID.</p>
            <p><strong>Example:</strong> DELETE /api/orders/1</p>
            <p><strong>Response:</strong>
                <pre>
            {
                "status": 201,
                "message": "Data order berhasil dihapus!",
                "deletedOrderId": 1
            }
                </pre>
            </p>

            <h2>Authentication</h2>

            <h3>User Registration</h3>
            <p><strong>Endpoint:</strong> POST /api/auth/register</p>
            <p><strong>Description:</strong> Register a new user.</p>
            <p><strong>Example:</strong> POST /api/auth/register</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "email": "user@example.com",
                "username": "budi",
                "password": "your-password"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "message": "success"
            }
                </pre>
            </p>

            <h3>User Login</h3>
            <p><strong>Endpoint:</strong> POST /api/auth/login</p>
            <p><strong>Description:</strong> Authenticate a user.</p>
            <p><strong>Example:</strong> POST /api/auth/login</p>
            <p><strong>Request:</strong>
                <pre>
            {
                "username": "budi",
                "password": "your-password"
            }
                </pre>
            </p>
            <p><strong>Response:</strong>
                <pre>
            {
                "id": 1,
                "username": "budi",
                "accessToken": "your-access-token"
            }
                </pre>
            </p>
        </div>
            
    );
}

export default ApiDocumentation;
