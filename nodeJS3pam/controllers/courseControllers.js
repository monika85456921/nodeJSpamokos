const Course = require("../models/Course");
console.log(Course);

//@Create course
//@POST /api/courses

const createCourse = async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.modules) {
    res.status(404).send("Data is missing");
  }
  const course = new Course({
    title: req.body.title,
    author: req.body.author,
    modules: req.body.modules,
  });
  const result = await course.save();
  res.status(200).send(result);
};

//@Get all courses
//@GET /api/courses
const getAllCourses = async (req, res) => {
  const coursesFromDB = await Course.find();
  if (!coursesFromDB) {
    res.status(400).send("data is missing");
    return;
  }
  res.status(200).json(coursesFromDB);
};

//Get custom Id
//@GET /api/courses/:id

const getCourseByID = async (req, res) => {
  const courseByID = await Course.findById(req.params.id);

  if (!courseByID) {
    res.status(400).send("No data");
    return;
  }
  res.status(200).send(courseByID);
};

//@Update course
//@PUT /api/courses/:id

const updateCourse = async (req, res) => {
  const courseByID = await Course.findById(req.params.id);

  if (!courseByID) {
    res.status(400).send("No data");
    return;
  }
  courseByID.title = req.body.title;
  const result = await courseByID.save();
  res.status(200).send(result);
};
//@Delete Course
//@DELETE /api/courses/:id

const deleteCourse = async (req, res) => {
  const courseByID = await Course.findById(req.params.id);

  if (!courseByID) {
    res.status(400).send("No data");
    return;
  }
  const result = await Course.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};
//exports
module.exports = {
  createCourse,
  getAllCourses,
  getCourseByID,
  updateCourse,
  deleteCourse,
};
