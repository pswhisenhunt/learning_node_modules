var people = require('./people.js');

var peopleArray = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

var goodPeople = people.removeBadPeople(peopleArray);
console.log(goodPeople);

var totalValidAges = people.sumValidAges(goodPeople);
console.log(totalValidAges);

var totalAges = people.sumAllAges(peopleArray);
console.log(totalAges);
