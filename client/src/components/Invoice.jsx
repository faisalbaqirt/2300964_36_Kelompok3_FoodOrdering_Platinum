import { useState, useEffect, useRef } from "react";
import { getOrderById } from "../utils/orderAPI";
import { capitalize } from "lodash";
import { downloadPDF } from "../utils/downloadPDF"

function Invoice({ orderId, onBackToOrder }) {
  const [invoiceData, setInvoiceData] = useState(null);
  const [price, setPrice] = useState(0);
  const downloadRef = useRef(null)

  const handleDownload = () => {
    downloadPDF(downloadRef, "invoice.pdf");
  };

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await getOrderById(orderId);

        if (response && response.data) {
          setInvoiceData(response.data);

          if (response.data.product_name === "paket ayam geprek") {
            setPrice(15000);
          } else if (response.data.product_name === "ayam geprek") {
            setPrice(12000);
          }
        } else {
          console.error("Tidak dapat mengambil data invoice.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchInvoiceData();
  }, [orderId]);

  return (
    <div>
      <div id="invoice" className="container" ref={downloadRef}>
        <div className="section-title text-center">
          <h2>Invoice</h2>
        </div>
        <div className="invoice-head">
          <div className="left-column">
            <p>Tanggal :{invoiceData?.datetime}</p>
            <p>No. Invoice : {invoiceData?.id}</p>
          </div>
          <div className="right-column">
            <div>
              <p>Kepada:</p>
              <p>{capitalize(invoiceData?.name)}</p>
              <p>{capitalize(invoiceData?.address)}</p>
            </div>
          </div>
        </div>
        <div className="invoice-table">
          <div className="row" id="table-head">
            <div className="col-md-3 col-xs-3" id="table-product">
              PRODUK
            </div>
            <div className="col-md-3 col-xs-3" id="table-price">
              HARGA
            </div>
            <div className="col-md-3 col-xs-3" id="table-quantity">
              JUMLAH
            </div>
            <div className="col-md-3 col-xs-3" id="table-total">
              TOTAL
            </div>
          </div>
          <div className="row" id="table-body">
            <div className="col-md-3 col-xs-3">
              {capitalize(invoiceData?.product_name)}
            </div>
            <div className="col-md-3 col-xs-3">
              {price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
            <div className="col-md-3 col-xs-3">
              {Math.floor(invoiceData?.quantity)}
            </div>
            <div className="col-md-3 col-xs-3">
              {Math.floor(invoiceData?.total_amount).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
          </div>
        </div>
        <div className="invoice-payment">
          <div className="row">
            <div className="col-md-6 col-xs-6 text-right" id="total-invoice">
              <p>
                <strong>TOTAL PEMBAYARAN:</strong>
                <strong>
                  {Math.floor(invoiceData?.total_amount).toLocaleString(
                    "id-ID",
                    { style: "currency", currency: "IDR" }
                  )}
                </strong>
              </p>
            </div>
            <div className="col-md-6 col-xs-6">
              <p>
                <strong>METODE PEMBAYARAN</strong>
                <br />
                Bank BCA
                <br />
                No. Rekening: 4370566971
                <br />
                Atas nama Tahmid Sanusi Kartawinata
                <br />
                <br />
                <strong>KONFIRMASI PEMBAYARAN</strong>
                <br />
                (+62) 822 1854 2511
              </p>
            </div>
          </div>
          <div className="invoice-foot">
            <button
              id="back-to-order"
              class="btn-order"
              onClick={onBackToOrder}
            >
              Back
            </button>
            <p className="note">
              <em>
                Note: Segera lakukan pembayaran agar pesanan segera diproses
              </em>
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-dark" onClick={handleDownload}>Download disini</button>
    </div>
  );
}

export default Invoice;
