function curriedAdd(total) {
  if (total === undefined) return 0;
  return function adder(num) {
    if (num === undefined) return total;
    total += num;
    return adder;
  };
}

module.exports = { curriedAdd };
