module.exports = {
  setDifference: function(set1, set2) {
    let difference = [];
    for (let index in set1) {
      if (set2.indexOf(set1[index]) === -1) {
        difference.push(set1[index]);
      }
    }
    for (let index in set2) {
      if (set1.indexOf(set2[index]) === -1) {
        difference.push(set2[index]);
      }
    }
    return difference;
  }
};
