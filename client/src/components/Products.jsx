function Products() {
    return (
        <div className="container" id="products">
            <h2>Menu</h2>
            <div className="row justify-content-center">
                {/* produk 1 */}
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img
                            src="/ayamgeprek1.jpg"
                            className="card-img-top"
                            alt="Produk 1"
                        />
                        <div className="card-body">
                            <h3 className="card-title">Paket Ayam Geprek</h3>
                            <p className="card-text">1 Piece Ayam Geprek with Rice</p>
                            <p className="card-price">Price: Rp. 15.000</p>
                        </div>
                    </div>
                </div>
                {/* produk 2 */}
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img
                            src="/ayamgeprek2.jpg"
                            className="card-img-top"
                            alt="Produk 2"
                        />
                        <div className="card-body">
                            <h3 className="card-title">Ayam Geprek</h3>
                            <p className="card-text">1 Piece Ayam Geprek without Rice</p>
                            <p className="card-price">Price: Rp. 12.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-link text-center">
                <a href="/order#order" id="order-here">Order Here!</a>
            </div>
        </div>
    )
};

export default Products;