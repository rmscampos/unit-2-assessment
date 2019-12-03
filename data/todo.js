const todos = [ 
    {todo: 'go home', done: true}
];

module.exports = {
    getAll,
    create
}


function create(todo) {
    todos.push(todo);
};

function getAll() {
    return todos;
};