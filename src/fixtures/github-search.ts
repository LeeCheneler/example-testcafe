import { getByText, getByPlaceholderText } from "@testing-library/testcafe";

fixture`github search`.page`https://github.com`;

test("finds packages via search", async t => {
  await t
    .typeText(getByPlaceholderText("Search GitHub"), "react")
    .pressKey("Enter")
    .click(getByText("facebook/"))
    .expect(
      getByText(
        "A declarative, efficient, and flexible JavaScript library for building user interfaces."
      )
    )
    .ok();
});
