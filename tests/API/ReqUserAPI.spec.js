import { expect, test } from "@playwright/test";

//CRUD---Create/update/delete/R

//Server----Methods----Decide---GET---->Retive, Create---->
// get, post, put , delete, patch
//--->Country----Get
//Amzone---accoubt-->Date--post --for creating
//adresss---->put/patch
//delete----->delete

test("Create User", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.post("register", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  const body = await response.body;

  console.log("Status:", response.status());
  console.log("Response:", body);

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  const responseBody = JSON.parse(body);
  expect(responseBody.token).toBeTruthy();
});

test("Single User", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.get("users/2", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
  });

  const body = await response.text();

  console.log("Status:", response.status());
  console.log("Response:", body);

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  const responseBody = JSON.parse(body);
  //expect(responseBody.id).toBeTruthy();
});

test("List Users", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.get("users", {
    params: {
      page: 2,
    },

    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
  });

  console.log("Status:", response.status());
  console.log("URL", response.url());

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  //const responseBody = JSON.parse(body);
  //expect(responseBody.id).toBeTruthy();
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody, null, 2));
});

// responseBody — your API response object.

// null — no custom transformation.

// 2 — indentation of two spaces for readability.

test("Login Users", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.post("login", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  console.log("Status:", response.status());
  console.log("URL", response.url());

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  //const responseBody = JSON.parse(body);
  //expect(responseBody.id).toBeTruthy();
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody, null, 2));
});

test("Update User", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.put("users/2", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });

  console.log("Status:", response.status());
  console.log("URL", response.url());

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  //const responseBody = JSON.parse(body);
  //expect(responseBody.id).toBeTruthy();
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody, null, 2));
});

test("Delete User", async ({ request }) => {
  // Listen for outgoing requests

  const response = await request.delete("users/2", {
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
      "X-Reqres-Env": "prod",
    },
  });

  const body = await response.text();

  console.log("Status:", response.status());
  console.log("Response:", body);

  expect(response.status()).toBe(204);
});
