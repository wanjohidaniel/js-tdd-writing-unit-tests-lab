export function isPalindrome(word) {
    // Ensure word is a string
    if (typeof word !== 'string') {
      throw new Error("Input must be a string");
    }
  
    // Check if the word is empty
    if (word.length === 0) {
      return false;
    }
  
    // Check if the word contains non-alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
  
    // Convert the word to lowercase for case-insensitive comparison
    const lowercaseWord = word.toLowerCase();
    
    // Reverse the word and compare it with the original word
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
  }
  