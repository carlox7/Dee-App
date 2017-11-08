'use strict';

const Article = require('../model/article');
const createError = require('http-errors');

module.exports = exports = {};

exports.postArticle = function(req){
  return new Article(req.body).save()
    .then(article => article)
    .catch(err => Promise.reject(createError(400), err.message));
};
