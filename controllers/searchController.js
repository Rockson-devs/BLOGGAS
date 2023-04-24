const Blogpost = require("../model/blogpost");

exports.searchBlog = async (req, res) => {
  let searchTerm = req.query.search_query;
  const searchedBlogposts = await Blogpost.find({
    blogTitle: { $regex: searchTerm, $options: "i" },
  });
  res.render("search", {
    searchedBlogposts,
  });
};
