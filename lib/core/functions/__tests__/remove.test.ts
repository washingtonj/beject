import { describe, it, expect } from "vitest";
import { remove } from "../remove";

describe("remove", () => {
  it("should remove an object from an array", () => {
    // given
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Jack" },
    ];

    // when
    const newData = remove({ input: data, index: 1 });


    // then
    expect(newData).toEqual([
      { id: 1, name: "John" },
      { id: 3, name: "Jack" },
    ]);
  });
})  