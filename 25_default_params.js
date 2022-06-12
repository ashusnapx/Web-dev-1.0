function rollDie(numSides) {
  // default parameter
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}

// new syntax for default parameter
function rollDie(numSides = 6) {
  // default parameter
  return Math.floor(Math.random() * numSides) + 1;
}