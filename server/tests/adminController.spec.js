const AdminModel = require("../models/adminModel");
const AdminController = require("../controllers/AdminController");

describe("AdminController - getDashboardData", () => {
  test("should return dashboard data as JSON with totalProducts and totalOrders", async () => {
    AdminModel.getTotalProducts = jest.fn().mockResolvedValue(10);
    AdminModel.getTotalOrders = jest.fn().mockResolvedValue(20);

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await AdminController.getDashboardData(req, res);

    expect(res.json).toHaveBeenCalledWith({
      totalProducts: 10,
      totalOrders: 20,
    });
  });

  test("should handle errors and return a 500 Internal Server Error", async () => {
    AdminModel.getTotalProducts = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));
    AdminModel.getTotalOrders = jest.fn().mockResolvedValue(20);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await AdminController.getDashboardData(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

describe("AdminController - getOrdersChart", () => {
  test("should return orders data for a specific year and month", async () => {
    const req = {
      params: {
        year: "2023",
        month: "10",
      },
    };
    const res = {
      json: jest.fn(),
    };

    const sampleOrdersData = [
      { date: "2023-10-01", count: 10 },
      { date: "2023-10-02", count: 5 },
    ];

    jest
      .spyOn(AdminModel, "getOrdersByYearAndMonth")
      .mockResolvedValue(sampleOrdersData);

    await AdminController.getOrdersChart(req, res);

    expect(res.json).toHaveBeenCalledWith(sampleOrdersData);
  });

  test("should handle errors and return a 500 Internal Server Error", async () => {
    const req = {
      params: {
        year: "2023",
        month: "10",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    jest
      .spyOn(AdminModel, "getOrdersByYearAndMonth")
      .mockRejectedValue(new Error("Sample error"));

    await AdminController.getOrdersChart(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});

describe("AdminController - getSalesChart", () => {
  test("should return sales data for a specific year and month", async () => {
    const req = {
      params: {
        year: "2023",
        month: "10",
      },
    };
    const res = {
      json: jest.fn(),
    };

    const sampleSalesData = [
      { date: "2023-10-01", revenue: 1000 },
      { date: "2023-10-02", revenue: 750 },
    ];

    jest
      .spyOn(AdminModel, "getSalesDataByYearAndMonth")
      .mockResolvedValue(sampleSalesData);

    await AdminController.getSalesChart(req, res);

    expect(res.json).toHaveBeenCalledWith(sampleSalesData);
  });

  test("should handle errors and return a 500 Internal Server Error", async () => {
    const req = {
      params: {
        year: "2023",
        month: "10",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    jest
      .spyOn(AdminModel, "getSalesDataByYearAndMonth")
      .mockRejectedValue(new Error("Sample error"));

    await AdminController.getSalesChart(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});
