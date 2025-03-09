import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

function addBlogToList(title, text) {
  var blog = {
    blogId: blogs.length + 1,
    blogTitle: title,
    blogText: text,
  };

  blogs.push(blog);
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body["blogTitle"];
  const text = req.body["blogText"];

  addBlogToList(title, text);

  res.render("index.ejs", {
    allBlogs: blogs,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
