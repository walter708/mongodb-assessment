require('dotenv').config();
const mongoose = require('mongoose')
console.log(process.env.MONGO_URI) // TODO
// const { Schema } = mongoose;


  mongoose.connect(process.env.MONGO_URI);



  let personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
  });
let Person =  mongoose.model('Person', personSchema);

// const done = (val , data) => {
//   console.log("done")
// };
var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

// createAndSavePerson(done)


// createAndSavePerson(done)
arrayOfPeople = [{name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]},
{name: "Jane", age: 14, favoriteFoods: [ "fish", "fresh fruit"]},
{name: " Fonda", age: 18, favoriteFoods: [ "fresh fruit"]}]
const createManyPeople = (arrayOfPeople, done) => {
  
  Person.create(arrayOfPeople, function(err, data){
                  if (err) return console.error(err);
                  done(null , data);
              })
  
};

const findPeopleByName = (personName, done) => {
  Person.find({name : personName} , function(err, data){
    if (err) return console.error(err);
    done(null , data);
})
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
