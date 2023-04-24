const Blogpost = require("../model/blogpost");
// const Contributor = require('../model/contributor')

// module.exports = async (req, res) => {
//   const allBlogposts = await Blogpost.find({}).populate("contributorID");
//   console.log(req.session);
//   res.render("index", {
//     allBlogposts,
//   });
// };

exports.indexPage = async (req, res) => {
  const allBlogposts = await Blogpost.find({}).populate("contributorID");
  console.log(req.session);
  res.render("index", {
    allBlogposts,
  });
};

// exports.searchBlog = async (req, res) => {
//   const searchedBlogposts = await Blogpost.find({
//     // blogTitle: "/[A-Z]{3}([0-9]{1,4})?|[A-Z]{1,3}/i",
//     blogTitle: "first",
//   });
//   console.log(searchedBlogposts);
//   res.render("search", {
//     searchedBlogposts,
//   });
// };
