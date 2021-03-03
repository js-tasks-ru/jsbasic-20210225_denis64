function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength > maxlength) {
    return `${str.substr(0, maxlength - 1)}…`;
  }
  return str;
}
