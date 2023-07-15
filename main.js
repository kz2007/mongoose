require('dotenv').config()
let mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: Number,
    favoriteFoods: []
  })
  
  PersonModel = new mongoose.model("test_users", PersonSchema)



//Create and Save a Record of a Model
/*
  let person = new PersonModel({
    name: "John",
    age: 32,
    favoriteFoods: ["Sushi", "Thai Curry", "Chocolate Cake"]
  }
  );
  person.save();
*/

//Create Many Records with model.create()
/*
PersonModel.create([
  {
    name: "John",
    age: 25,
    favoriteFoods: ["Pizza", "Burger", "Sushi"]
  },
  {
    name: "Emily",
    age: 30,
    favoriteFoods: ["Pasta", "Ice Cream", "Tacos"]
  },
  {
    name: "Michael",
    age: 40,
    favoriteFoods: ["Steak", "Salad", "Chocolate"]
  },
  {
    name: "Sarah",
    age: 22,
    favoriteFoods: ["Ramen", "Biryani", "Cupcakes"]
  },
  {
    name: "David",
    age: 35,
    favoriteFoods: ["Sushi", "Burger", "Tacos"]
  },
  {
    name: "Emma",
    age: 28,
    favoriteFoods: ["Pizza", "Pasta", "Ice Cream"]
  }
])
*/
//Use model.find() to Search Your Database
/*
PersonModel.find({name: "John"}).then((resp)=>{
  console.log(resp);
  return resp;
}).catch((err) => console.log(err));
*/
//Use model.findById() to Search Your Database By _id
/*
PersonModel.find({_id: "64b24ecc6f1b08bd724c85fd"}).then((resp)=>{
  console.log(resp);
  return resp;
}).catch((err) => console.log(err));
*/
//Perform Classic Updates by Running Find, Edit, then Save
/*
PersonModel.find({_id: "64b24ecc6f1b08bd724c85fd"}).then((resp)=>{
  resp[0].favoriteFoods.push("hamburger")
  resp[0].save()
}).catch((err) => console.log(err));
*/
//Perform New Updates on a Document Using model.findOneAndUpdate()
/*
PersonModel.findOneAndUpdate({name: "Emily"}, { age: 20 }, {new: true})
*/
//Delete One Document Using model.findByIdAndRemove
/*
PersonModel.findByIdAndRemove("64b24dc55ae73ec98e2832db").then(
PersonModel.find({}).then((resp)=>{
  console.log(resp);
  return resp;
}).catch((err) => console.log(err)));
*/
//Delete Many Documents with model.remove()
/*
PersonModel.deleteMany({ name:"Mary" }).then(
PersonModel.find({}).then((resp)=>{
  console.log(resp);
  return resp;
}).catch((err) => console.log(err)));
*/
//Chain Search Query Helpers to Narrow Search Results*
