require('dotenv').config();
const { save } = require('mongodb/lib/operations/collection_ops');
const mongoose = require('mongoose')
console.log(process.env.MONGO_URI) // TODO
const { Schema } = mongoose;
try {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
  console.log(e);
}


let personSchema = new Schema({
  name:{
    type:String, 
    required: true
  },
    
  age:{type:Number},
  
  favoriteFoods : [String]
  
});

let Person =  mongoose.model('Person', personSchema);



const createAndSavePerson = (done) => {
  let person = new Person({
     name:"Walter",
     age:27,
     favoriteFoods : ["rice"]
  })
  person.save((err , data)=>{
    if(data){console.log("saved",data)}
    else{console.log(err)}
    
  })
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
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
