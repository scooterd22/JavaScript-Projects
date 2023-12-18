
function get_todos() {
    // creates an array of tasks that are inputed
    var todos = new Array;
    // pulls the task that was saved in browser memory
    var todos_str = localStorage.getItem('todo');
    // if the input is null then json.parse will commuincate with web browser to make the task a js object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// adds the inputed task to the get_todos function array
function add() {
    // creates variable of inputed task
    var task = document.getElementById('task').value;
    var todos = get_todos(); 
    // adds a new task to the end of the array
    todos.push(task);
    // converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    

    return false
}

// show keeps the task permanetly displayed on the screen
function show() {
    var todos = get_todos();

    // sets up each task in an ul
    var html = '<ul>';
    // displays a task to be in the order that it is inputed
    for (var i=0; i <todos.length; i++) {
        // displays in list and creates the x button
        html += '<li>' + todos[i] + '<button class="remove" onclick="deletetask()" id="' + i + '">x</button></li>'
        // 1. dog id= 1 x 
    };
    html += '</ul>';
    // displays task as a list
    document.getElementById('todos').innerHTML = html;


    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', deletetask);

    }


}
// displays the inputed task when the add item button is clicked
document.getElementById('add').addEventListener('click', add);
// keeps inputs on screen
show();


// this function is ran when the x button is clicked
function deletetask() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
    

}

// var x = addnumbers(10,3)

// function addnumbers(p1, p2) {
//     return p1 + p2;
// }