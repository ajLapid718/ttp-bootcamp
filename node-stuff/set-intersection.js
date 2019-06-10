setIntersection = (set1, set2) => {
  let intersection = [];
  for (let item in set1) {
    if (set2.indexOf(item) > -1) {
      intersection.push(item);
    }
  }
  return intersection;
};

module.exports = (set1, set2) => {
  return {
    setIntersection: setIntersection
  };
};
