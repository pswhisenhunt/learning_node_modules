module.exports = {
  removeBadPeople: function(people) {
    var goodPeople = people.filter(this.toRemove);
    return goodPeople;
  },
  toRemove: function(obj) {
    if(obj.name) {
      return obj;
    }
  },

  sumValidAges: function(people) {
    var validArray = people.map(this.getValidAges)
    var reducedArray = validArray.reduce(function(prev, cur) {
      return prev + cur;
    })
    return reducedArray;
  },

  getValidAges: function(obj) {
    if(obj.age !== undefined) {
      return obj.age
    };
  },
  
  sumAllAges: function(people) {
    var totalAges = 0;
    people.forEach(function(el) {
      if(el.age) {
        totalAges += el.age;
      }
    });
    return totalAges;
  }
};
