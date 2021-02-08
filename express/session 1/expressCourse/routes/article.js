// const router = require('express').Router();
const express = require('express');
const router = express.Router();


const { Article } = require('../models/article.model')


router.get('/', async (req, res) => {

  const articles = await Article.find()
  res.json({
    articles
  })
})

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  // search in articles array about one article that matches the given id
  // send json response with that article if founded
  // if article not found send msg about that 

  const response = {};

  try { 
    const article = await Article.findById(id)
    if (!article) {
      response.msg = 'Article Not Found.'
    } else {
      response.article = article
    }
  } catch(err) {
    response.msg = 'Invalid Id'
  }

  res.json(response)
})

router.get('/title/:title', async(req, res) => {
  const {title} = req.params

  const response = {};

  const article = await Article.findOne({title}) // [] documents
  if (!article) {
    response.msg = 'Article Not Found.'
  } else {
    response.article = article
  }

  res.json(response)
})

router.post('/insert', async (req, res) => {
  const {title, content} = req.body;

  const article = Article({
    title, content
  })

  await article.save();

  // articles.push({
  //   id: articles.length,
  //   title, content
  // })

  res.json({
    result: 'Article Inserter Successfully',
    article
  })
})


router.put('/:id', async (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Update Article Title And Content
  // if article not found send msg about that 

  const {id} = req.params
  const {title, content} = req.body;

  const response = {};

  // let  article = articles.find(art => art.id == id);
  let article = await Article.findById(id)

  if (!article) {

    article = Article({
      title, content
    });
    // articles.push(article);article
    response.msg = 'Article Not Found, New Article Created With Given Data';

  } else {

    article.title = title;
    article.content = content;

    response.msg = 'Article Update Successfully';
  }
  
  await article.save()

  response.article = article
  
  res.json(response)
})

router.delete('/:id', async (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Remove Article From Articles Array & Return Remaining Articles
  // if article not found send msg about that 
  const {id} = req.params

  const response = {};

  await Article.findByIdAndDelete(id)
  const articles = await Article.find()
  // const articleIndex = articles.findIndex(art => art.id == id);

  // if (articleIndex > -1) {
  //   articles.splice(articleIndex, 1);
  //   response.msg = 'Article Deleted Successfully';
  // } else {
  //   response.msg = 'Article Not Found';
  // }

  response.articles = articles;

  res.json(response)
})



module.exports = router;