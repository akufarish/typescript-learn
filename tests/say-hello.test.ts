import { sayHello } from "../src/say-hello";

// test
describe("sayHello", function () {
  it("should return hello Farish", function () {
    expect(sayHello("Farish")).toBe("Hello Farish");
  });

  it("should return hello Farish Asqalani", function () {
    expect(sayHello("Farish Asqalani")).toBe("Hello Farish Asqalani");
  });
});
