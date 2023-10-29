import { describe, it, expect } from "bun:test";
import {
  containsNoDecimal,
  inputIsValid,
  isANumber,
  isInRange,
  isNotZero,
} from "../validation";

describe("isANumber", () => {
  it("should be defined", () => {
    expect(isANumber).toBeDefined();
  });
  it("should return true when passed 7", () => {
    expect(isANumber(7)).toBeTrue();
  });
  it("should return true when passed '7'", () => {
    expect(isANumber("7")).toBeTrue();
  });
  it("should return false when passed 'null'", () => {
    expect(isANumber("null")).toBeFalse();
  });
  it("should return false when passed 'bob'", () => {
    expect(isANumber("bob")).toBeFalse();
  });
});

describe("isInRange", () => {
  it("should be defined", () => {
    expect(isInRange).toBeDefined();
  });
  it("should return true if passed 4, 1 and 10", () => {
    expect(isInRange(4, 1, 10)).toBeTrue();
  });
  it("should return false if passed 12, 1 and 10", () => {
    expect(isInRange(12, 1, 10)).toBeFalse();
  });
  it("should return true if passed 12, 5 and 20", () => {
    expect(isInRange(12, 5, 20)).toBeTrue();
  });
});

describe("isNotZero", () => {
  it("should be defined", () => {
    expect(isNotZero).toBeDefined();
  });
  it("should return true is passed 4", () => {
    expect(isNotZero(4)).toBeTrue();
  });
  it("should return false if passed 0", () => {
    expect(isNotZero(0)).toBeFalse();
  });
});

describe("containsNoDecimal", () => {
  it("should be defined", () => {
    expect(containsNoDecimal).toBeDefined();
  });
  it("should return true if passed '23'", () => {
    expect(containsNoDecimal("23")).toBeTrue();
  });
  it("should return true if passed ''", () => {
    expect(containsNoDecimal("")).toBeTrue();
  });
  it("should return false if passed '0.2'", () => {
    expect(containsNoDecimal("0.2")).toBeFalse();
  });
  it("should return false if passed '20.02'", () => {
    expect(containsNoDecimal("20.02")).toBeFalse();
  });
});

describe("inputIsValid", () => {
  it("should defined", () => {
    expect(inputIsValid).toBeDefined();
  });
  it("should return true when passed '3', 1 and 10", () => {
    expect(inputIsValid("3", 1, 10)).toBeTrue();
  });
  it("should return false when passed '12', 1 and 10", () => {
    expect(inputIsValid("12", 1, 10)).toBeFalse();
  });
  it("should return false when passed '0', 1 and 10", () => {
    expect(inputIsValid("0", 1, 10)).toBeFalse();
  });
  it("should return false when passed '2.5', 1 and 10", () => {
    expect(inputIsValid("2.5", 1, 10)).toBeFalse();
  });
});
