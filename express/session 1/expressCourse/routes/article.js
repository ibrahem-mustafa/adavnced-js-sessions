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
  // search in articles array about one article that matches the given id
  // send json response with that article if founded
  // if article not found send msg about that 
  res.json({
    article: 'single Article'
  })
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
  res.json({
    result: 'Update Article',
    id,title, content
  })
})

router.delete('/:id', (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Remove Article From Articles Array & Return Remaining Articles
  // if article not found send msg about that 
  const {id} = req.params
  res.json({
    result: 'Delete Article',
    id
  })
})


module.exports = router;