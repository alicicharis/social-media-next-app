export async function verifyPassword(password, enteredPassword) {
  let isValid = false;

  if (password === enteredPassword) isValid = true;

  return isValid;
}
