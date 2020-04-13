const Organization = require('./organization');
const User = require('./user');
const Ticket = require('./ticket');
const Comment = require('./comment');
const Tag = require('./tag');

const models = {
  Organization,
  User,
  Ticket,
  Comment,
  Tag
};

module.exports =  models;
