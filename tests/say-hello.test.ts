import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello Farish", function () {
    expect(sayHello("Farish")).toBe("Hello Farish");
  });
});
