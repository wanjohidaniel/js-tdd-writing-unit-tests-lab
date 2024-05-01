import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromic words", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
  });

  it("returns false for non-palindromic words", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("apple")).toBe(false);
  });

  it("returns true for words with mixed cases", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("MaDAm")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => {
      isPalindrome("12321");
    }).toThrowError("Input must contain only alphabetic characters");
  
    expect(() => {
      isPalindrome("ab12ba");
    }).toThrowError("Input must contain only alphabetic characters");
  });
  

  it("throws an error for input that isn't a string", () => {
    expect(() => {
      isPalindrome(12321);
    }).toThrowError("Input must be a string");

    expect(() => {
      isPalindrome(["racecar"]);
    }).toThrowError("Input must be a string");
  });
});
