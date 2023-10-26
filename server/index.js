process.env.TZ = "Asia/Jakarta";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const productRoutes = require("./routes/ProductRoute");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/OrderRoute");
app.use("/api/orders", orderRoutes);

const AuthenticationRoutes = require("./routes/AuthenticationRoute");
app.use("/api/auth", AuthenticationRoutes);

const AdminRoutes = require("./routes/AdminRoute");
app.use("/api/admin", AdminRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
