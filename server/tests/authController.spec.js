const UserController = require("../controllers/AuthenticationController");

describe("UserController - signUp", () => {
  test("should create a new user and return a JSON response with a status of 201 when successful", async () => {
    const req = {
      body: {
        email: "test@example.com",
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await UserController.signUp(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "success" });
  });
});

describe("UserController - login", () => {
  test("should create a new user and return a JSON response with a status of 201 when successful", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await UserController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
});
