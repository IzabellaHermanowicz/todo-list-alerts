var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do today?");

while( input !== "quit"){
    
    if ( input === "list"){
       listTodos();
    }
    else if ( input === "new"){
        addTodo();
    }
    else if ( input === "delete"){
        deleteTodo();
    }
    
    input = prompt("What would you like to do today?");
}

console.log("OK, YOU QUIT THE APP")

function listTodos(){
     console.log("*******************");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        })
        console.log("*******************");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    var index = prompt("Give me an index of todo to delete");    
    todos.splice(index,1);
    console.log("Deleted Todos");
}