import { test } from "node:test";
import assert from "node:assert";
import { getApp } from "../src/app.ts";
import users from "../public/users.json" with { type: "json" };
import planets from "../public/planets.json" with { type: "json" };

test("GET /v1/users/ should return 200 and the content of users.json", async (t) => {
  const app = getApp({ logger: false });

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

test("GET /v1/planets/ should return 200 and the content of planets.json", async (t) => {
  const app = getApp({ logger: false });

  const response = await app.inject({
    method: "GET",
    url: "/v1/planets/",
  });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"],
    "application/json; charset=utf-8"
  );
  assert.strictEqual(response.body.trim(), JSON.stringify(planets, null, 2));
});
