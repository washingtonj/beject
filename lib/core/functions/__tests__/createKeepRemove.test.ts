import { describe, it, expect } from "vitest";
import { createKeepRemove } from "../createKeepRemove";

describe("createKeepRemove", () => {
  it("should create, keep, and remove objects within the array", () => {
    // given
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Jack" },
    ];

    // when
    const newData = createKeepRemove({
      input: data,
      items: [1, 2, 4],
      matchKey: "id",
      newObject: { name: "New" },
    });

    // then
    expect(newData).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 4, name: "New" },
    ]);
  });
});