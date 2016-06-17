function stringConcluding (str, stop) {
  return str.slice(0, str.lastIndexOf(stop) + stop.length)
}

module.exports = stringConcluding
