function ucFirst(str) {
  let firstLetter = str.charAt(0);
  let result = str.replace(firstLetter, firstLetter.toUpperCase())
  return result;
}
