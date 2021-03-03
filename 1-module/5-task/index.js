function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength > maxlength) {
    let strCut = str.substr(0, maxlength - 1);
    let result = `${strCut}` + `…`
    return result;
  } else {
    return str;
  }
}