// const router = require('express').Router();
const express = require('express');
const router = express.Router();



const singleArticle = {
  id: '',
  title: '',
  content:  ''
}

const articles = [];

router.get('/', (req, res) => {
  res.json({
    articles
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  // search in articles array about one article that matches the given id
  // send json response with that article if founded
  // if article not found send msg about that 

  const response = {};

  const article = articles.find(art => art.id == id);
  if (!article) {
    response.msg = 'Article Not Found.'
  }else {
    response.article = article
  }

  res.json(response)
})

router.post('/insert', (req, res) => {
  const {title, content} = req.body;

  articles.push({
    id: articles.length,
    title, content
  })
  res.json({
    result: 'Article Inserter Successfully',
    articles
  })
})


router.put('/:id', (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Update Article Title And Content
  // if article not found send msg about that 

  const {id} = req.params
  const {title, content} = req.body;

  const response = {};

  let  article = articles.find(art => art.id == id);

  if (!article) {
    article = {
      title, content, id: articles.length
    };
    articles.push(article);article
    response.msg = 'Article Not Found, New Article Created With Given Data';
  } else {
    article.title = title;
    article.content = content;
    response.msg = 'Article Update Successfully';
  }

  response.article = article
  
  res.json(response)
})

router.delete('/:id', (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Remove Article From Articles Array & Return Remaining Articles
  // if article not found send msg about that 
  const {id} = req.params

  const response = {};
  const articleIndex = articles.findIndex(art => art.id == id);

  if (articleIndex > -1) {
    articles.splice(articleIndex, 1);
    response.msg = 'Article Deleted Successfully';
  } else {
    response.msg = 'Article Not Found';
  }

  response.articles = articles;

  res.json(response)
})


module.exports = router;