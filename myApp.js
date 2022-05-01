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


var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};


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
  Person.find({name : personName} , function(err, personFound){
    if (err) return console.error(err);
    done(null , personFound);
})
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods : food } , function(err, foodFound){
    if (err) return console.error(err);
    done(null , foodFound);
  })

};

const findPersonById = (personId, done) => {
  Person.findById({ "_id" : personId} , function(err, personFound){
    if (err) return console.error(err);
    done(null , personFound);
  })

};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({ "_id" : personId} , function(err, personFound){
    if (err) return console.error(err);
    personFound.favoriteFoods.push(foodToAdd)
    personFound.save(function(err, data) {
      if (err) return console.error(err);
      done(null, data)
    });

  })
  


};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({ name : personName},{age:ageToSet} ,{new:true}, function(err, personFound){
    if (err) return console.error(err);
    done(null ,personFound);
});
};
const removeById = (personId, done) => {
  Person.findOneAndRemove({"_id" : personId} , function(err , personRemoved){
    if (err) return console.error(err);
    done(null ,personRemoved);
  });
  
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err , response) => {
    if (err) return console.error(err);
    done(null , response);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({foodToSearch:foodToSearch})
          .sort({name:"desc"})
                .limit(2)
                    .select("name foodToSearch")
                         .exec(function(err , peopleReturned){
                          if (err) return console.error(err);
                          done(null ,peopleReturned);
                        });


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
