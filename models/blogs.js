const mongoose = require("mongoose")
const mongo = require("mongodb")
const dbUrl = "mongodb://localhost:27017/blogs"

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
})
const db = mongoose.connection
const Schema = mongoose.Schema

const blogSchema = new Schema({
  id: {
    type: Schema.OpjectId,
  },
  name: {
    type: String,
    required: true,
  },
  num_vaccine: {
    type: String,
    required: true,
  },
  name_vaccine: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
})
const Blogs = (module.exports = mongoose.model("blogs", blogSchema))
module.exports.createBlog = function (newBlogs, callback) {
  newBlogs.save(callback)
}
