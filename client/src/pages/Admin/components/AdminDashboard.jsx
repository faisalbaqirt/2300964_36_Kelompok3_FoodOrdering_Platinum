import { useState, useEffect } from "react";
import { getDashboardData, getOrdersChart, getSalesChart } from "../../../utils/adminAPI";
import { Line, Bar } from "react-chartjs-2";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [chartData, setChartData] = useState({
    months: [],
    orders: [],
    sales: [],
  });

  useEffect(() => {
    fetchData();
    fetchChartData();
  }, []);

  const fetchData = async () => {
    try {
      const dashboardResponse = await getDashboardData()
      setDashboardData(dashboardResponse);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const fetchChartData = async () => {
    try {
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 5);

      const months = [];
      const ordersChartData = [];
      const salesChartData = [];

      for (let i = 0; i < 6; i++) {
        const year = sixMonthsAgo.getFullYear();
        const month = sixMonthsAgo.getMonth() + 1;

        const orderResponse = await getOrdersChart(year, month)
        const ordersData = orderResponse.length;
      
        const salesResponse = await getSalesChart(year, month)
        const salesData = salesResponse.total_sales;

        months.push(
          new Date(year, month - 1).toLocaleString("default", { month: "long" })
        );
        ordersChartData.push(ordersData);
        salesChartData.push(salesData);

        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() + 1);
      }

      setChartData({ months, orders: ordersChartData, sales: salesChartData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createChart = (label, data) => {
    return {
      labels: chartData.months,
      datasets: [
        {
          label: label,
          data: data,
          fill: true,
        },
      ],
    };
  };

  const chartOrdersData = createChart(
    "Total Orders per Month",
    chartData.orders
  );
  const chartSalesData = createChart(
    "Total Sales per Month",
    chartData.sales
  );

  return (
    <>
      <div className="container" id="admin-dashboard">
        <div className="content-title text-center">
          <h2>Dashboard</h2>
        </div>
        <div className="dashboard">
          <div className="dashboard-statistic">
            <div className="row dashboard-row">
              <div className="col-lg-3 col-sm-8 text-bg-dark dashboard-card">
                <div className="dashboard-item text-uppercase">
                  <div className="col-auto">
                    <h5 className="text-light">Total Products</h5>
                    <p>{dashboardData.totalProducts}</p>
                  </div>
                  <div className="col-auto">
                    <div className="icon-dash">
                      <i className="bi bi-grid text-dark"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-8 text-bg-dark dashboard-card">
                <div className="dashboard-item text-uppercase">
                  <div className="col-auto">
                    <h5 className="text-light">Total Orders</h5>
                    <p>{dashboardData.totalOrders}</p>
                  </div>
                  <div className="col-auto">
                    <div className="icon-dash">
                      <i className="bi bi-table text-dark"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-8 text-bg-dark dashboard-card">
                <div className="dashboard-item text-uppercase">
                  <div className="col-auto">
                    <h5 className="text-light">Total Users</h5>
                    <p>{dashboardData.totalUsers}</p>
                  </div>
                  <div className="col-auto">
                    <div className="icon-dash">
                      <i className="bi bi-people text-dark"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-chart mt-5">
            <div className="chart-row row">
              <div className="col-lg-6 col-sm-12 col-auto chart-card">
                <div className="chart-content">
                  <div className="chart-title bg-dark">
                    <p className="text-uppercase">Performance</p>
                    <h5 className="text-uppercase text-light">Total Orders</h5>
                  </div>
                  <div className="chart-body">
                    <Line data={chartOrdersData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-auto chart-card">
                <div className="chart-content">
                  <div className="chart-title bg-dark">
                    <p className="text-uppercase">Overview</p>
                    <h5 className="text-uppercase text-light">Sales Value</h5>
                  </div>
                  <div className="chart-body">
                    <Bar data={chartSalesData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
