function Invoice() {
    return (
        <div id="invoice" class="container">
            <div class="section-title text-center">
                <h2>Invoice</h2>
            </div>
            <div class="invoice-head">
                <div class="left-column">
                    <p>Tanggal      :<span id="invoice-time"></span></p>
                    <p>No. Invoice  :<span id="invoice-id"></span></p>
                </div>
                <div class="right-column">
                    <div>
                        <p>Kepada:</p>
                        <p><span id="invoice-name"></span></p>
                        <p><span id="invoice-address"></span></p>
                    </div>
                </div>
            </div>
            <div class="invoice-table">
                <div class="row" id="table-head">
                    <div class="col-md-3 col-xs-3" id="table-product">PRODUK</div>
                    <div class="col-md-3 col-xs-3" id="table-price">HARGA</div>
                    <div class="col-md-3 col-xs-3" id="table-quantity">JUMLAH</div>
                    <div class="col-md-3 col-xs-3" id="table-total">TOTAL</div>
                </div>
                <div class="row" id="table-body">
                    <div class="col-md-3 col-xs-3"><span id="invoice-product"></span></div>
                    <div class="col-md-3 col-xs-3"><span id="invoice-price"></span></div>
                    <div class="col-md-3 col-xs-3"><span id="invoice-quantity"></span></div>
                    <div class="col-md-3 col-xs-3"><span id="invoice-total-table"></span></div>
                </div>
            </div>
            <div class="invoice-payment">
                <div class="row">
                    <div class="col-md-6 col-xs-6 text-right" id="total-invoice" >
                        <p>
                            <strong>TOTAL PEMBAYARAN:</strong>
                            <strong><span id="invoice-total-payment"></span></strong>
                        </p>
                    </div>
                    <div class="col-md-6 col-xs-6">
                        <p>
                            <strong>METODE PEMBAYARAN</strong><br />
                            Bank BCA<br />
                            No. Rekening: 4370566971<br />
                            Atas nama Tahmid Sanusi Kartawinata<br />
                            <br /> 
                            <strong>KONFIRMASI PEMBAYARAN</strong><br />
                            (+62) 822 1854 2511
                        </p>
                    </div>
                </div>
                <div class="invoice-foot">
                    <button id="back-to-order" class="btn-order">Back</button>
                    <p class="note"><em>Note: Segera lakukan pembayaran agar pesanan segera diproses</em></p>
                </div>
            </div>
        </div>
            );
};

export default Invoice;