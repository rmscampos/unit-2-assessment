var Todo = require('../data/todo');


module.exports = {
    index,
    create,
    delete: deleteTodo
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
  }

function create(req, res) {
    req.body.achieved = false;
    Todo.create(req.body);
    res.redirect('/');
  }

  function index(req, res) {
    res.render('/', {
        todos: Todo.getAll()
    });
}
