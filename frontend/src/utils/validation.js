
export const validatePhone = (number) => {
  if (number.length > 0) {
    const regrex = /^1\d{10}$/g;
    return number.match(regrex)
  }
  return true;
}
