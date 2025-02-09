import { test } from "node:test";
import assert from "node:assert";
import { getApp } from "../src/app.ts";
import users from "../public/users.json" with { type: "json" };;

test("GET /v1/users/ should return 200 and the content of users.json", async (t) => {
  const app = getApp();

  const response = await app.inject({
    method: "GET",
    url: "/v1/users/",
  });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"],
    "application/json; charset=utf-8"
  );
  assert.strictEqual(response.body.trim(), JSON.stringify(users, null, 2));
});
