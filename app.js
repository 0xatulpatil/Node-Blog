
const express = require("express");
const articleRouter =  require("./routes/articles.js");
const Article = require('./models/articlesmdb.js');
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/blog" ,  { useNewUrlParser: true ,  useUnifiedTopology: true });

//Setting up View Engine.
app.set("view-engine", "ejs");

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));

app.get("/", async function(req, res){
   const articles = await Article.find();
   
res.render("articles/index.ejs", {articles: articles});
});
app.use("/articles", articleRouter);//I dont know why I put it here, it was in the tutorial.


app.listen("3000", function(){
    console.log("Server running at Port 3000");
});
