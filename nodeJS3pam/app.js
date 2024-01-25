//https://www.npmjs.com/package/mongoose
//https://www.npmjs.com/package/dotenv
//https://www.npmjs.com/package/express
//https://www.npmjs.com/package/nodemon

const express = require("express");
const app = express();
require("dotenv").config();
const Course = require("./models/Course");
const {
  createUser,
  getAllUsers,
  getCustomId,
  updateUser,
  deleteUser,
} = require("./controllers/userControllers");
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.post("/api/users", createUser);
app.get("/api/users", getAllUsers);
app.get("/api/users/:id", getCustomId);
app.put("/api/users/:id", updateUser);
app.delete("/api/users/:id", deleteUser);
///portas
app.listen(process.env.PORT, () => {
  console.log("Server is running on port: " + process.env.PORT);
});

//

//////////////////////
////////////////Irasyti i duomenu baze//////////
///////////////1 methodas su create
// const createRecord = async () => {
//   const record = await Course.create({
//     title: "JavaScript Development",
//     author: "J. Ena",
//     modules: ["JavaSript 101", "DataBase 101"],
//   });
//   console.log(record);
// };
// // createRecord();
// /////////////2 methodas su save
// const saveRecord = async () => {
//   const course = new Course({
//     title: "Java Development",
//     author: "J. Unks",
//     modules: ["Java 101", "Python 101"],
//   });
//   const result = await course.save();
//   console.log(result);
// };
// // saveRecord();

// //////////////////gauti viska is duomenu bazes/////////////////////
// const getAllCourses = async () => {
//   const getAllCourses = await Course.find();
//   console.log(getAllCourses);
// };
// // getAllCourses();
// ////////////////gauti viena pagal ID//////////
// const getCustomId = async (id) => {
//   const course = await Course.findById(id);
//   console.log(course);
// };
// // getCustomId("65b21d26fd92ed6808921d54");

// ////gauti pagal author

// const getByAuthor = async (myauthor) => {
//   const course = await Course.findOne({ author: myauthor });
//   console.log(course);
// };
// getByAuthor("J. Ena");
// /////////
// //////////updatint irasa/////////
// const updateCourse = async (id) => {
//   const course = await Course.findById(id);

//   if (!course) {
//     return;
//   }
//   course.modules.push("TypeScript");
//   const result = await course.save();
//   console.log(result);
// };
// updateCourse("65b21d26fd92ed6808921d54");
// //////////////

// ////////delete'int 1//////
// const deleteOne = async (id) => {
//   const course = await Course.deleteOne({ _id: id });
//   console.log(course);
// };
// // deleteOne("65b21fbc885b44f6d47a1115");
// ///delete many

// const deleteMany = async (myauthor) => {
//   const course = await Course.deleteMany({ author: myauthor });
//   console.log(course);
// };
// deleteMany("J. Ena");
// /////////
