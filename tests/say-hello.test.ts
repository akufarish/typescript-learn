import { sayHello } from "../src/say-hello";

// test
describe("sayHello", function () {
  it("should return hello Farish", function () {
    expect(sayHello("Farish")).toBe("Hello Farish");
  });

  it("should return hello Farish Asqalani", function () {
    expect(sayHello("Farish Asqalani")).toBe("Hello Farish Asqalani");
  });

  it("should return 3", function () {
    const sum: number = 2 + 2;
    expect(sum).toBe(4);
  });
});
