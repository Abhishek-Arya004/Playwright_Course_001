import { test, expect } from "@playwright/test";

test("POST form data to Httpbin", async ({ request }) => {
  //   const formData = {
  //     name: "Abhishek",
  //     email: "abhishek@example.com",
  //     role: "QA Manager",
  //   };

  console.log("Sending form data:");
  //console.log(JSON.stringify(formData, null, 2));

  const response = await request.post("https://httpbin.org/post", {
    form: {
      name: "Abhishek",
      email: "abhishek@example.com",
      role: "QA Manager",
    },
  });

  const responseBody = await response.json();

  console.log("Status:", response.status());
  console.log(
    "Received form data:",
    JSON.stringify(responseBody.form, null, 2),
  );

  expect(response.status()).toBe(200);
  expect(responseBody.form.name).toBe("Abhishek");
  expect(responseBody.form.role).toBe("QA Manager");
});

test("POST multipart form data", async ({ request }) => {
  const response = await request.post("https://httpbin.org/post", {
    multipart: {
      name: "Abhishek",
      documentType: "TestReport",
    },
  });

  const body = await response.json();

  console.log(JSON.stringify(body.form, null, 2));

  expect(response.status()).toBe(200);
  expect(body.form.name).toBe("Abhishek");
});
