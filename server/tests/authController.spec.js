const UserController = require("../controllers/AuthenticationController");
const db = require("../db/db");
const bcrypt = require("bcrypt");

describe("UserController - signUp", () => {
  afterAll(() => {
    db.destroy();
  });

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

    jest.spyOn(bcrypt, "hashSync").mockReturnValue("hashedPassword");

    const mockUserInsert = jest.fn().mockResolvedValue([1]);
    jest.spyOn(db("users"), "insert").mockImplementation(mockUserInsert);

    await UserController.signUp(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "success" });
  });
});
