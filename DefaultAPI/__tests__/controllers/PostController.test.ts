import request from "supertest";
import app from "../../src/index";

describe("POST /posts", () => {
    it("should create a new post", async () => {
        const newPost = { title: "Test Post", content: "This is a test post." };
        const response = await request(app)
            .post("/posts")
            .send(newPost);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newPost);
    });
});