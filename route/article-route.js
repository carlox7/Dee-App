'use strict';

// const bearerAuth = require('../lib/bearer-auth-middleware');
const articleController = require('../controller/article-controller');


module.exports = function(router){
  router.post('/article',  (req, res) => {
    articleController.postArticle(req)
      .then(article => res.status(201).json(article))
      .catch(err => res.status(err));
  });
  
  return router;
};
