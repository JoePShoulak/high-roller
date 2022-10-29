module.exports = random = (start, end) => {
  const num = Math.floor(Math.random() * (end - start + 1)) + start;
  return num.toString();
};
