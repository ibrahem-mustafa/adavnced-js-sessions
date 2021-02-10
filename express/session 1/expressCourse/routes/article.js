// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const {ObjectId} = require('mongoose').Types
const { Article } = require('../models/article.model')
const {isNotAdmin, validateToken} = require('../methods/validation')


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

router.get('/publisher/:id', async (req, res) => {
  const {id}= req.params

  const articles = await Article.find({
    "publisher.id": id,
  });

  
  return res.json({
    articles
  });
})

// router.get('/title/:title', async(req, res) => {
//   const {title} = req.params

//   const response = {};

//   const article = await Article.findOne({title}) // [] documents
//   if (!article) {
//     response.msg = 'Article Not Found.'
//   } else {
//     response.article = article
//   }

//   res.json(response)
// })




router.post('/insert', validateToken, isNotAdmin, async (req, res) => {

  const {title, content} = req.body;

    
  const article = Article({
    title, content,
    publisher: {
      id: req.user.id,
      name: req.user.name
    }
  })

  await article.save();

  res.json({
    result: 'Article Inserter Successfully',
    article
  })
  
})


router.put('/:id', async (req, res) => {

  // ************* Notes ***************
  // if (!ObjectId.isValid(id)) {
  //   console.log({newObjId: new ObjectId()})
  //   return res.status(400).json({msg: "Invalid Article Id"})
  // }
  // console.log(new ObjectId(id).equals(new ObjectId(id)))
  // *********** End Notes *************

  // search in articles array about one article that matches the given id
  // If Article Founded, Update Article Title And Content
  // if article not found send msg about that 
  

  const {authorization} = req.headers
  const {id} = req.params
  const {title, content} = req.body;
  
  try {
    const token = authorization.split(' ')[1]
    const user = jwt.verify(token, '53node92')
    let statusCode;
    const response = {};

    let article = await Article.findById(id)

    if (!article) {

      article = Article({
        title, content, 
        publisher: {
          id: user.id,
          name: user.name
        }
      });

      statusCode = 201;
      response.msg = 'Article Not Found, New Article Created With Given Data';

    } else {
      if (!new ObjectId(article.publisher.id).equals(new ObjectId(user.id))) {
        response.msg = 'Can Not Access To This Article'
        statusCode = 403
      } else {
        article.title = title;
        article.content = content;
        statusCode = 200;
        response.msg = 'Article Update Successfully';
      }

    }
    
    if (statusCode != 403) {
      await article.save()
      response.article = article
    }
    
    res.status(statusCode).json(response)
  } catch(err) {
    console.log(err);
    res.status(403).json({msg: "Invalid Token"})
  }

  
})

router.delete('/:id', validateToken, async (req, res) => {
  // search in articles array about one article that matches the given id
  // If Article Founded, Remove Article From Articles Array & Return Remaining Articles
  // if article not found send msg about that 
  const {id} = req.params
  const response = {};
  
  const article = await Article.findById(id);

  if (
    new ObjectId(article.publisher.id).equals(new ObjectId(user.id)) ||
    req.user.role === 'admin'
  ) {
    (await article).delete()
  }
  
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