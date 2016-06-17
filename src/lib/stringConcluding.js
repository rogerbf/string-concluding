function stringConcluding (str, stop) {
  const position = str.lastIndexOf(stop)
  if (position !== -1) {
    return str.slice(0, position + stop.length)
  }
  else {
    return -1
  }
}

module.exports = stringConcluding
