import { emailHasErrors } from "./formLogic";

describe("validate email introduced", () => {
  test("empty field", () => {
    const email = "";
    const expected = "Please, write an email!";

    expect(emailHasErrors(email)).toEqual(expected);
  });

  test("email without @", () => {
    const email = "testing.com";
    const expected = "Your email is not valid, please try again!";

    expect(emailHasErrors(email)).toEqual(expected);
  });

  test("email without .com", () => {
    const email = "testing@test";
    const expected = "Your email is not valid, please try again!";

    expect(emailHasErrors(email)).toEqual(expected);
  });

  test("email valid", () => {
    const email = "test@testing.com";

    const expected = false;

    expect(emailHasErrors(email)).toEqual(expected);
  });
});
