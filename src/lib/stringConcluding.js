function concluding (stop, str) {
  const position = str.lastIndexOf(stop)
  if (position !== -1) {
    return str.slice(0, position + stop.length)
  }
  else {
    return str
  }
}

module.exports = concluding
