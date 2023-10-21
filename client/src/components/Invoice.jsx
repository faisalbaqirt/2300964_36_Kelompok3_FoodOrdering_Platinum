import { useState, useEffect, useRef } from "react";
import { getOrderById } from "../utils/orderAPI";
import { capitalize } from "lodash";
import { downloadPDF } from "../utils/downloadPDF";

function Invoice({ orderId, onBackToOrder }) {
  const [invoiceData, setInvoiceData] = useState(null);
  const [price, setPrice] = useState(0);
  const downloadRef = useRef(null);

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
    <div className="invoice-container">
      <div id="invoice" className="container" ref={downloadRef}>
        <div className="section-title text-center">
          <h2>Invoice</h2>
        </div>
        <div className="invoice-head">
          <div className="left-column">
            <p>Tanggal :{invoiceData?.updated_at}</p>
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
        <div className="invoice-table-container">
          <table className="table invoice-table">
            <thead>
              <tr>
                <th>Nama Produk</th>
                <th className="text-center">Harga</th>
                <th className="text-center">Jumlah</th>
                <th style={{textAlign:"right"}}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{capitalize(invoiceData?.product_name)}</td>
                <td className="text-center">
                  {price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td className="text-center">{Math.floor(invoiceData?.quantity)}</td>
                <td style={{textAlign:"right"}}>
                  {Math.floor(invoiceData?.total_amount).toLocaleString(
                    "id-ID",
                    {
                      style: "currency",
                      currency: "IDR",
                    }
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">Total Pembayaran</th>
                <td style={{textAlign:"right"}}><strong>
                  {Math.floor(invoiceData?.total_amount).toLocaleString(
                    "id-ID",
                    {
                      style: "currency",
                      currency: "IDR",
                    }
                  )}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="invoice-payment">
          <div className="col-md-6 col-xs-6" id="method-payment">
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
          <p className="note">
            <em>
              Note: Segera lakukan pembayaran agar pesanan segera diproses
            </em>
          </p>
        </div>
      </div>
      <div className="invoice-action">
        <button class="btn btn-dark" onClick={onBackToOrder}>
          Back
        </button>
        <button className="btn btn-dark" onClick={handleDownload}>
          Download disini
        </button>
      </div>
    </div>
  );
}

export default Invoice;
