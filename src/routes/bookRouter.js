const express = require('express');
const bookRouter = express.Router();

const books= [
  { 
    title: 'Harry Potter',
    genre : 'Fiction',
    author : 'Someone',
    read: false
  },
  { 
    title: 'War and peace',
    genre : 'Historical Fiction',
    author : 'Lev Nikolaveyich',
    read: false
  },
  { 
    title: 'Les Miserables',
    genre : 'Historical Fiction',
    author : 'Victor Hugo',
    read: false
  }
];

bookRouter.route('/').get((req, res)=>{
  res.render('bookListView', { nav:
    [{link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'}],
title: 'EJS', books });
}); 

bookRouter.route('/:id').get((req, res)=>{
  const id = req.params.id;
  // res.send("Hello"+id);
  res.render('bookView', { nav:
    [{link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'}],
title: 'EJS', book: books[id] });
}); 

module.exports = bookRouter;