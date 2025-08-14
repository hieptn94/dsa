import { match, none, some } from "./option";

describe("option", () => {
  it("returns correctly when value is none", () => {
    const option = none();

    const result = match(option)(() => "none")(() => "some");

    expect(result).toBe("none");
  });

  it("returns correctly when value is some", () => {
    const option = some("some");

    const result = match(option)(() => "none")((v) => `value-${v}`);

    expect(result).toBe("value-some");
  });
});
