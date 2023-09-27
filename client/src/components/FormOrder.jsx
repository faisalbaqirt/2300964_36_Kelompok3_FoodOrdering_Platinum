function FormOrder() {
    return (
        <div id="order" className="container">
            <div className="section-title text-center">
                <h2>Form Pemesanan Produk</h2>
            </div>
            <div className="order-content">
                <form id="order-form">
                    <label for="product_name">Nama Produk:</label>
                    <select
                        id="product_name"
                        className="form-control"
                        name="product_name"
                        required
                    >
                        <option value="paket ayam geprek">Paket Ayam Geprek</option>
                        <option value="ayam geprek">Ayam Geprek</option></select
                    ><br />

                    <label for="quantity">Jumlah:</label>
                    <input
                        type="number"
                        id="quantity"
                        className="form-control"
                        name="quantity"
                        required
                    /><br />

                    <label for="name">Nama Pemesan:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        required
                    /><br />

                    <label for="telephone">Telepon:</label>
                    <input
                        type="text"
                        id="telephone"
                        className="form-control"
                        name="telephone"
                        required
                    /><br />

                    <label for="address">Alamat:</label>
                    <input
                        type="text"
                        id="address"
                        className="form-control"
                        name="address"
                        required
                    /><br />

                    <button type="submit" id="create-order" className="btn-order">Pesan</button>
                </form>
            </div>
        </div>
    )
};

export default FormOrder;