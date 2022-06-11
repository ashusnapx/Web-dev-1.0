function checkLength(name) {
  return name.length < 10;
}

function validUserNames(usernames) {
  const result = usernames.filter(checkLength);
  return result;
}
