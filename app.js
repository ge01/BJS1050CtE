function confirmEnding(str, target) {

  return str.substring(str.length - target.length) == target;
}

// Test data
console.log(confirmEnding("Bastian", "n"));
