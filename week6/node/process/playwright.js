"use strict";

import { test, expect } from "@playwright/test";

test("Find submit button", async ({ page }) => {
  // Open webpage
  await page.goto("www.google.com");

  const submitBtn = page.getByRole("button", { name: "submit" });

  // To validate a button is present
  await expect(submitBtn).toBeVisible();
  // clicking button Submit
  await submitBtn.click();
});


