const express = require("express");
const router = express.Router();
//requiring model for database
const Article = require('./../models/articlesmdb.js');


//for handling requests for posting Articles.
router.get("/new", function(req, res){
    res.render("articles/new.ejs", {article: new Article()});
});

router.get("/:id",async (req, res)=>{ //By now I have no idea What I am doing.
    const article = await Article.findById(req.params.id);
    if(article == null){res.redirect('/');}
res.render('articles/show.ejs', {article: article});
});

//route for when post is deleted.
router.delete('/:id', async(req, res)=>{
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
}) ;

//for handling form post method when someoen posts a Article.
router.post("/",async (req, res)=>{
let article = new Article({
    title: req.body.title,
    description: req.body.description,

});
try{
await article.save();
res.redirect(`/articles/${article.id}`);//If success then redirect to the article.
}catch(e){
res.render('article/new', {article: article}); //Ifthere is an error redirect to Same page
}
});


//exporting this module
module.exports = router;